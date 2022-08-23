import React from 'react';
import * as articles from '../articles';
import { Article } from './Article';

export default class Articles extends React.Component {
    render() {
        return (
            <div className={(this.props.className || '') + ' Articles'}>
                <div>
                    {Object.keys(articles).map((slug, i) => (
                        <Article format="card" article={slug} key={i} />
                    ))}
                </div>
            </div>
        );
    }
}
