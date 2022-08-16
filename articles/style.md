# Structure Guide for Articles

Articles should be made up of a markdown file containing the article's text and at least two photos; a banner, a cover image, and any figures used in the article.

## Markdown syntax

An articles markdown text should start with a top level heading (#) of the form

```(markdown)
# Main Title (Shortened title)
```

where the main title is the full title of the article and the shortened title is the title to be displayed in as the title of the browser tab and acts as the directory title. Images should be inserted using the standard markdown image format, `![alt-text](source)`, where the source is `figure*.png` and the alt-text is the caption of the figure. Paragraph breaks should be denoted with blank lines between paragraphs.

## Loading an article

To have an article converted to HTML and loaded onto the blog, run the command-line tool packageArticle.py with the following 3 parameters; name of article folder, reading time (minutes), username to display.
