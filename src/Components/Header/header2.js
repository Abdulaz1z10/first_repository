import React, { Component } from "react";
import "./header2.scss"

export default class header2 extends Component {
render(){
    return (
      <div className="body3">
        <h1 className="popular">Popular Location</h1>
        <p className="for">
          For every one of us, travel came first. We’ve spent years living as
          nomads, pioneers, and voyagers— from island hopping in the
        </p>

        <div className="three_body">
          <div className="mini_body">
            <div className="color1"></div>
            <p className="state">Istanbul, Turkey</p>
            <p className="information">
              Istanbul is a major city in Turkey that straddles Europe.{" "}
            </p>
          </div>
          <div className="mini_body">
            <div className="color1"></div>
            <p className="state">Kuala Lumpur, malaysia</p>
            <p className="information">
              A 272-step long trek leads you to this century.{" "}
            </p>
          </div>
          <div className="mini_body">
            <div className="color1"></div>
            <p className="state">Seoul, South Korea</p>
            <p className="information">
              South Korea officially the Republic of Korea is a country in East
              Asia.{" "}
            </p>
          </div>
        </div>
      </div>
    );
}
}