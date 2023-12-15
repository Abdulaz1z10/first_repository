import React, { Component } from "react";
import "./Header3.scss"

export default class Header3 extends Component{
render(){
    return (
      <div className="body4">
        <h1 className="special">Special Offers</h1>
        <p className="new_year">
          With the New Year comes a refreshing sense of wanderlust, a longing in
          our souls to escape to warmer climates,{" "}
        </p>

        <div className="five_body">
          <div className="mini_body1">
            <div className="color2"></div>
            <h2 className="statue">Statue of Liberty.</h2>
            <p className="stars">📍New york ⭐️4.8</p>
            <p className="days">4 Day 5 Nights</p>
            <p className="pount">$450/person</p>
          </div>
          <div className="mini_body1">
            <div className="color2"></div>
            <h2 className="statue">The Great Wall </h2>
            <p className="stars">📍China ⭐️4.9</p>
            <p className="days">7 Day 8 Nights</p>
            <p className="pount">$850/person</p>
          </div>
          <div className="mini_body1">
            <div className="color2"></div>
            <h2 className="statue">Dizin</h2>
            <p className="stars">📍Iran ⭐️4.6</p>
            <p className="days">5 Day 6 Nights</p>
            <p className="pount">$550/person</p>
          </div>
          <div className="mini_body1">
            <div className="color2"></div>
            <h2 className="statue">Sajek Valley</h2>
            <p className="stars">📍Bangladesh ⭐️4.7</p>
            <p className="days">3 Day 4 Nights</p>
            <p className="pount">$400/person</p>
          </div>
          <div className="mini_body1">
            <div className="color2"></div>
            <h2 className="statue">Osaka Castle</h2>
            <p className="stars">📍Japan ⭐️4.7</p>
            <p className="days">4 Day 5 Nights</p>
            <p className="pount">$700/person</p>
          </div>
        </div>
      </div>
    );
}
}