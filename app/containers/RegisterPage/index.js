/* eslint-disable jsx-a11y/alt-text */
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
import Image from 'react-bootstrap/lib/Image';
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
  updateUserRole,
  registerRequest,
} from './actions';

import RegisterForm from '../../components/RegisterForm/index';
import reducer from './reducer';
import saga from './saga';

export class RegisterPage extends React.PureComponent {
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
            padding: '80px 0px',
            background: '#F7F7F7',
            height: 'calc(100vh - 56px)',
            width: '500px',
            float: 'right',
            position: 'absolute',
            right: '0px',
            top: '56px',
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
            onChangeUserRole={event =>
              this.props.dispatch(updateUserRole(event.target.value))
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
            userRole={this.props.userRole}
            error={this.props.registerError}
            title="Register"
          />
        </div>
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
  userRole: PropTypes.string.isRequired,
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
