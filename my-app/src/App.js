import React, { Component } from 'react';
import './App.css';

//var API = ("http://api.open-notify.org/iss-now.json")

// Wykorzystaj dane udostępniane przez API
// http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// • Przedstaw użytkownikowi następujące dane:
// prędkość ISS na podstawie dwóch odczytów,
// droga przebyta przez ISS od początku zapisanych odczytów.
// Program musi dać się łatwo skompilować i uruchomić na standardowym
// środowisku.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Welcome to the ISS Position Application", //test this.state.text
      error: "",
      isloaded: false,
      preparedResponse: [],//dane z API
      time: "", //aktualna godzina
      center: [],
    }
  }

  // getCenter = () => {
  //   fetch('http://api.open-notify.org/iss-now.json')
  //     .then(d => d.json())
  //     .then(d => {
  //       this.setState({
  //         preparedResponse: [d.iss_position.latitude, + ', ' +
  //           d.iss_position.longitude]
  //       });
  //     });
  // }

  loadData = () => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then(response => {
        const preparedResponse = JSON.parse(response); //sparsowane dane
        this.setState({ //zmiana stanu
          preparedResponse: preparedResponse, //tu powinny wchodzic dane z api
          isloaded: true, //powinno sie ladowac
        })
      }, 1000)
  };

  getDate = () => { //double check if time from .json is good. 
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }

  issDistanse = () => { //iss distance from app started - use (cords) lat and land
  }

  readTime = () => { //convert unix_time to 'normal' format
    return timeConverter();
  }

  issSpeed = () => { //spedd iss. use distance() and convert time formula
  }


  componentDidMount() {
    this.loadData = this.loadData.bind(this);
    setInterval(this.getDate.bind(this), 1000);
    // this.getCenter = this.getCenter.bind(this);
    // this.interval = setInterval(this.getCenter, 1000);

  }


  render() {
    const { preparedResponse, error, isloaded, text, center } = this.state;

    return (
      <div className="app">
        <div className="container">
          <div className="checktime">Time check : { new Date().toLocaleTimeString() }</div>
          <div className="welcome">{ text } </div>
          <div className="startData">The time when you join my application was: { preparedResponse.timestamp }
            <div> ISS was in position: </div>
            <div> Longitude: { preparedResponse.longitude } </div>
            <div> Latitude: { preparedResponse.latitude } </div>
          </div>
          <div className="calculated">
            <div className="speed">ISS is moving with speed: </div>
            <div className="distance">Defeated distance from time when you join:  </div>
          </div>
          <div className="currentData">
            <div>The time now is : </div>
            <div>ISS position is : </div>
            <div>Longitude: </div>
            <div>Latitude: </div>
          </div>
        </div >
      </div>
    );
  }
}
export default App;

function timeConverter(timestamp) {  //formula dziala !!!
  var a = new Date(timestamp * 1000);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}
//console.log(time);
console.log(timeConverter(624534233));