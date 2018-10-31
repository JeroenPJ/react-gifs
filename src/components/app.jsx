import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }

  search = (query) => {
    const giph = giphy("d4lWebOFy9abS51HvcJ4JKTCfxJfuLL4");
    giph.search({
      q: query,
      rating: 'g'
    }, (err, res) => {
      console.log(this);
      this.setState({
        gifs: res.data.splice(0,10)
      })
    });
  }

  displayGif = (id) => {
    this.setState({
      selectedGifId: id
    })
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} displayGif={(id) => {}} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} displayGif={this.displayGif} />
        </div>
      </div>
    );
  }
}

export default App;
