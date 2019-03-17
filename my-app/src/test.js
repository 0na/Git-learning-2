// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "Welcome to the ISS Position Application", //test this.state.text
//             error: "",
//             isloaded: false,
//             preparedResponse: {},//dane z API
//             time: "" //aktualna godzina
//         }
//     }


//     componentDidMount() {
//         const url = 'http://api.open-notify.org/iss-now.json';
//         fetch(url)
//             .then((d) => {
//                 this.setState({
//                     preparedResponse: [
//                         { latitude: d.iss_position.latitude } + ', ' +
//                         { longitude: d.iss_position.longitude }
//                     ]
//                 });
//             });
//         setInterval(this.getDate.bind(this), 1000);
//     }

//     render() {
//         const { preparedResponse } = this.state
//         return (
//             <div>{ preparedResponse }</div>
//         );
//     }
//}


let url = 'http://api.open-notify.org/iss-now.json';

class Basemap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: [31, 13]
        };
    }
    componentDidMount() {
        this.getCenter();
        this.interval = setInterval(this.getCenter, 2000);
    }
    getCenter() {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(d => d.json())
            .then(d => {
                this.setState({
                    center: [d.iss_position.latitude, + ', ' +
                        d.iss_position.longitude]
                });
            });
    }
    render() {
        return (
            // <Map style={ { width: '100vw', height: '100vh' } }
            //     mapProperties={ { basemap: 'satellite' } }
            //     viewProperties={ this.state } />
        );
    }
}
export default Basemap;