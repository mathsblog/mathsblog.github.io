import React from 'react';
import { Outlet } from 'react-router';

import resetStyles from './myreset.css';
import styles from './index.css';
import indexStyles from './components/Index.css';
import aboutUsStyles from './components/AboutUs.css';
import articleStyles from './components/Article.css';
import articlesStyles from './components/Articles.css';
import figureStyles from './components/Figure.css';
import navbarStyles from './components/Navbar.css';

export default class Page extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#ffdb14" />
                    <style
                        dangerouslySetInnerHTML={{
                            __html: ':root{--theme-color:#ffdb14;--scroll:0;}',
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: 'window.addEventListener("scroll",()=>document.body.style.setProperty("--scroll",document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)))',
                        }}
                    />
                    <meta name="description" content="Maths Blog" />
                    <title>Maths Blog</title>
                    <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
                    <style dangerouslySetInnerHTML={{ __html: styles }} />
                    <style dangerouslySetInnerHTML={{ __html: indexStyles }} />
                    <style
                        dangerouslySetInnerHTML={{ __html: aboutUsStyles }}
                    />
                    <style
                        dangerouslySetInnerHTML={{ __html: articleStyles }}
                    />
                    <style
                        dangerouslySetInnerHTML={{ __html: articlesStyles }}
                    />
                    <style dangerouslySetInnerHTML={{ __html: figureStyles }} />
                    <style dangerouslySetInnerHTML={{ __html: navbarStyles }} />
                    <base href="/" />
                </head>
                <body>
                    <Outlet {...this.props} />
                </body>
            </html>
        );
    }
}
