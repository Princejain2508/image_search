import React from "react";
import Unsplash from "../Api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { image: [] };

  onSearchSubmit = async (text) => {
    // console.log(text);
    const response = await Unsplash.get("/search/photos", {
      params: { query: text },
    });
    // console.log(response.data.results[0].urls.full);
    //console.log(this);
    this.setState({ image: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList image={this.state.image} />
      </div>
    );
  }
}

export default App;
