import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>This is the Main Component</h2>
        <HornedBeasts title="Horned Beast #1"
        imageUrl="https://via.placeholder.com/350x150" 
        description="description goes here" />
        <HornedBeasts title="Horned Beast #2"
        imageUrl="https://via.placeholder.com/350x150"
        description="description goes here" />
      </>
    );
  }
}

export default Main;