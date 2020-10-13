import React from "react";
import Navbar from "./components/Navbar.js"
import BandList from "./components/Bandlist.js"
import Module from "./components/Module"

class App extends React.Component {
    state = {
        bands: [],
        activeBand: {},
        show:false
    }

     handleClose=()=>{
        this.setState({
            show:false
        })
    }
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
            .then(response => response.json())
            .then(data => this.setState({ bands: data }));
    };

    changeBand = (band) => {
        console.log(band);
        this.setState({
            activeBand: band,
            show:true
        })
    }
    render() {
        return (
            <>
                <Navbar />
                <BandList bands={this.state.bands} changeBand={this.changeBand} />
                <Module activeBand={this.state.activeBand} show={this.state.show} handleClose={this.handleClose}/>
            </>
        )
    }
}

export default App;