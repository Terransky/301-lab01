
// Main.js
import React from 'react';
import Card from 'react-bootstrap';
import render from 'react-dom';
import BeastsArray from './Beast.json';

class Main extends React.Component {
  render() {
    let newArr = [];
    BeastsArray.forEach( (beast) => {
      newArr.push(<HornedBeast title={beast.title} />);
    });
    return (
      <>
        {newArr}
        </>
    );
  }
}

export default Main;

    


// code review  })
//   render() {
//     return (
//       BeastArray.map(beast => {
//         return (
//           <HornedBeast title={beast.title} />
//         );
//       })
//       render() {
//         return (
//           <>
//           {this.newArray}
//           </>
//         );
//       }
//     )
//   }
// }

// export default Main;

// HornedBeast.js
import Card from 'react-bootstrap/Card'
class HornedBeast extends React.Component {
  // necessary for setting state
  constructor(props) {
    super(props);
    this.state = {
      favs: 0,
    };
  }
}
onFav = () => {
  this.setState({ favs: this.state.favs + 1});
}

onDislike = () => {
  this.setstate({ favs: this.state.favs - 1});
}

render() {
  return (
    <div className="m-1" id="container">
      <Card style
  )
}