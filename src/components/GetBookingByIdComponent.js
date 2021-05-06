import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookingActions from '../store/actions/BookingActions';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap';
 
class GetBookingByIdComponent extends React.Component {
 
    
    componentDidMount() {
        const { bookingActions, match } = this.props;
        console.log(match.params.id)
        bookingActions.fetchUserById(match.params.id);
    }
    render() {
        const { booking } = this.props;
        return (
            <div>
                
                <Navbar bg='dark' variant="dark">
                    <Navbar.Brand href="#home" className="justify-content-center">Booking Details</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >


                    </Navbar.Collapse>
                </Navbar>

                
                {
                       booking !== undefined ?
 
                        <Table className="container my-5" striped bordered hover>
                            <thead  >
                                <tr className="table-primary">
                                    <th>Booking ID</th>
                                    <th>Booking Date</th>
                                    <th>Booking Title</th>
                                    <th>Booking Type</th>
                                    <th>Description</th>
                                    <th>Package ID</th>
                                    <th>User ID</th>
                               
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {
                         
                                  
                                   
                                    
                                    <tr className="table-primary">
                                        <td>{booking.bookingId}</td>
                                        <td> {booking.bookingDate}</td>
                                        <td> {booking.bookingTitle}</td>
                                        <td>{booking.bookingType}</td>
                                        <td> {booking.description} </td>
                                        <td> {booking.pack.packageId}</td>
                                        <td> {booking.user.userId}</td>
                            </tr>
                    }
                        
                        
                            </tbody>
 
                        </Table>
 
                        :
                        <h3>Loading....</h3>
                 }


                <div style={{ position: "fixed" }} className="d-flex flex-column foo ">
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
}
function mapStateToProps(state) {
 
    return { booking: state.bookingReducer.booking }
}
 
function mapDispatchToProps(dispatch) {
    return {
        bookingActions: bindActionCreators(bookingActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetBookingByIdComponent);