import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import withRouter from '../withRouter';

import Figure from './Figure';

import * as articles from '../articles/';

export class Article extends React.Component {
    render() {
        const Content =
            articles[this.props.article || this.props.router.params.article];
        var data = {};
        var a = ReactDOMServer.renderToStaticMarkup(
            <Content
                components={{
                    Data: ({ title, author, time, cover }) => {
                        data = { title, author, time, cover };
                        return (
                            <React.Fragment>
                                <h1 className="title">{title}</h1>
                                <i className="reading-time">
                                    Reading time: {time}
                                </i>
                                <a href={'//github.com/' + author + '/'}>
                                    <i className="author">
                                        By
                                        <img
                                            alt=""
                                            src={
                                                '//github.com/' +
                                                author +
                                                '.png?size=20'
                                            }
                                        />{' '}
                                        {author}
                                    </i>
                                </a>
                            </React.Fragment>
                        );
                    },
                    Figure,
                }}
            />
        );
        return this.props.format === 'card' ? (
            <a
                href={
                    '/articles/' +
                    (this.props.article || this.props.router.params.article) +
                    '/'
                }
            >
                <div>
                    <img src={'/' + data.cover} alt="" />
                    <div>
                        <h2 className="title">{data.title}</h2>
                        <p>
                            <i className="reading-time">
                                Reading time: {data.time}
                            </i>
                            <i className="author">
                                By
                                <img
                                    alt=""
                                    src={
                                        '//github.com/' +
                                        data.author +
                                        '.png?size=20'
                                    }
                                />{' '}
                                {data.author}
                            </i>
                        </p>
                    </div>
                </div>
            </a>
        ) : (
            <div className={(this.props.className || '') + ' Article'}>
                <div className="progress">
                    <div></div>
                </div>
                <div className="main">
                    <article dangerouslySetInnerHTML={{ __html: a }} />
                </div>
            </div>
        );
    }
}

const ArticleWithRouter = withRouter(Article);
export default ArticleWithRouter;
