import React from 'react';
import fetch from 'sync-fetch';

const collaborators = [
    'JosephAbbey',
    'BenjaminJones07',
    'JustTyping1',
    'Willtheszeras',
];

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className={(this.props.className || '') + ' AboutUs'}>
                <h2>
                    Here is our team of {collaborators.length} amazing
                    collaborators!
                </h2>
                <div>
                    {collaborators.map((collaborator, i) => (
                        <a key={i} href={'//github.com/' + collaborator + '/'}>
                            <div>
                                <img
                                    src={
                                        '//github.com/' +
                                        collaborator +
                                        '.png?size=200'
                                    }
                                    alt={
                                        collaborator +
                                        "'s GitHub profile picture"
                                    }
                                />
                                <div>
                                    <h2>{collaborator}</h2>
                                    <p>
                                        {
                                            fetch(
                                                'https://api.github.com/users/' +
                                                    collaborator
                                            ).json().bio
                                        }
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}
