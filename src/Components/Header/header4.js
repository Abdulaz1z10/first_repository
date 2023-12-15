import React, { Component } from "react";
import "./header4.scss"

export default class header4 extends Component{
    render(){
        return (
          <div className="body5">
            <h1 className="blog">Form Blog & News</h1>
            <p className="welcome">
              Welcome to Community Conversations, a new interview series
              featuring Intrepid travellers, creatives and activists in our
              community.
            </p>
            <div className="four_body">
              <div className="big_div">
                <div className="colo3"></div>
                <p className="banf">Banff National Park</p>
                <p className="mini_banf">
                  Banff National Park lies in the heart of the majestic Rocky
                  Mountains in the province of Alberta, and showcases some of
                  Canada's most beautiful scenery. Turquoise-colored lakes,
                  snow-capped peaks, and glaciers are all easily accessible
                </p>
                <p className="adison">@thomasalva_adison</p>
              </div>
              <div className="mini_four_body">
                <div className="hiroshima">
                  <div className="color4"></div>
                  <div className="texts">
                    <p className="hiroshima_text">The Hiroshima Peace!</p>
                    <p className="hiroshima_mini">
                      It was formally opened to the public in August that year.
                    </p>
                    <p className="shova">@shova_bd88</p>
                  </div>
                </div>
                <div className="hiroshima">
                  <div className="color4"></div>
                  <div className="texts">
                    <p className="hiroshima_text">The faithful prayers!</p>
                    <p className="hiroshima_mini">
                      A major pilgrimage center for Hindus, the holy city.
                    </p>
                    <p className="shova">@adem/smith</p>
                  </div>
                </div>
                <div className="hiroshima">
                  <div className="color4"></div>
                  <div className="texts">
                    <p className="hiroshima_text">Colourful waters!</p>
                    <p className="hiroshima_mini">
                      Forest-driven water and energy cycles are poorly.
                    </p>
                    <p className="shova">@jhon7leew</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}