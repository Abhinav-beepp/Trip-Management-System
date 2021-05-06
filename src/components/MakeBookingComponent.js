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
            adminId: '',
            adminName: '',
            password: '',
            email: ''    ,
            mobile:''    ,
            getUserIds:'Select UserIds ',
            user: {
                userId: '',
                userType: '',
                password: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createUser = this.createUser.bind(this);
    }
    componentDidMount() {
        this.props.bookingActions.fetchAllUsers();
        
            this.props.bookingActions.fetchAllUsersIds();
        
    }
 
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
 
    createUser(e) {
        e.preventDefault();
        
        let payload = {
            adminId: this.state.adminId,
            adminName: this.state.adminName,
            password: this.state.password,
            email: this.state.email,
            mobile: this.state.mobile,
            
            user: {
                userId: this.state.getUserIds,
                userType: this.state.userType,
                password: this.state.password
            }
        }
        
        const { bookingActions } = this.props;
        bookingActions.createUser(payload);        
 
    }
 
    clear = () => {
        this.setSate = ({
            adminId: '',
            adminName: '',
            password: '',
            email: ''    ,
            mobile:''    ,
            user: {
                userId: '',
                userType: '',
                password: ''
            }
        });
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
                    <Form onSubmit={this.createUser}>
                        <Table responsive className= "mx-auto">
                            <tbody>
                                {/* <tr>
                                    <td><label>User Id:</label></td>
                                    <td><input type="text" placeholder="User Id" name="UserId" id="UserId" value={this.state.UserId} onChange={this.handleInputChange}></input></td>
                                </tr> */}
                                <tr>
                                    <td><label>ID:</label></td>
                                    <td><input type="text" placeholder="Id" name="userId" id="userId" value={this.state.userId} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Name:</label></td>
                                    <td><input type="text" placeholder="Admin Name" name="adminName" id="adminName" value={this.state.adminName} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Password:</label></td>
                                    <td><input type="password" placeholder="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Email:</label></td>
                                    <td><input type="text" placeholder="Email" name="UserEmail" id="UserEmail" value={this.state.UserEmail} onChange={this.handleInputChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label>Mobile:</label></td>
                                    <td><input type="text" placeholder="Mobile" name="UserMobile" id="UserMobile" value={this.state.UserMobile} onChange={this.handleInputChange}></input></td>
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