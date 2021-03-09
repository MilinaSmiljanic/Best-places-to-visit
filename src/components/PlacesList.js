import React from "react";
import Place from "./Place"

const PlacesList = ({places, changeActivePlace}) => {
    const allPlaces = places.map(place => {
        return(
            <div className="col-6 mt-3" key={place.id}>
               <Place place={place} changeActivePlace={changeActivePlace}/>
            </div>
           
        )
    })
    return(
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        {allPlaces}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacesList;