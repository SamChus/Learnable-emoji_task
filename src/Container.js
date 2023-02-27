import React, { Component } from 'react'
import MiniCard from './MiniCard'

class Container extends Component {
    state = { 
        value: ""
     } 

    handleChange = (e) =>{
        const value = e.target.value
        this.setState({value})
      }
    render() { 
        return (
            <div className="container">
                <div className='hero'>
                    <h1>Emoji Search</h1>
                    <p>A simple emoji search tool!!</p>
                <input 
                 type="text"
                 value={this.state.value}
                 onChange={(e) => this.handleChange(e)}    
                />
                </div>
                <div className='card-body'>
                    <MiniCard />
                </div>
            </div>
        );
    }
}
 
export default Container;