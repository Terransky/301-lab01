import React from 'react';
import Card from 'react-bootstrap/Card';


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
        
              <Card bg={'dark'} text={'white'} style={{ width: '24rem' }}>
                <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.clickImg}/>
                <Card.Body>
                  <Card.Title><h2>{this.props.title}</h2></Card.Title>
                  <Card.Text>
                    <p>{this.props.description}</p>
                    <p>Likes: {this.state.fav} ♥</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            
      </div>
    );
  }
}

export default HornedBeasts;
