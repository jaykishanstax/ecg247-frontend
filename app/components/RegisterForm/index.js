/**
 *
 * MinimalForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const FormN = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextField = styled.input`
  display: block;
  border: 1px solid #eee;
  background: white;
  margin: 10px 0;
  padding: 10px;
  width: 90%;
  border-radius: 5px;
`;

const Error = styled.h6`
  color: #cc0000;
  margin-top: 10px;
`;

function RegisterForm({
  onChangeFullName,
  onChangeEmail,
  onChangePassword,
  onChangeMobileNumberPrimary,
  onChangeLicenceNo,
  onChangeUserRole,
  onSubmit,
  fullName,
  email,
  password,
  mobileNumberPrimary,
  licenceNo,
  userRole,
  title,
  error,
}) {
  return (
    <FormN onSubmit={onSubmit}>
      {title && <h1>{title}</h1>}
      <TextField
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={fullName}
        onChange={onChangeFullName}
        required
      />
      <TextField
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
        required
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onChangePassword}
        required
      />
      <TextField
        type="text"
        name="mobileNumberPrimary"
        placeholder="Mobile Number"
        value={mobileNumberPrimary}
        onChange={onChangeMobileNumberPrimary}
        required
      />
      <TextField
        type="text"
        name="licenceNo"
        placeholder="Licence No"
        value={licenceNo}
        onChange={onChangeLicenceNo}
        required
      />
      <Input
        type="select"
        name="select"
        onChange={onChangeUserRole}
        value={userRole}
        style={{
          width: '90%',
          margin: '5px',
          height: '46px',
          color: 'gray',
          borderColor: '#eee',
        }}
      >
        <option value="USER">Customer</option>
        <option value="OWNER">Garrage Owner</option>
      </Input>
      <Button
        onClick={onSubmit}
        className="btn btn-primary"
        style={{ width: '50%', marginTop: '10px' }}
      >
        Register
      </Button>
      {error && <Error>{error}</Error>}
    </FormN>
  );
}

RegisterForm.propTypes = {
  onChangeFullName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeMobileNumberPrimary: PropTypes.func.isRequired,
  onChangeLicenceNo: PropTypes.func.isRequired,
  onChangeUserRole: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  mobileNumberPrimary: PropTypes.string.isRequired,
  licenceNo: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  title: PropTypes.string,
  error: PropTypes.string,
};

export default RegisterForm;
