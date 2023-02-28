import React, { Component } from 'react'


class MiniCard extends Component {
    state = {  } 
    handleCopy = (e) =>{
        const copied = navigator.clipboard.writeText(e.target.value)
        console.log(copied);
    }
    render() { 
        return (
            <div className="card" onClick={(e) => console.log(e.target.value)}>
                <p >{this.props.data.character}</p>
            </div>
        );
    }
}
 
export default MiniCard;