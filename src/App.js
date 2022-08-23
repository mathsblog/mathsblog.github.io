import React from 'react';
import { Outlet } from 'react-router';

import resetStyles from './myreset.css';
import styles from './index.css';
import articleStyles from './components/Article.css';
import figureStyles from './components/Figure.css';

export default class App extends React.Component {
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
                            __html: ':root{--theme-color:#ffdb14;}',
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: 'window.addEventListener("scroll",()=>{document.body.style.setProperty("--scrollY", scrollY);document.body.style.setProperty("--scrollHeight", document.body.scrollHeight-innerHeight);})',
                        }}
                    />
                    <meta name="description" content="Maths Blog" />
                    <title>Maths Blog</title>
                    <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
                    <style dangerouslySetInnerHTML={{ __html: styles }} />
                    <style
                        dangerouslySetInnerHTML={{ __html: articleStyles }}
                    />
                    <style dangerouslySetInnerHTML={{ __html: figureStyles }} />
                </head>
                <body>
                    <Outlet {...this.props} />
                </body>
            </html>
        );
    }
}
