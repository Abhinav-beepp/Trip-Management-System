const initialState = {
    bookings: [],
    booking: undefined,
    newBooking: undefined,
    usersIds: []
}
 
export default function BookingReducer(state = initialState, action) {
 
    switch (action.type) {
 
        case 'FETCH_ALL_USERS_SUCCESS':
            return {
                ...state,
               bookings : action.bookings
            };
            
        case 'FETCH_ALL_USERS_IDS_SUCCESS':
            return {
                ...state,
               usersIds : action.usersIds
            };
            case 'FETCH_USER_BY_ID_SUCCESS':
                return {
                    ...state,
                    booking: action.payload
                };
     
            case 'CREATE_USER_SUCCESS':
                return {
                    ...state,
                    newBooking: action.payload
                };
       
        default:
            return state;
 
    }
}