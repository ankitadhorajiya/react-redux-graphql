import React from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types"
import App from "./App";
import {addStore} from '../actions/app_actions'
import {Form, Button, Col} from 'react-bootstrap'

class AddStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.setInitialState();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeOwnerName = this.changeOwnerName.bind(this);
  }

  setInitialState() {
    return {
      owner_name: '',
      store_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: ''
    }
  }

  changeOwnerName(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      store: {
        owner_name: this.state.owner_name,
        store_name: this.state.store_name,
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        pincode: this.state.pincode
      }
    };
    this.props.addStore(data)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              type={'text'}
              placeholder="Store Owner name"
              name={'owner_name'}
              onChange={this.changeOwnerName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              name={'store_name'}
              onChange={this.changeOwnerName}
              placeholder="Store name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address 1</Form.Label>
          <Form.Control
            name={'address1'}
            onChange={this.changeOwnerName}
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            name={'address2'}
            onChange={this.changeOwnerName}
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              name={'city'}
              onChange={this.changeOwnerName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              name={'state'}
              onChange={this.changeOwnerName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name={'pincode'}
              onChange={this.changeOwnerName}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addStore: (data) => dispatch(addStore(data))
  };
}


export default connect(null, mapDispatchToProps)(AddStore);