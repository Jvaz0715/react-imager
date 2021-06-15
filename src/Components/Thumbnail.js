import React, { Component } from "react";


export class Thumbnail extends Component {
   
    handleThumbNailClick = () => {
        console.log("thumbnail was clicked");
        console.log(this.props.imagePath)
        
        return {
            displayImage: this.props.imagePath
        }
    }
 
    render() {
        return (
            
              <img src={this.props.imagePath} alt="img"  onClick={this.handleThumbNailClick} style={{ 
                width: "170px",
                height: "150px",
                objectFit: "cover",
                border: "2px solid white"
            }}/>  
            
           
        )
    }

}

export default Thumbnail;