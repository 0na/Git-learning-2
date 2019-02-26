'use strict'

var celcToFahrOutput = document.getElementById("getCelc-output"); //lewy output
var fahrToCelcOutput = document.getElementById("getFahr-output"); //prawy output
var celcToFahrButton = document.getElementById("getCelc-button"); //lewy przycisk
var tempC;
var tempF;
var tempCmessage = tempC + " °C is a " + tempF + "℉";

celcToFahrOutput.innerHTML = 'Click the button if you like to check convert ℃ to ℉' + '<br><br>' + celcToFahrOutput.innerHTML; //informacja pod lewym guzikiem
fahrToCelcOutput.innerHTML = 'Click the button if you like to check convert ℃ to ℉' + '<br><br>' + fahrToCelcOutput.innerHTML; //informacja pod prawym guzikiem


/// WYPISANIE FUNKCJI 
function convertCelcToFahr(tempC) {
    var tempF = tempC * 1.8 + 32;
    return tempF;
} //Funkcja, która przyjmuje temperaturę C //i zwraca temperaturę F.

function convertFahrToCelc(tempF) {
    var tempC = (tempF - 32) / 1.8;
    return tempC;
} //Funkcja, która przyjmuje temperaturę F //i zwraca temperaturę C.

function messageCelc(temp) {
    celcToFahrOutput.innerHTML = "it is" + temp + "degrees. " + "<br>";
}
//Funkcję, która wyświetla tekst na //stronie, odpowiednio dodając nową linię

function tempCInfo(tempC) {
    if (tempC < 0) {
        celcToFahrOutput.innerHTML = "When water is " + tempC + "then water is ICE" + "<br>";
    } else if (tempC >= 0 && tempC < 99) {
        celcToFahrOutput.innerHTML = "When water is " + tempC + "then water is WATER :)" + "<br>";
    } else if (tempC >= 100) {
        celcToFahrOutput.innerHTML = "When water is " + tempC + "then water is GAS" + "<br>";
    }
} //Funkcja, która przyjmuje temperaturę C //i zwraca informację np. o stanie //skupienia wody.


function showMessage(num) {
    window.prompt("What is th temperature ?");
}


celcToFahrButton.addEventListener('click', function () {
    tempC = window.prompt('What is the temperature in ℃?');
    if (tempC < 0) {
        celcToFahrOutput.innerHTML = "ICE" + "<br>";
    } else if (tempC >= 0 && tempC < 99) {
        celcToFahrOutput.innerHTML = "WATER" + "<br>";
    } else if (tempC >= 100) {
        celcToFahrOutput.innerHTML = "GAS" + "<br>";
    }
    if (!isNaN(tempC)) {
        celcToFahrOutput.innerHTML += tempC + ' ℃ it is ' + ((tempC * 1.8 + 32).toFixed(2)) + '℉ ' + '<br><br>';
    } else {
        celcToFahrOutput.innerHTML += '<b>Invalid value - Please provide a number </b>' + '<br><br>';
    }
    if (!tempC || tempC === null) { //jak zrobic - 1. jezeli puste pole to wyswietl alert 
        celcToFahrOutput.innerHTML += "No record found- Please provide a temperature";
    }

});


var fahrToCelcButton = document.getElementById("getFahr-button"); //prawy przycisk


fahrToCelcButton.addEventListener('click', function () {
    tempF = window.prompt('What is the temperature in ℉?');
    if (tempF < 32) {
        fahrToCelcOutput.innerHTML = "Water freezes at 32 degree Fahrenheit" + "<br>";
    } else if (tempF >= 32 && tempC < 212) {
        fahrToCelcOutput.innerHTML = "The Fahrenheit scale is mostly used in the United States, Cayman Islands, Bahamas, Belize and Palau. Other parts of the world prefer the Celsius scale" + "<br>";
    } else if (tempC >= 212) {
        fahrToCelcOutput.innerHTML = "Water boils at 212 degree Fahrenheit" + "<br>";
    }
    if (!isNaN(tempC)) {
        fahrToCelcOutput.innerHTML += tempF + ' ℉ it is ' + ((tempF - 32) * 5 / 9).toFixed(2) + '℃' + '<br><br>';
    } else {
        fahrToCelcOutput.innerHTML += '<b>Invalid value - Please provide a number</b> ' + '<br><br>';
    }
    if (!tempF || tempF === null) { //jak zrobic - 1. jezeli puste pole to wyswietl alert 
        celcToFahrOutput.innerHTML += "No record found- Please provide a temperature";
    }
});