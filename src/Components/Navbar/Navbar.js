import React, {Component} from "react";
import "./Navbar.scss"
export default class Navbar extends Component{

    render(){
        return (
          <div className="body1">
            <h1 className="trevland">Trevland</h1>
            <ul>
              <li>Home</li>
              <li>Location</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <button className="btn_t">Booking now</button>

            </div>
        );
    }
} 