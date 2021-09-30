import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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

    //something like let filteredArr = beastArr.filter(beast => beast.horns === this.state.hornFilter); and display filteredArr to 
    
    return (
      <>
      <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
              Preference
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Row>
      </Form>

        <h2>This is the Main Component</h2>
        <CardGroup>
          {beastArr}
        </CardGroup>
      </>
    );
  }
}

export default Main;
