import React from 'react';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fav: 0, setFav: false, 
    };
  }

  clickImg = () => {
    this.setState({fav: this.state.fav + 1});
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.clickImg} />
        <p>{this.props.description}</p>
        <p>Likes: {this.state.fav} ♥</p>
      </div>
    );
  }
}

export default HornedBeasts;
