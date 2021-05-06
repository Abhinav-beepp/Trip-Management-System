import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as bookingActions from '../store/actions/BookingActions';
import { Table} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'






 

class BookingListComponent extends React.Component {
 
    constructor() {
        super();
       
    }
    
    render() {
       
        return (
           
            
            <div>
                    

                <Navbar bg='dark' variant="dark">
                    <Navbar.Brand href="#home" className="justify-content-center">Booking List</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >

                
                    </Navbar.Collapse>
                </Navbar>
                   
                   
                        <Table className="my-5 " striped bordered hover variant="dark">

                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Booking Date</th>
                                    <th>Booking Title</th>
                                    <th>Booking Type</th>
                                    <th>Description</th>
                                    <th>Package ID</th>
                                    <th>User ID</th>
                                    <th>View Details</th>
                                    <th>Delete Entry</th>

                                </tr>
                            </thead>
                            <tbody>{

                                this.props.bookings !== undefined ?
                                    this.props.bookings.map((partBooking, index) => {
                                        
                                        const {
                                            bookingId, description, bookingType, bookingTitle, bookingDate, user, pack

                                        } = partBooking
                                       
                                        return (
                                            <tr>
                                                <td>{bookingId}</td>
                                                <td> {bookingDate}</td>
                                                <td> {bookingTitle}</td>
                                                <td>{bookingType}</td>
                                                <td> {description} </td>
                                                <td> {pack ? pack.packageId : "none"}</td>
                                                <td> {user ? user.userId : "none"}</td>
                                                



                                                <td><Button variant="outline-info"> <Link to={`/view-booking/${bookingId}`}>View</Link></Button></td>
                                                <td><Button variant="outline-info"><Link to={`/delete-booking/${bookingId}`}>Delete</Link></Button></td>


                                            </tr>)
                                    })

                                    :
                                    <h3>Loading....</h3>}
                            </tbody>
                        </Table>


                <div style={{ position: "fixed" }} className="d-flex flex-column foo ">
                    <footer className="footer">
                        <div>

                            <span>&copy; Trip Management System by Capgemini 2020 </span>
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
}
function mapStateToProps(state) {
 
    return { bookings: state.bookingReducer.bookings }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      bookingActions : bindActionCreators(bookingActions,dispatch),
      
   }   
  };
 
export default connect(mapStateToProps,mapDispatchToProps) (BookingListComponent);