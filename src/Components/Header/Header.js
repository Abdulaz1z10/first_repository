import React, { Component } from "react";
import "./Header.scss"

export default class Header extends Component {
  render() {
    return (
      <div className="body2">
        <h1 className="trevland2">Railtrips To Here, There And Everywhere!</h1>
        <p className="mini_trevland">
          We all wish to start our year the best way possible and also according
          to a common belief if you have a great start to your.
        </p>
        <button className="btn_t2">Explore more</button>
      </div>
    );
  }
}
