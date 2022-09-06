import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';
import { set } from "lodash";

function App() {
    const [SearchText, setSearchText] = useState("");
    const [ cityData, setCityData] = useState({});
    //const [ champData, setChampData] = useState({});
    
    const API_KEY = "b7cec5893b9b99853de404f26dad317f";
    
    function searchForPlayer(event) {
        
        // handle the API call
        
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + SearchText + '&APPID=' + API_KEY, {mode: 'cors'})
    .then(function(response) {
      setCityData(response.data);
      console.log(response)
    }).catch(function(error) {
      
      console.log(error)
    });
    }

    
    return (
        <div className="App">
            <div className="container">
                <h1>Weather search</h1>
                <input
                    type="text"
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button onClick={(e) => searchForPlayer(e)}>
                    Search for City
                </button>
                
            </div>
            {cityData.name != '{}' ? 
            <>
              <p>Summoner name: {cityData.name}</p>
              <p>Summoner level: {cityData.main.temp}</p>
              
              
            </>  
            : <><p>no player data</p></>
        }
        </div>
    );
}

export default App;
