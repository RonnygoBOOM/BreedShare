import React from 'react';
import BreedInfo from './BreedInfoComponent';
import RenderDirectoryItem from './RenderDirectoryItemComponent';


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
