/**
 *
 * MinimalForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

const TextField = styled.input`
  display: block;
  border: 1px solid #eee;
  background: white;
  margin: 10px 0;
  padding: 10px;
  width: 50%;
  border-radius: 5px;
`;

const Error = styled.h4`
  color: #cc0000;
`;

function MinimalForm({
  onChangeFullName,
  onChangeEmail,
  onChangePassword,
  onChangeMobileNumberPrimary,
  onChangeLicenceNo,
  onSubmit,
  fullName,
  email,
  password,
  mobileNumberPrimary,
  licenceNo,
  title,
  error,
}) {
  return (
    <Form onSubmit={onSubmit}>
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
      <Button
        onClick={onSubmit}
        className="btn btn-primary"
        style={{ width: '50%' }}
      >
        Register
      </Button>
      {error && <Error>{error}</Error>}
    </Form>
  );
}

MinimalForm.propTypes = {
  onChangeFullName: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeMobileNumberPrimary: PropTypes.func.isRequired,
  onChangeLicenceNo: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  mobileNumberPrimary: PropTypes.string.isRequired,
  licenceNo: PropTypes.string.isRequired,
  title: PropTypes.string,
  error: PropTypes.string,
};

export default MinimalForm;
