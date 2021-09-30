import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import Main from './Main.js';

import data from './data.json';

class App extends React.Component {


  render() {
    
    return (
      <>
      <h1>This is my app</h1>
      <Header />
      <Main data = {data}/>
      <Footer />
      
    </>
    );
  }
}

export default App;
