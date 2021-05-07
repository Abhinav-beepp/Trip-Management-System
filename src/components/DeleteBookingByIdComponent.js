import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookingActions from '../store/actions/BookingActions';

class DeleteBookingByIdComponent extends React.Component {
  componentDidMount() {
    const { bookingActions, match } = this.props;
    // calling redux function to fetch a particular id
    bookingActions.fetchDeleteBooking(match.params.id);
  }
  render() {
    const { booking } = this.props;
    return (window.location.href = '/admin/users/get/all');
  }
}

function mapStateToProps(state) {
  return { booking: state.bookingReducer.booking };
}

function mapDispatchToProps(dispatch) {
  return {
    bookingActions: bindActionCreators(bookingActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteBookingByIdComponent);