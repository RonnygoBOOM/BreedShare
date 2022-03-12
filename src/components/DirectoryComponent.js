import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import BreedInfo from './BreedInfoComponent';


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


function Directory(props) {

    const directory = props.breed.map(breed => {
        return (
            <div className="col">
                <RenderDirectoryItem breed={breed} onClick={props.onClick}/>
            </div>
        );
    });
    return (
        <>
        <div className="container">
            <div className="row">
                    {directory}  
            </div>
        </div>
        <div className="container">
            <div className="row">
                <BreedInfo breed={props.breed.filter(breed => breed.id === props.selectedBreed)[0]}/>
            </div>
        </div>
        
        </>
    );
}

export default Directory;
