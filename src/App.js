import React, { Component } from "react";
import Nav from "./Nav/Nav";
import "bootstrap/dist/css/bootstrap.css";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("start here api");
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
