import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let beastArr = [];
    this.props.data.forEach( (beast) => {
      beastArr.push(<HornedBeasts 
        title={beast.title} image_url={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} />);
    });
    
    return (
      <>
        <h2>This is the Main Component</h2>
        <CardGroup>
        {beastArr}
        </CardGroup>
      </>
    );
  }
}

export default Main;
