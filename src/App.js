import React, { Component } from "react";
import Container from "./Container";
import "./style.css"

const url = "https://emoji-api.com/emojis?access_key=0ca686060d6356a187f81da65df76fa2a903a752"
class App extends Component {
  state = {
    emojiData: [],
    
  };

  async componentDidMount() {
    await fetch(url)
      .then((res) => res.json())
      .then(({data}) => this.setState({emojiData: data}));
  }

 

  render() {
    return (
      <div>
        <Container data={this.state.emojiData}/>
      </div>
    );
  }
};

export default App;
