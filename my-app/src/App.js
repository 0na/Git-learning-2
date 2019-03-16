import React, { Component } from 'react';
import './App.css';

//http://api.open-notify.org/iss-now.json
//http://open-notify.org/Open-Notify-API/ISS-Location-Now/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Welcome to the ISS Position Application",
      error: "",
      isloaded: false,
      preparedResponse: []//dane z API
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

  componentDidMount() {
    this.loadData.bind(this);
  }


  render() {

    return (
      <div>
        <div>{ this.state.text }</div>
        <div> Start time: { this.state.preparedResponse.timestamp } </div>
        <div> Position ISS: </div>
        <div> Longitude: { this.state.preparedResponse.longitude } </div>
        <div> Latitude: { this.state.preparedResponse.latitude } </div>
      </div >
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
