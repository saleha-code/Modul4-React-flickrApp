import React, { Component } from "react";

class SearchResults extends Component {
  render() {
    console.log("image src: ", this.props.imageSrc);
    return (
      <div className="searchresults">
        {this.props.imageSrc.map((src, index) => {
          return <img key={index} src={src} alt="my test"></img>;
        })}
      </div>
    );
  }
}

export default SearchResults;
