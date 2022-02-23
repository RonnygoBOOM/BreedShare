import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class BreedInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

renderComments(comments) {
        if (comments) {
            return (
                <div className="container">
                    <div className="col-md-8 offset-md-2 mt-4">
                        <h4>Comments</h4>
                        {this.props.breed.comments.map(comment => 
                        <div key={comment.id}>{comment.text}
                        <br />--{comment.author} 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                        )}
                    </div>
                </div>
            );
        }
        return <div/>;
    }


    renderBreed(breed) {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2 mt-4">
                    <Card>
                        <CardImg top src={breed.image2} alt={breed.name} />
                        <CardBody>
                            <CardTitle>{breed.name}</CardTitle>
                            <CardText>{breed.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }   

    render() {

        if (this.props.breed) {
            return (
                <>
                    <div>
                        {this.renderBreed(this.props.breed)}
                    </div>
                    <div>
                        {this.renderComments(this.props.breed.comments)}
                    </div>
                </>
            );
        }
        return(
            <div>

            </div>
        );
    }
}

export default BreedInfo;