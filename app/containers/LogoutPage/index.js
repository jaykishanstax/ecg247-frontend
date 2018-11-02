import React from 'react';
import { authentication } from '../App';

export default class LogoutPage extends React.Component {
  componentWillMount() {
    authentication.clearToken();
  }

  render() {
    return null;
  }
}
