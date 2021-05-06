import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MakeBookingComponent from './MakeBookingComponent';
import GetBookingByIdComponent from './GetBookingByIdComponent';
import LandingComponent from './LandingComponent';
import BookingListComponent from './BookingListComponent';
import DeleteBookingByIdComponent from './DeleteBookingByIdComponent';


 
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={LandingComponent} exact />
            <Route path={`/admin/bookings`} component={MakeBookingComponent} exact />
            <Route path={`/admin/bookings/get/all`} component={BookingListComponent} exact />
           <Route path={`/view-booking/:id`} component={GetBookingByIdComponent} />
           <Route path={`/delete-booking/:id`} component={DeleteBookingByIdComponent} />
            
        </Switch>
    </BrowserRouter>
);
export default Routes;