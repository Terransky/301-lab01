import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>This is the Main Component</h2>
        data.forEach( (value) ) => {
        <HornedBeasts title={value.title} imageUrl={value.image_url} description={value.description} keyword={value.keyword} horns={value.horns} />
        });
      </>
    );
  }
}

export default Main;
