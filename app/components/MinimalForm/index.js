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
`;

const TextField = styled.input`
  display: block;
  border: 1px solid #eee;
  margin: 10px 0;
  background: white;
  padding: 10px;
  width: 90%;
  border-radius: 5px;
`;

const Error = styled.h6`
  color: #cc0000;
  margin-top: 10px;
`;

function MinimalForm({
  onChangeUsername,
  onChangePassword,
  onSubmit,
  username,
  password,
  title,
  error,
}) {
  return (
    <Form onSubmit={onSubmit}>
      {title && <h1>{title}</h1>}
      <TextField
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChangeUsername}
        required
      />
      <TextField
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onChangePassword}
        required
      />
      <Button
        onClick={onSubmit}
        className="btn btn-primary"
        style={{ width: '50%' }}
      >
        Log In
      </Button>
      {error && <Error>{error}</Error>}
    </Form>
  );
}

MinimalForm.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  title: PropTypes.string,
  error: PropTypes.string,
};

export default MinimalForm;
