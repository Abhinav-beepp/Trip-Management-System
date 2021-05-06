import Axios from 'axios';
 
// API URL
const apiUrl = 'http://localhost:9191';
 
// Sync Action
export const fetchAllUsersSuccess = (bookings) => {
    console.log(bookings);
    return {
        type: 'FETCH_ALL_USERS_SUCCESS',
        bookings
    }
};
 
//Async Action
export const fetchAllUsers = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl + '/api/tms/booking/view-all-bookings')
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(fetchAllUsersSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchUserByIdSuccess = (booking) => {
    console.log(booking);
    return {
        type: 'FETCH_USER_BY_ID_SUCCESS',
        payload: booking
    }
};
 

export const fetchUserById = (bookingId) => {
    console.log("hi");
    return (dispatch) => {
        return Axios.get(apiUrl + '/api/tms/booking/view-booking/' + bookingId)
       
            .then(resp => {
                console.log(resp.data)
                // Handle data with sync action
                dispatch(fetchUserByIdSuccess(resp.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};
 
export const createUserSuccess = (booking) => {
    return {
        type: 'CREATE_USER_SUCCESS',
        payload: booking
    }
};
 
export const createUser = (payload) => {
    let data = {
        userId: payload.userId,
        userType: payload.userType,
        password: payload.password,
        email: payload.email,
        mobile: payload.mobile
        
    
    }
    return (dispatch) => {
        return Axios.post(apiUrl + "/api/tms/admin/add-admin", data)
            .then(response => {
                dispatch(createUserSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchDeleteAssetSuccess = (admin) => {
    return {
      type: 'FETCH_DELETE_ASSET_SUCCESS',
      payload: admin,
    };
  };
  
  export const fetchDeleteAsset = (adminId) => {
      console.log("hi");
    return (dispatch) => {
      return Axios.delete(apiUrl + '/api/tms/admin/delete-admin/' + adminId)
        .then((resp) => {
          // Handle data with sync action
          dispatch(fetchDeleteAssetSuccess(resp.data));
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