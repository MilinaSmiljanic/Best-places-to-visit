import React from "react";

const Place = ({place, changeActivePlace}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{place.name}</h3>
            </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                           <img src={place.img_url} alt="" width="250px"/>
                        </div>
                        <div className="col-6">
                            <p>
                               {place.info.substr(0,200)} ...
                            </p>
                             <div className="container d-md-flex justify-content-md-end">
                                 <button type="button" className="btn btn-outline-info" 
                                   data-bs-toggle="modal" 
                                   onClick = {()=>{changeActivePlace(place)}}
                                   data-bs-target="#exampleModal">Read more</button>
                             </div>
                        </div>
                    </div>
                </div>
        
            </div>
    )
}

export default Place;