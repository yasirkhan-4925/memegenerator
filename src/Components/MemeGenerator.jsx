import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class MemeGenerator extends React.Component {
   
   constructor(){

     super()

     this.state={


      memeImage: "https://i.pinimg.com/originals/be/31/74/be3174c71b127bdc101f78474758891a.jpg",
      firstText:"",
      lastText:"",
      allImage:[]



      



     }

      
   }
   
   handleChange= (e) => {
       let {name,value} = e.target
       this.setState({
         [name] : value
       })
   } 
   
  generateMeme = () => { 
    const randNum= Math.floor(Math.random() * this.state.allImage.length)
    const RandmemeImage = this.state.allImage[randNum].url
    this.setState({
      memeImage: RandmemeImage
    })
  }

   componentDidMount(){
     fetch("https://api.imgflip.com/get_memes")
     .then(response => response.json())
     .then(response=> {
        let {memes} =response.data
        this.setState({
          allImage:memes
        })

     })
   }

  render() {
   
    return (
      <>
        <Container className="memeContainer">
          <Row className="border">
            <Col lg={8} md={8} sm={8}>
              <div className="memeDiv">
                <input
                  value={this.state.firstText}
                   name="firstText"
                  className="memeInput"
                  type="text"
                  placeholder="Meme First Text"
                  onChange={this.handleChange}
                />
                <input
                  value={this.state.lastText}
                  name="lastText"
                  className="memeInput"
                  type="text"
                  placeholder="Meme Second Text"
                  onChange={this.handleChange}
                  
                />
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} className="border">
              <button onClick={this.generateMeme} type="button" className="btn btn-danger">
                Generate
              </button>
            </Col>
          </Row>
        </Container>

        <Container className="memeImagerow">
                            
                <Row>

                  <img className="memeImage" src={this.state.memeImage} alt=""/>

    <h1 className="text-white text-center first-text"> {this.state.firstText}</h1>

    <h1 className="text-white text-center last-text">{this.state.lastText}</h1>

                     </Row>         
                         
            </Container>
      </>
    );
  }
}

export default MemeGenerator;
