import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:9191';
 
// Sync Action
export const fetchAllBookingsSuccess = (bookings) => {
    console.log(bookings);
    return {
        type: 'FETCH_ALL_USERS_SUCCESS',
        bookings
    }
};
 
//Async Action
export const fetchAllBookings = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/api/tms/booking/view-all-bookings')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllBookingsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchBookingByIdSuccess = (booking) => {
    console.log(booking);
    return {
        type: 'FETCH_USER_BY_ID_SUCCESS',
        payload: booking
    }
};
 

export const fetchBookingById = (bookingId) => {
    console.log("hi");
    return (dispatch) => {
        return Axios.get(apiUrl + '/api/tms/booking/view-booking/' + bookingId)
       
            .then(resp => {
                console.log(resp.data)
                // Handle data with sync action
                dispatch(fetchBookingByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};
 
export const createBookingSuccess = (booking) => {
    return {
        type: 'CREATE_USER_SUCCESS',
        payload: booking
    }
};
 
export const createBooking = (payload) => {
    let data = {
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
    return (dispatch) => {
        return Axios.post(apiUrl + "/api/tms/booking/makeBooking", data)
            .then(response => {
                dispatch(createBookingSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchDeleteBookingSuccess = (booking) => {
    return {
      type: 'FETCH_DELETE_ASSET_SUCCESS',
      payload: booking,
    };
  };
  
  export const fetchDeleteBooking = (bookingId) => {
      console.log("hi");
    return (dispatch) => {
      return Axios.delete(apiUrl + '/api/tms/admin/delete-admin/' + bookingId)
        .then((resp) => {
          // Handle data with sync action
          dispatch(fetchDeleteBookingSuccess(resp.data));
        })
        .catch((error) => {
          throw error;
        });
    };
  };
  





  export const fetchAllUsersIdsSuccess = (usersIds) => {
    console.log(usersIds);
    return {
        type: 'FETCH_ALL_USERS_IDS_SUCCESS',
        usersIds
    }
};
 
//Async Action
export const fetchAllUsersIds = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/api/tms/user/view-all-user')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllUsersIdsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};