import React from 'react';
import { Outlet } from 'react-router';

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
                    <meta name="description" content="Maths Blog" />
                    <title>Maths Blog</title>
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
