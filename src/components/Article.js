import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import withRouter from '../withRouter';

import Figure from './Figure';

import * as articles from '../articles/';

export class Article extends React.Component {
    render() {
        const Content =
            articles[this.props.article || this.props.router.params.article]
                .default;
        var data =
            articles[this.props.article || this.props.router.params.article]
                .data;
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
            <React.Fragment>
                <div className="progress"></div>
                <div className={(this.props.className || '') + ' Article'}>
                    <div className="main">
                        <article>
                            <h1 className="title">{data.title}</h1>
                            <i className="reading-time">
                                Reading time: {data.time}
                            </i>
                            <a href={'//github.com/' + data.author + '/'}>
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
                            </a>
                            <Content
                                components={{
                                    Figure,
                                }}
                            />
                        </article>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const ArticleWithRouter = withRouter(Article);
export default ArticleWithRouter;
