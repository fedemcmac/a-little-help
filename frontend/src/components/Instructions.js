import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Instructions extends Component {
  pageNumber = () => {
    if (this.props.nextPath === 1) console.log(3 / 4);
    if (this.props.nextPath === 2) console.log(1 / 4);
    if (this.props.nextPath === 3) console.log(2 / 4);
  };

  render() {
      this.pageNumber()
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
            {/* <p className="instructionsText">{this.props.subtitle}</p> */}

          <div className="instructionsImageContainer">
              <img className={this.props.imgClass} src={this.props.imgSrc} alt={this.props.imgAlt}></img>
            </div>
          <div className="bottomLinkContainer">
            <Link className="bottomLeftLink" to={this.props.previousPath}>
              <i className="fas fa-chevron-left"></i>
            </Link>
            <p className="pagination">
              {" "}
              ciao
              {this.pageNumber()}
            </p>
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
