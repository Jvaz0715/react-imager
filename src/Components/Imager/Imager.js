import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import Display from "../Display";
import "./Imager.css"

export class Imager extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ],
            displayImage: "images/image1.jpg",
        }
    }

    handleRandomImage =() => {
        
        let randomImageNumber = Math.floor(Math.random() * this.state.imagePaths.length);
        this.setState({
            displayImage: this.state.imagePaths[randomImageNumber]
        })
    };

    handlePreviousImage = () => {
        let currentImgIndex = this.state.imagePaths.indexOf(this.state.displayImage)
        
        if(currentImgIndex === 0) {
            this.setState({
                displayImage: this.state.imagePaths[this.state.imagePaths.length -1]
            })
        } else {
            this.setState({
                displayImage: this.state.imagePaths[currentImgIndex - 1]
            })
        }
    }

    handleNextImage = () => {
        let currentImgIndex = this.state.imagePaths.indexOf(this.state.displayImage)
        
        if(currentImgIndex === this.state.imagePaths.length -1) {
            this.setState({
                displayImage: this.state.imagePaths[0]
            })
        } else {
            this.setState({
                displayImage: this.state.imagePaths[currentImgIndex + 1]
            })
        }
    }

    render() {
        return (
            <div className="body">
                
                {/* imager header */}
                
                <h1>Imager</h1>
                

                {/* display div */}
                <div className="display-div">
                    <Display imagePath={this.state.displayImage}/>
                </div>


                {/* buttons div */}
                <div className="buttons-div">
                    <button onClick={this.handleRandomImage}>Random</button>
                    <div>
                        <button onClick={this.handlePreviousImage}> {'<'} </button>
                        <button onClick={this.handleNextImage}> {'>'} </button>
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