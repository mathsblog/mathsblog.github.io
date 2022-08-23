import React from 'react';
import withRouter from '../withRouter';

import Figure from './Figure';

import * as articles from '../articles/';
import { Link } from 'react-router-dom';

export class Article extends React.Component {
    render() {
        const Content = articles[this.props.router.params.article];
        return (
            <div className={(this.props.className || '') + ' Article'}>
                <div className="progress"></div>
                <div className="main">
                    <article>
                        <Content
                            components={{
                                Data: ({ title, author, time }) => (
                                    <React.Fragment>
                                        <h1 className="title">{title}</h1>
                                        <i className="reading-time">
                                            Reading time: {time}
                                        </i>
                                        <Link
                                            to={'//github.com/' + author + '/'}
                                            about="Authors GitHub profile"
                                        >
                                            <i className="author">
                                                By {author}
                                                <img
                                                    alt=""
                                                    src={
                                                        '//github.com/' +
                                                        author +
                                                        '.png?size=20'
                                                    }
                                                />
                                            </i>
                                        </Link>
                                    </React.Fragment>
                                ),
                                Figure,
                            }}
                        />
                    </article>
                </div>
            </div>
        );
    }
}

const ArticleWithRouter = withRouter(Article);
export default ArticleWithRouter;
