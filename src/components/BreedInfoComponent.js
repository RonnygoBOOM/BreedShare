import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



   function RenderBreed({breed}) {
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-4">
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

    function RenderComments({comments}) {
        if (comments) {
            return (
                <div className="container">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-4">
                        <h4>Comments</h4>
                        {comments.map(comment => 
                        <div key={comment.id}>{comment.text}
                        <br />--{comment.author}
                        {', '}
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                        )}
                    </div>
                </div>
            );
        }
        return <div/>;
    }

    function BreedInfo(props) {

        if (props.breed) {
            return (
                <>
                    <div>
                        <RenderBreed breed={props.breed}/>
                    </div>
                    <div>
                        <RenderComments comments={props.breed.comments}/>
                    </div>
                </>
            );
        }
        return(
            <div>
            </div>
        );
    }

export default BreedInfo;