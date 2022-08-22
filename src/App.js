import React from 'react';
import { Outlet } from 'react-router';

import styles from './index.css';

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
                </head>
                <body>
                    <noscript>
                        You need to enable JavaScript to run this app.
                    </noscript>
                    <Outlet {...this.props} />
                </body>
            </html>
        );
    }
}
