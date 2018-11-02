import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      currentUrl: window.location.href,
    };
  }

  toggle() {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">ECG 24*7</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {!this.props.isLoggedIn && (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/login"
                    active={this.state.currentUrl.includes('/login')}
                  >
                    Log In
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/register"
                    active={this.state.currentUrl.includes('/register')}
                  >
                    Sign Up
                  </NavLink>
                </NavItem>
              </Nav>
            )}
            {this.props.isLoggedIn && (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/book-service"
                    active={this.state.currentUrl.includes('/book-service')}
                  >
                    Book A Service
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/service-history"
                    active={this.state.currentUrl.includes('/service-history')}
                  >
                    Service History
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/account"
                    active={this.state.currentUrl.includes('/account')}
                  >
                    My Account
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/logout"
                    active={this.state.currentUrl.includes('/logout')}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};
