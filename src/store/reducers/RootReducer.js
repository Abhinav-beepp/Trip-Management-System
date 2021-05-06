import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import bookingReducer from './BookingReducer';
 
const rootReducer = combineReducers({
 
    counterReducer,
    bookingReducer
 
});
 
export default rootReducer;