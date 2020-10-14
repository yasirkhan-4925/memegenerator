import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Header = () => { 
    
   return(

         <>
            
            <Container className="headerContainer" fluid>
               
               <Row>

                 <Col lg={4} md={4} sm={4} >
                    <img className="headerImage" src="https://freepngimg.com/thumb/internet_meme/4-2-yao-ming-meme-png-thumb.png" alt="meme image"/>
                 </Col>

                 <Col lg={6}  md={6} sm={6}>

                        <h1 className="headerHeading text-center">Meme Generator App</h1>

                 </Col>

               </Row>
               
            </Container >

         </>


   )


}



export default Header