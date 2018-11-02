/*
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeRegisterError,
} from './selectors';

import {
  updatePassword,
  updateEmail,
  updateFullName,
  updateMobileNumber,
  updateLicenceNo,
  registerRequest,
} from './actions';

import RegisterForm from '../../components/RegisterForm/index';
import reducer from './reducer';
import saga from './saga';

export class RegisterPage extends React.PureComponent {
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
          title="RegisterPage"
          meta={[
            { name: 'description', content: 'Description of RegisterPage' },
          ]}
        />
        <RegisterForm
          onChangeFullName={event =>
            this.props.dispatch(updateFullName(event.target.value))
          }
          onChangeEmail={event =>
            this.props.dispatch(updateEmail(event.target.value))
          }
          onChangePassword={event =>
            this.props.dispatch(updatePassword(event.target.value))
          }
          onChangeMobileNumberPrimary={event =>
            this.props.dispatch(updateMobileNumber(event.target.value))
          }
          onChangeLicenceNo={event =>
            this.props.dispatch(updateLicenceNo(event.target.value))
          }
          onSubmit={event => {
            event.preventDefault();
            this.props.dispatch(registerRequest());
          }}
          fullName={this.props.fullName}
          email={this.props.email}
          password={this.props.password}
          mobileNumberPrimary={this.props.mobileNumberPrimary}
          licenceNo={this.props.licenceNo}
          error={this.props.registerError}
          title="Register"
        />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  mobileNumberPrimary: PropTypes.string.isRequired,
  licenceNo: PropTypes.string.isRequired,
  registerError: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  registerError: makeRegisterError(),
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

const withReducer = injectReducer({ key: 'register', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(RegisterPage);
