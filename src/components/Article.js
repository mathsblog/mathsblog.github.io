import React from 'react';
import withRouter from '../withRouter';

import Figure from './Figure';

import * as articles from '../articles/';

export class Article extends React.Component {
    render() {
        const Content = articles[this.props.router.params.article];
        return (
            <div className={(this.props.className || '') + ' Article'}>
                <div>
                    <Content
                        components={{
                            Data: ({ title, author, time }) => (
                                <React.Fragment>
                                    <h1 className="title">{title}</h1>
                                    <i className="reading-time">
                                        Reading time: {time}
                                    </i>
                                    <i className="author">
                                        By {author}
                                        <img
                                            alt=""
                                            src={
                                                'https://github.com/' +
                                                author +
                                                '.png?size=20'
                                            }
                                        />
                                    </i>
                                </React.Fragment>
                            ),
                            Figure,
                        }}
                    />
                </div>
            </div>
        );
    }
}

const ArticleWithRouter = withRouter(Article);
export default ArticleWithRouter;
