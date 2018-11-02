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

export class LoginPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div
        style={{
          margin: '20px calc(100vh - 50px) auto',
          border: '1px solid lightgray',
          padding: '50px',
          borderRadius: '5px',
          background: 'white',
        }}
      >
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
