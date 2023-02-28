import React, { Component } from "react";
import MiniCard from "./MiniCard";

class Container extends Component {
  state = {
    
  };

 
  render() {
    return (
      <div className="container">
        <div className="hero">
          <h1>Emoji Search</h1>
          <p>A simple emoji search tool!!</p>
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.onchange}
          />
        </div>
        <div className="card-body">
          {this.props.data &&
            this.props.data.slice(1,200).map((emoji) => (
              <MiniCard data={emoji} />
            ))}
        </div>
        ;
      </div>
    );
  }
}

export default Container;
