import React, { Component } from "react";
import Proptypes from "prop-types";

export class ShowGallery extends Component {
  state = {
    title: "",
  };
  onSubmit = (e) => {
    e.preventDefault();

    console.log("in showgallery");
  };

  render() {
    return (
      <div className="gallery-button__wrapper">
        <button className="gallery-button" onClick={this.onSubmit}>
          Show Gallery
        </button>
      </div>
    );
  }
}

// PropTypes.
ShowGallery.propTypes = {
  ShowGallery: Proptypes.func.isRequired,
};

export default ShowGallery;
