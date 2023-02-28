import React, { Component } from "react";
import Container from "./Container";
import "./style.css";

class App extends Component {
  state = {
    emojis: [],
    value: "",
  };

  componentDidMount() {
    fetch(
      "https://emoji-api.com/emojis?access_key=0ca686060d6356a187f81da65df76fa2a903a752"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ emojis: result });
      });
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };

  

  render() {
    return (
      <div>
        <Container data={this.state.emojis} onchange={this.handleChange} value={this.state.value}/>
      </div>
    );
  }
}

export default App;
