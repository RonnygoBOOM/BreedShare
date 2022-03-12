import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({breed}) {
    return (
            <div key={breed.id}>
                <Card className="directory-card mt-4 m-1">
                    <Link to={`/directory/${breed.id}`}></Link>
                    <CardImg width="100%" className="directory-image" src={breed.image} alt={breed.name} />
                    <CardImgOverlay>
                        <CardTitle>{breed.name}</CardTitle>   
                    </CardImgOverlay>
                </Card>
            </div>
    );
}


function Directory(props) {

    const directory = props.breed.map(breed => {
        return (
            <div className="col">
                <RenderDirectoryItem breed={breed} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                    {directory}  
            </div>
        </div>
    );
}

export default Directory;


