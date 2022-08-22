import React from 'react';

export default class Figure extends React.Component {
    render() {
        return (
            <figure
                className={(this.props.className || '') + ' Figure'}
                {...this.props}
            >
                {this.props.children}
                <caption>{this.props.caption}</caption>
            </figure>
        );
    }
}
