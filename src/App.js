import React, { Component } from "react";
import Container from "./Container";
import "./style.css";

class App extends Component {
  state = {
    emojis: []
  };

  componentDidMount() {
    fetch(
      "https://emoji-api.com/emojis?access_key=0ca686060d6356a187f81da65df76fa2a903a752"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({ emojis: result });
      });
  }

  render() {
    return (
      <div>
        <Container data={this.state.emojis} />
      </div>
    );
  }
}

export default App;
