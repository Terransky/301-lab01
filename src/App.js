import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    }
  }

  toggleModal = () => {
    (this.state.showModal) ? this.setState({showModal: false}) : this.setState({showModal: true});
  }

  render() {
    
    return (
      <>
      <h1>This is my app</h1>
      <Header />
      <Main />
      <Footer />
      <Modal show={this.state.showModal} onHide={this.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Let's just get this working at all for now.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
}

export default App;
