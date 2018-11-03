/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import {
  Card,
  Button,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Input,
} from 'reactstrap';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class BookingPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="ECG 24*7" />
        </Helmet>
        <Row className="margin-0">
          <Col sm="12" className="padding-0">
            <Card body>
              <CardTitle>Select Vehicle</CardTitle>
              <Row className="margin-0">
                <Input
                  type="select"
                  onChange={this.onChangeCompany}
                  className="small-input"
                >
                  <option value="">Company</option>
                  <option value="Honda">Honda</option>
                  <option value="Hero">Hero</option>
                  <option value="Suzuki">Suzuki</option>
                </Input>
                <Input
                  type="select"
                  onChange={this.onChangeModel}
                  className="small-input"
                >
                  <option value="">Model</option>
                  <option value="Honda Activa">Honda Activa</option>
                  <option value="Hero Maestro">Hero Maestro</option>
                  <option value="Suzuki Access">Suzuki Access</option>
                </Input>
                <Input
                  type="input"
                  onChange={this.onChangePincode}
                  className="small-input"
                  placeholder="Vehicle Number"
                />
                <Button size="sm">Next</Button>
              </Row>
            </Card>
          </Col>
          <Col sm="12" className="padding-0">
            <Card body>
              <CardTitle>Enter Pincode</CardTitle>
              <Row className="margin-0">
                <Input
                  type="number"
                  onChange={this.onChangePincode}
                  className="small-input"
                />
                <Button>Find NearBy Service Stations</Button>
              </Row>
            </Card>
          </Col>
          <Col sm="12" className="padding-0">
            <Card body>
              <CardTitle>Select Garrage</CardTitle>
              <Row className="margin-0">
                <Col sm="9" className="padding-0">
                  <ListGroup sm="6">
                    <ListGroupItem disabled tag="a" href="#">
                      Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="#">
                      Vestibulum at eros
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col sm="3">
                  <Button>Done</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </article>
    );
  }
}

BookingPage.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'booking', reducer });
const withSaga = injectSaga({ key: 'booking', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BookingPage);
