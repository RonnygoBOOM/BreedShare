import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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
    
    renderSelectedBreed(breed) {
        if (breed) {
            return (
                <div className="col col-md-8 offset-md-2">
                <Card>
                    <CardImg top src={breed.image2} alt={breed.name} />
                    <CardBody>
                        <CardTitle>{breed.name}</CardTitle>
                        <CardText>{breed.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.breed.map(breed => {
            return (
                <div className="col">
                <div key={breed.id}>
                    <Card onClick={() => this.onBreedSelect(breed)}>
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
                <div className="row">
                    <div className="col">
                        {this.renderSelectedBreed(this.state.selectedBreed)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;