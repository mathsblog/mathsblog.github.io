import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Page from './Page';
import App from './App';
import Index from './components/Index';
import AboutUs from './components/AboutUs';
import Article from './components/Article';
import Articles from './components/Articles';
import NotFound from './components/404';

export default () => (
    <Routes>
        <Route path="/" element={<Page />}>
            <Route path="/" element={<App />}>
                <Route index element={<Index />} />
                <Route path="/about_us/" element={<AboutUs />} />
                <Route path="articles">
                    <Route index element={<Articles />} />
                    <Route path=":article" element={<Article />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Route>
    </Routes>
);
