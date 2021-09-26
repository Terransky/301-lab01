import React from 'react';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fav: 0, };
  }



  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
