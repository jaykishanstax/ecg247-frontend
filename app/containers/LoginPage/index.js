/*
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import MinimalForm from '../../components/MinimalForm/index';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeLoginError,
} from './selectors';
import { loginRequest, changeUsername, changePassword } from '../App/actions';

export class LoginPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[{ name: 'description', content: 'Description of LoginPage' }]}
        />
        <MinimalForm
          onChangeUsername={event =>
            this.props.dispatch(changeUsername(event.target.value))
          }
          onChangePassword={event =>
            this.props.dispatch(changePassword(event.target.value))
          }
          onSubmit={event => {
            event.preventDefault();
            this.props.dispatch(
              loginRequest({
                username: this.props.username,
                password: this.props.password,
              }),
            );
          }}
          username={this.props.username}
          password={this.props.password}
          title="Login"
          error={this.props.loginError}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginError: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loginError: makeLoginError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
