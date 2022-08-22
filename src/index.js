import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom/server';

import Routes from './Routes';

export default function render(locals, callback) {
    var html = ReactDOMServer.renderToStaticMarkup(
        <Router location={locals.path}>
            <Routes />
        </Router>
    );
    callback(null, '<!DOCTYPE html>' + html);
}
