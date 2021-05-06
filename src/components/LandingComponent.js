import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Navbar from 'react-bootstrap/Navbar'
import {Button,Form} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

 
export default function LandingComponent () {
 
    return(
       <div>
            <Navbar bg='dark' variant="dark">
                <Navbar.Brand href="#home">Trip Management System</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    <Nav>
                        <Nav.Link href="#Welcome"><Link to={`/admin/bookings/get/all`}>View All Booking</Link></Nav.Link>
                        <Nav.Link eventKey={2} >
                            <Link to={`/admin/bookings`}>Make Booking</Link>
                     </Nav.Link>
                    </Nav>


                    


                </Navbar.Collapse>
            </Navbar>
            
      

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Booking Page"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To The Booking Page</h3>
                        <p>"Jobs fill your pockets, adventures fill your Soul"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="d-flex flex-column foo ">
                <footer className="footer">
                    <div>

                        <span>&copy; Trip Management system by Capgemini 2020 </span>
                    </div>
                    <div className="ml-auto">
                        <a href="https://github.com/Abhinav-beepp/Online-Trip-Management-System " target="_blank" ><span>GITHUB</span>
                        </a>
                    </div>

                </footer>
            </div>
       

 
   </div>
    );
}