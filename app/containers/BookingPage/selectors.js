/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBooking = state => state.get('booking', initialState);

const makeSelectUsername = () =>
  createSelector(selectBooking, bookingState => bookingState.get('username'));

export { selectBooking, makeSelectUsername };
