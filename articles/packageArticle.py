from bs4 import BeautifulSoup
from typing import *
import shutil
import sys
import re
import os

orig_prettify = BeautifulSoup.prettify
r = re.compile(r'^(\s*)', re.MULTILINE)
def prettify(self, encoding=None, formatter="minimal", indent_width=4):
    return r.sub(r'\1' * indent_width, orig_prettify(self, encoding, formatter))
BeautifulSoup.prettify = prettify

LOCAL_PREFIX: str = os.path.dirname(os.path.realpath(__file__)) + "\\"
WEBSITE_PREFIX: str = '\\'.join(LOCAL_PREFIX.split("\\")[:-2]) + "\\website\\"
ARTICLES_PREFIX: str = WEBSITE_PREFIX + "articles\\"

def md_to_html(s: str) -> str:
    s += "\n"
    
    subs: Dict[str, str] = {
        r"^## (.*)$": r"<h2>\1</h2>",
        r"^!\[(.*)?]\((.*)?\)$": r"<figure class='text-center'><img src='\2' class='figure-img img-fluid rounded' alt='\1'><figcaption class='figure-caption'>\1</figcaption></figure>",
        r"\n\n([^<])": r"\n\n<p>\n\1",
        r"([^>])\n\n": r"\1\n</p>\n"
    }

    for pattern, repl in subs.items():
        s: str = re.sub(
            pattern,
            repl,
            s,
            flags=re.M
        )
    
    return re.sub(r"\n", " ", s)

def package(path: str, timein: int, auth: str) -> Tuple[str, str]:
    """
    Packages a markdown file into a HTML file with Maths Blog template.
    
    Parameters:
        path (str): The path to the article's markdown file.
        timein (int): The estimated read time in minutes.
        auth (str): The author's username.
        
    Returns:
        str: Article's short title.
        str: Article's HTML.
    """
    
    with open(path) as f:
        text: str = f.read()
    
    # Get title from leading heading
    head: re.Pattern = re.compile(r"^# (?P<main>.*?) \((?P<short>.*?)\)$", flags=re.M)
    
    groups: re.Match = re.search(head, text)
    
    if not groups: raise ValueError("Markdown file does not contain a valid heading")
    
    groups = groups.groupdict()
    title: str = groups["main"]
    sTitle: str = groups["short"]
    
    text: str = re.sub(head, '', text)
    
    # Translate rest of file
    html: str = md_to_html(text)
    
    # Insert translation and other details to template
    
    # Load template
    with open(LOCAL_PREFIX + "template.html") as t:
        article: str = t.read()
        
    # Convert time
    hours: int = timein // 60
    minutes: int = timein % 60
    
    time: List[int] = []
    
    if hours: time.append(str(hours) + " hours")
    if minutes: time.append(str(minutes) + " minutes")
    
    time: str = ' and '.join(time)
       
    # Fill placeholders 
    to_fill: Dict[str, str] = {
        "s_title": sTitle,
        "title": title,
        "author": auth,
        "time": time,
        "content": html
    }
    
    for placeholder, value in to_fill.items():
        article: str = re.sub(
            f"{{ {placeholder} }}",
            value,
            article
        )
    
    return (sTitle, BeautifulSoup(article, "html.parser").prettify())


def push(title: str, html: str, *args: str) -> None:
    """
    Pushes a HTML string and other files to the website as an article and [updates other pages] -> (Could make those update automatically via JS?).
    
    Parameters:
        title (str): Short title of article.
        html (str): The article in HTML.
        args (str): Paths of other file dependancies.
        
    Returns:
        int: 0 on success, other on faliure.
    """
    
    target: str = ARTICLES_PREFIX + title + "\\"
    
    # Create article folder
    try: os.mkdir(target)
    except FileExistsError: raise ValueError(f"Article with name `{title}` already exists!")
    
    # Create file with HTML in folder and copy over required files
    with open(target + "index.html", "w") as article:
        article.write(html)
        
    for path in args:
        shutil.copy(path, target)
        
    if os.path.exists(WEBSITE_PREFIX + "articles.txt"):
        with open(WEBSITE_PREFIX + "articles.txt", "a") as articles:
            articles.write(f"\n{title}")
    else:
        with open(WEBSITE_PREFIX + "articles.txt", "w") as articles:
            articles.write(title)

def main() -> int:
    if len(sys.argv) != 4:
        print("Usage: packageArticle.py [folder] [time] [author]")
        exit(0)
        
    try:
        folder: str = sys.argv[1]
        time: int = int(sys.argv[2])
        author: str = sys.argv[3]
    except ValueError:
        print("Time should be a number!")
        exit(1)
    
    process: str = LOCAL_PREFIX + folder + "\\"
    
    if not os.path.isdir(process):
        print("Folder should be the name of a valid folder in the top-level `articles\\` directory!")
        exit(1)
    
    sTitle, html = package(process + "article.md", time, author)
    
    supported: Tuple[str] = (".png", ".jpeg", ".gif")
    
    push(sTitle, html, *[process + f for f in os.listdir(process) if f.endswith(supported)])

if __name__ == "__main__":
    main()
