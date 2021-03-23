import React, { Component } from "react";
import ItemFormComponent from "./Components/ItemFormComponent";
import "./App.css";
const axios = require("axios");

const uri = "http://localhost:4000/item";

class App extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    this.getItems();
  }
  getItems = () => {
    console.log("get items called");
    axios
      .get(uri)
      .then((response) => {
        this.setState({ items: response.data.items });
      })
      .catch((err) => console.log(err));
  };
  deleteItem = (itemId) => {
    console.log(`${uri}/${itemId}`);
    axios
      .delete(`${uri}/${itemId}`)
      .then((response) => this.getItems())
      .catch((err) => console.log(err));
  };
  render() {
    const items = this.state.items.map((item, index) => (
      <li className="list-group-item" key={item.itemId}>
        <h4>{item.title}</h4>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.deleteItem(item.itemId)}
        >
          Delete
        </button>
      </li>
    ));

    if (items.length == 0) {
      return (
        <div className="container">
          <ItemFormComponent />
          <h3>No Items </h3>
        </div>
      );
    } else {
      return (
        <div className="container">
          <ItemFormComponent getItems={this.getItems} />
          <h2>Hello</h2>
          <ul className="list-group">{items}</ul>
        </div>
      );
    }
  }
}

export default App;
