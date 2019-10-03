import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper class="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand pl-5" />
        </Link>
        <ul class="navbar-nav align-items-center">
          <li class="nav-item ml-5">
            <Link to="/" className="nav-link">
              Product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: flex;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
