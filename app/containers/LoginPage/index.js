/*
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import Image from 'react-bootstrap/lib/Image';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MinimalForm from '../../components/MinimalForm/index';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeLoginError,
} from './selectors';

import { changeUsername, changePassword, loginRequest } from './actions';

import reducer from './reducer';
import saga from './saga';

export class LoginPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Image
          src="http://hpservicecenterschennai.in/images/hp-printer-service-centers-chennai.JPG"
          style={{ height: 'calc(100vh - 56px)' }}
        />
        <div
          style={{
            borderLeft: '1px solid lightgray',
            padding: '150px 50px',
            background: '#F7F7F7',
            width: '500px',
            position: 'absolute',
            right: '0',
            top: '56px',
            height: 'calc(100vh - 56px)',
          }}
        >
          <Helmet
            title="LoginPage"
            meta={[
              { name: 'description', content: 'Description of LoginPage' },
            ]}
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
            error={
              this.props.loginError ||
              (this.props.location.state
                ? this.props.location.state.message
                : null)
            }
          />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  loginError: PropTypes.string.isRequired,
  location: PropTypes.any,
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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
