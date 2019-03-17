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
      text: "Welcome to the ISS Position Application",
      error: "",
      isloaded: false,
      preparedResponse: {},//dane z API
      time: "" //aktualna godzina
    }
  }

  loadData = () => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then(response => {
        const preparedResponse = JSON.parse(response); //sparsowane dane
        this.setState({ //zmiana stanu
          data: preparedResponse, //tu powinny wchodzic dane z api
          isloaded: true, //powinno sie ladowac
        })
      }
      )
  };

  getDate = () => { //aktualna godzina
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
    this.loadData.bind(this);
    setInterval(this.getDate.bind(this), 1000);
  }


  render() {
    const { preparedResponse, time, text } = this.state.preparedResponse

    return (
      <div className="app">
        <div className="container">
          <div className="checktime">Time check : { new Date().toLocaleTimeString() }</div>
          <div className="welcome">{ this.state.text } </div>
          <div className="startData">The time when you join my application was: { this.state.preparedResponse.timestamp }
            <div> ISS was in position: </div>
            <div> Longitude: { this.state.preparedResponse.longitude } </div>
            <div> Latitude: { this.state.preparedResponse.latitude } </div>
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

console.log(timeConverter(624534233));


// function calculateDistance(lat1, lon1, lat2, lon2) {
//   var R = 6371; // km
//   var dLat = (lat2 - lat1).toRad();
//   var dLon = (lon2 - lon1).toRad();
//   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   var d = R * c;
//   return d;
// }

// console.log(calculateDistance("costam"))