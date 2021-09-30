import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    showModal: true
  }
}


render() {
  return (
    toggleModal = () => {
      (this.state.showModal) ? this.setState({showModal: false}) : this.setState({showModal: true});



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

    }
  );
}
}

export default SelectedBeast;