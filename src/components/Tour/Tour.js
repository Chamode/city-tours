import React, { Component } from "react";
import "./Tour.scss";
export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div classname="img-container">
          <img
            width="200"
            src="https://images.pexels.com/photos/4270292/pexels-photo-4270292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
          />
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>City</h3>
        </div>
      </article>
    );
  }
}
