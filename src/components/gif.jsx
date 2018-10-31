import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.displayGif(event.target.id);
  }

  render() {
    const url = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={url} alt="" id={this.props.id} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
