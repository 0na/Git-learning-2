import React, {
    Component
} from 'react';
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
            preparedResponse: [] //dane z API
        }
    }

    // loadData = () => {
    //   fetch("API")
    //     .then(response => {
    //       const preparedResponse = JSON.parse(response); //sparsowane dane
    //       this.setState({ //zmiana stanu
    //         data: preparedResponse, //tu powinny wchodzic dane z api
    //         isloaded: true, //powinno sie ladowac
    //       })
    //     }
    //     )
    // };
    // componentDidMount() {
    //   this.loadData.bind(this);
    // }


    componentDidMount() {
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => this.setState({
                data
            }));
    }





    render() {

        return (<
            div className="app" >
            <
            div className="container" >
                <
            div className="welcome" > {
                        this.state.text
                    } < /div> <
            div className="startData" > The time when you join my application was: {
                            this.state.preparedResponse.timestamp
                        } <
            div > ISS was in position: < /div> <
            div > Longitude: {
                                    this.state.preparedResponse.longitude
                                } < /div> <
            div > Latitude: {
                                        this.state.preparedResponse.latitude
                                    } < /div> <
            /div> <
            div className="calculated" >
                                        <
            div className="speed" > ISS is moving with speed: < /div> <
            div className="distance" > Defeated distance from time when you join: < /div> <
            /div> <
            div className="currentData" >
                                                    <
            div > The time now is: < /div> <
            div > ISS position is: < /div> <
            div > Longitude: < /div> <
            div > Latitude: < /div> <
            /div> <
            /div > <
            /div>
                                                                );
                                                            }
                                                        }
                                                        export default App;
                                                        
function timeConverter(timestamp) { //formula dziala !!!
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