import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Instructions extends Component {
  pageNumber = () => {
    if (this.props.nextPath === "/dashboard") return "3 / 3";
    if (this.props.nextPath === "/instructions/2") return "1 / 3";
    if (this.props.nextPath === "/instructions/3") return "2 / 3";
  };

  render() {
    return (
      <div className="fixed">
        <Header title="Instructions" />
        <div className="grid-system">
          {this.props.nextPath === "/instructions/2" ? (
            <>
              <h2 id="instructionsWelcomeTo" className="bigAndPink">
                Welcome to
              </h2>
              <h2 className="bigAndPink">{this.props.header}</h2>
            </>
          ) : (
            <h2 className="bigAndPinkAndAwayFromHeader">{this.props.header}</h2>
          )}

          <h3 className="instructionsText">{this.props.title}</h3>

          <div className="instructionsImageContainer">
            <img
              className={this.props.imgClass}
              src={this.props.imgSrc}
              alt={this.props.imgAlt}
            ></img>
          </div>
          <div className="bottomLinkContainer">
            <Link className="bottomLeftLink" to={this.props.previousPath}>
              <i className="fas fa-chevron-left"></i>
            </Link>
            <p className="pagination"> {this.pageNumber()}</p>
            <Link className="bottomRightLink" to={this.props.nextPath}>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructions;
