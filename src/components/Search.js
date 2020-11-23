import React, { Component } from "react";
import axios from "axios";

export class Search extends Component {
  state = {
    searchText: "",
    searchResultPictures: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchText);

    const searchURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b54580f369a7eeebecb2004dc429d08f&format=json&nojsoncallback=1&text=${this.state.searchText}`;

    axios
      .get(searchURL)
      .then((res) => {
        console.log(res.data);

        //I need to map through response to get the pictures url
        const newPictures = res.data.photos.photo.map((picData) => {
          return `https://live.staticflickr.com/${picData.server}/${picData.id}_${picData.secret}.jpg`;
        });
        this.props.setSearchResultPictures(newPictures);

        console.log("display somehting plz");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onSubmit(e);
    }
  };

  render() {
    return (
      <div className="controls">
        <div className="searchfield">
          <input
            type="text"
            name="searchText"
            placeholder="Search myFlickrApp for photos..."
            className="searchfield__input"
            value={this.state.searchText}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
          <button
            className="searchfield__submit-button"
            onClick={this.onSubmit}
          >
            Search
          </button>
        </div>

        <button className="gallery-button">Show Gallery</button>
      </div>
    );
  }
}

export default Search;
