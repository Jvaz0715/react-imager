import React, { Component } from "react";


export class Thumbnail extends Component {

    render() {
        return (
            
            <img src={this.props.imagePath} alt="img" style={{ 
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}/>
           
        )
    }

}

export default Thumbnail;