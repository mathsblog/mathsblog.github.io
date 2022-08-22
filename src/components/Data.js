import React from 'react';

export default class Data extends React.Component {
    render() {
        return (
            <pre>
                {`
title = ${this.props.title}
author = ${this.props.author}
time = ${this.props.time}
                `}
            </pre>
        );
    }
}
