import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import Display from "../Display";
import "./Imager.css"

export class Imager extends Component {

    state = {
        imagePaths: [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg",
            "images/image5.jpg",
            "images/image6.jpg",
            "images/image7.jpg",
            "images/image8.jpg",
            "images/image9.jpg",
            "images/image10.jpg",
            "images/image11.jpg",
            "images/image12.jpg"

        ]
    }

    render() {
        return (
            <div className="body">
                
                {/* imager header */}
                
                <h1>Imager</h1>
                

                {/* display div */}
                <div className="display-div">
                    <Display imagePath={this.state.imagePaths[0]}/>
                </div>


                {/* buttons div */}
                <div className="buttons-div">
                    <button>Random</button>
                    <div>
                        <button> {'<'} </button>
                        <button> {'>'} </button>
                    </div>
                </div>

                {/* image thumbnails div */}
                <div className="thumbnails-div">
                    <Thumbnail imagePath={this.state.imagePaths[0]}/>
                    <Thumbnail imagePath={this.state.imagePaths[1]}/>
                    <Thumbnail imagePath={this.state.imagePaths[2]}/>
                    <Thumbnail imagePath={this.state.imagePaths[3]}/>
                    <Thumbnail imagePath={this.state.imagePaths[4]}/>
                    <Thumbnail imagePath={this.state.imagePaths[5]}/>
                    <Thumbnail imagePath={this.state.imagePaths[6]}/>
                    <Thumbnail imagePath={this.state.imagePaths[7]}/>
                    <Thumbnail imagePath={this.state.imagePaths[8]}/>
                    <Thumbnail imagePath={this.state.imagePaths[9]}/>
                    <Thumbnail imagePath={this.state.imagePaths[10]}/>
                    <Thumbnail imagePath={this.state.imagePaths[11]}/>
                </div>
                
            </div>
        );
    }
}

export default Imager;