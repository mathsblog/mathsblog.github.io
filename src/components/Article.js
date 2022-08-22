import React from 'react';
import withRouter from '../withRouter';

import Data from './Data';
import Figure from './Figure';

import * as articles from '../articles/';

export class Article extends React.Component {
    render() {
        const Content = articles[this.props.router.params.article];
        return (
            <Content
                components={{
                    Data,
                    Figure,
                }}
            />
        );
    }
}

const ArticleWithRouter = withRouter(Article);
export default ArticleWithRouter;
