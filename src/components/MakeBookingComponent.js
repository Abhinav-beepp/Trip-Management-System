import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookingActions from '../store/actions/BookingActions';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';  
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'




class MakeBookingComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            bookingId: '',
            description: '',
            bookingType: '',
            bookingTitle: ''    ,
            bookingDate:''    ,
            getUserIds:'Select UserIds ',
            user: {
                userId: '',
                userType: '',
                password: '',
            },
            package:{
                packageId:'',
                packageName:'',
                packageDescription:'',
                packageType:'',
                packageCost:'',
                },
            PaymentDetails:{
                paymentId:'',
                paymentMode:'',
                bankName:'',
                cardNo:'',
                netAmount:'',
                paymentStatus:'',
               },
            user:{
                 userId: '',
                 userType: '',
                 password: '',
             },  
            ticket:{
                 ticketId:'',
                 status:'',
              },
            hotel:{
                hotelId:'',
                hotelName:'',
                hotelType:'',
                hotelDescription:'',
                address:'',
                rent:'',
                status:'',
            },
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createBooking = this.createBooking.bind(this);
    }
    componentDidMount() {
        this.props.bookingActions.fetchAllBookings();
        
        this.props.bookingActions.fetchAllUsersIds();
        
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createBooking(e) {
        e.preventDefault();
        
        let payload = {

            bookingId: this.state.bookingId,
            description: this.state.description,
            bookingType: this.state.bookingType,
            bookingTitle: this.state.bookingTitle,
            bookingDate: this.state.bookingDate,
            getUserIds: 'Select UserIds ',
            user: {
                userId: this.state.userId,
                userType: this.state.userType,
                password: this.state.password,
            },
            package: {
                packageId: this.state.packageId,
                packageName: this.state.packageName,
                packageDescription: this.state.packageDescription,
                packageType: this.state.packageType,
                packageCost: this.state.packageCost,
            },
            PaymentDetails: {
                paymentId: this.state.paymentId,
                paymentMode: this.state.paymentMode,
                bankName: this.state.bankName,
                cardNo: this.state.cardNo,
                netAmount: this.state.netAmount,
                paymentStatus: this.state.paymentStatus,
            },
            user: {
                userId: this.state.userId,
                userType: this.state.userType,
                password: this.state.password,
            },
            ticket: {
                ticketId: this.state.ticketId,
                status: this.state.status,
            },
            hotel: {
                hotelId: this.state.hotelType,
                hotelName: this.state.hotelName,
                hotelType: this.state.hotelType,
                hotelDescription: this.state.hotelDescription,
                address: this.state.address,
                rent: this.state.rent,
                status: this.state.status,
            },
           
        }
        
        const { bookingActions } = this.props;
        bookingActions.createBooking(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            bookingId: '',
            description: '',
            bookingType: '',
            bookingTitle: '',
            bookingDate: '',
            getUserIds: 'Select UserIds ',
            user: {
                userId: '',
                userType: '',
                password: '',
            },
            package: {
                packageId: '',
                packageName: '',
                packageDescription: '',
                packageType: '',
                packageCost: '',
            },
            PaymentDetails: {
                paymentId: '',
                paymentMode: '',
                bankName: '',
                cardNo: '',
                netAmount: '',
                paymentStatus: '',
            },
            user: {
                userId: '',
                userType: '',
                password: '',
            },
            ticket: {
                ticketId: '',
                status: '',
            },
            hotel: {
                hotelId: '',
                hotelName: '',
                hotelType: '',
                hotelDescription: '',
                address: '',
                rent: '',
                status: '',
            },
        }
        );
    }

    render() {
        return (
            <div>

                <Navbar bg='dark' variant="dark">
                    <Navbar.Brand href="#home" className="justify-content-center">Make Booking</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >


                    </Navbar.Collapse>
                </Navbar>

                <Card      border="primary" className ="container mx-auto my-5  col-8 ">
                    <Form onSubmit={this.createBooking}>
                        <Table responsive className= "mx-auto">
                            <tbody>
                                {/* <tr>
                                    <td><label>User Id:</label></td>
                                    <td><input type="text" placeholder="User Id" name="UserId" id="UserId" value={this.state.UserId} onChange={this.handleInputChange}></input></td>
                                </tr> */}
                                <tr>
                                    <td><label>Booking ID:</label></td>
                                    <td><input type="text" placeholder="Id" name="bookingId" id="bookingId" value={this.state.bookingId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Description:</label></td>
                                    <td><input type="text" placeholder="Booking Description" name="Description" id="description" value={this.state.description} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Booking Type:</label></td>
                                    <td><input type="text" placeholder="Booking Type" name="Booking Type" id="type" value={this.state.bookingType} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Booking Title</label></td>
                                    <td><input type="text" placeholder="Booking Title" name="Booking Title" id="title" value={this.state.bookingTitle} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Booking Date:</label></td>
                                    <td><input type="date" placeholder="Booking Date" name="Booking Date" id="date" value={this.state.bookingDate} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <td><label>Select User Id:</label></td>
                                <DropdownButton size="md" className="mx-4 my-2" title="Select User Ids" name="getUserIds" value={this.state.getUserIds} onChange={this.handleInputChange}>
                                    {this.props.usersIds ? this.props.usersIds.map((user, key) => {

                                        return (
                                            
                                        
                                            <Dropdown.Item value={user.userId}>{user.userId}</Dropdown.Item>
                                        
                                        )
                                    }) : null}




                                </DropdownButton>
                                

                            </tbody>
                        </Table>

                      <div className="text-center">
                            <Button className="mx-2 my-3" variant="info" type="submit" value="submit">Submit</Button>
                            <Button className="mx-2 my-3" variant="danger">Cancel</Button>
                            </div>
                        

                        
                    </Form>
                </Card>



                
                
                    {
                        this.props.booking !== undefined &&
                        alert("Booking Created Succssfully with id"+ this.props.booking.bookingId)
                    }


                <div style={{ position: "fixed" , padding:"15px"}} className="d-flex flex-column foo ">
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
 
    return { booking: state.bookingReducer.newBooking, 
        usersIds: state.bookingReducer.usersIds}
}
 
function mapDispatchToProps(dispatch) {
    return {
        bookingActions: bindActionCreators(bookingActions, dispatch)
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MakeBookingComponent);