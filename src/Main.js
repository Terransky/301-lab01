import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beastArr = [];
    data.forEach( (beast) => {
      beastArr.push(<HornedBeasts 
        title={beast.title} image_url={beast.image_url} description={beast.description} keyword={beast.keyword} horns={beast.horns} />);
    });
    
    return (
      <>
        <h2>This is the Main Component</h2>
        {beastArr}
      </>
    );
  }
}

export default Main;
