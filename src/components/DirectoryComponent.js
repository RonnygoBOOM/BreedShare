import React, {Component} from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: [
                {
                    id: 0,
                    name: 'Windsprite',
                    image: 'assets/images/windsprite-snow.jpg',
                    description: 'Windsprites (formerly known as Longhaired Whippets) are a delightful, small, coated sighthound. Although closely related, they are a totally separate breed from the more widely known smooth coated Whippets.'
                },
                {
                    id: 1,
                    name: 'Silken Windhound',
                    image: 'assets/images/silken-windhound.jpg',
                    description: 'The Silken Windhound is an elegant, small to medium-sized sighthound, with a moderately long, silky coat. Its classic lines and athletic build are the hallmarks of a true coursing dog. When viewing a Silken Windhound, one has the impression of grace, balance and strength integrated with exceptional running ability.'
                },
                {
                    id: 2,
                    name: 'Whippet',
                    image: 'assets/images/whippet.jpg',
                    description: 'The Whippet, like the Greyhound, is an elegant, slender dog. While not quite as fast as the speed of light, the breed is the fastest domesticated animal in its weight class, reaching up to 35 mph.'
                },
                {
                    id: 4,
                    name: 'Dachschund',
                    image: 'assets/images/whippet.jpg',
                    description: 'The Whippet, like the Greyhound, is an elegant, slender dog. While not quite as fast as the speed of light, the breed is the fastest domesticated animal in its weight class, reaching up to 35 mph.'
                }
            ]
        };
    }
    
    render() {
        const directory = this.state.breed.map(breed => {
            return (
                <div className="col">
                    <h2>{breed.name}</h2>
                    <img className="directory-image" src={breed.image} alt={breed.name} />
                    <p>{breed.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div classname="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;