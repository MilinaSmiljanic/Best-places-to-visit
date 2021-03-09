import React from 'react';
import PlacesList from "./components/PlacesList"
import Modal from "./components/Modal"
import "./Heading.css"


class App extends React.Component{
    state = {
        places : [],
        activePlace : {}
    }

    changeActivePlace = (place) => {
        this.setState({
            activePlace: place
        })
    }
    componentDidMount(){
        fetch('https://raw.githubusercontent.com/MilinaSmiljanic/oooo/master/data.txt')
        .then(res=>{
           return res.json();
        })
        .then(data=>{
            console.log(data);
            this.setState({
                places : data
            })
        })
    }
    
    render (){
        return (
            <>
              <h3 className="heading"> World's best places to visit</h3>
              <PlacesList places={this.state.places} changeActivePlace={this.changeActivePlace}/>
              <Modal activePlace={this.state.activePlace}/>
            </>
        )
    }
}

export default App;
