import React from 'react';

import IntroImage from '../images/introimage.png';

export default class Index extends React.Component {
    render() {
        return (
            <div className={(this.props.className || '') + ' Index'}>
                <img src={IntroImage} alt="Images of famous mathematician" />

                <article className="intro">
                    <h1>Welcome to Science Blog!</h1>
                    <p>
                        Hello and welcome to science blogs. We are a group of
                        students passionate about science who want to share
                        this with the world. On this website, you can learn
                        about exciting scientific content that is explained in
                        a non-traditional way. Our goal with this is to make
                        science more accessible and enjoyable for people
                        around the world! Click on "articles" at the top to
                        check out some of our latest content!
                    </p>
                </article>
            </div>
        );
    }
}
