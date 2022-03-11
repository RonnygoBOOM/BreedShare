import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image2} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <h2>Featured Dog:</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-4">
                    <RenderCard item={props.breed} />
                </div>
            </div>
        </div>
    );
}

export default Home;