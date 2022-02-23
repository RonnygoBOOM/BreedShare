import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import BreedInfo from './BreedInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBreed: null
        };
    }

    onBreedSelect(breed) {
        this.setState({selectedBreed: breed});
    }

    render() {
        const directory = this.props.breed.map(breed => {
            return (
                <div className="col">
                <div key={breed.id}>
                    <Card className="directory-card mt-4 m-1" onClick={() => this.onBreedSelect(breed)}>
                        <CardImg width="100%" className="directory-image" src={breed.image} alt={breed.name} />
                        <CardImgOverlay>
                            <CardTitle>{breed.name}</CardTitle>   
                        </CardImgOverlay>
                    </Card>
                </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                        {directory}  
                </div>
                <BreedInfo breed={this.state.selectedBreed} />
            </div>
        );
    }
}

export default Directory;