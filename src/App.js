import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import Header from "./components/layout/Header";
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    searchResultPictures: [],
  };

  setSearchResultPictures = (picsArray) => {
    this.setState({ searchResultPictures: picsArray });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Search setSearchResultPictures={this.setSearchResultPictures} />
          <SearchResults imageSrc={this.state.searchResultPictures} />
        </div>
      </div>
    );
  }
}

export default App;
