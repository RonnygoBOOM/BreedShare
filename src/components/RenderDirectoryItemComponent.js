import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({breed, onClick}) {
    return (
            <div key={breed.id}>
                <Card className="directory-card mt-4 m-1" onClick={() => onClick(breed.id)}>
                    <Link to={`/directory/${breed.id}`}></Link>
                    <CardImg width="100%" className="directory-image" src={breed.image} alt={breed.name} />
                    <CardImgOverlay>
                        <CardTitle>{breed.name}</CardTitle>   
                    </CardImgOverlay>
                </Card>
            </div>
    );
}

export default RenderDirectoryItem;