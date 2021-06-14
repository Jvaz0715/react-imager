import React, { Component } from "react";


export class Thumbnail extends Component {

    render() {
        return (
            
            <img src={this.props.imagePath} alt="img" style={{width:"200px"}}/>
           
        )
    }

}

export default Thumbnail;