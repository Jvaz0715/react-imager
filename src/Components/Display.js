import React, { Component } from "react";

export class Display extends Component {
    render() {
        return (
            <img src={this.props.imagePath} alt="display" style={{
                border: "3px solid black",
                width: "100%",
                height: "100%",
            }}/>
        )
    }
}

export default Display;