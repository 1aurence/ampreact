import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const uri = "http://localhost:4000/item";

class ItemForm extends Component {
  state = {
    title: "",
  };
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  submitItem = (e) => {
    axios
      .post(uri, { title: this.state.title })
      .then((res) => {
        console.log(res);
        this.props.getItems();
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Item Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Item"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={this.submitItem}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default ItemForm;
