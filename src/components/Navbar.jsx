import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import styled from 'styled-components'
import logo from '../logo.svg'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>  
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk  */}
        <div className='container d-flex justify-content-between'>
          <div className='d-flex'>
            <Link to='/'> 
              <img src={logo} alt="logo" className='navbar-brand' />
            </Link>
            <ul className="navbar-nav alig-items-center">
              <li className='nav-item ml-5'>
                <Link to='/' className='nav-link'>Products</Link>
              </li>
            </ul>
          </div>
          <Link to='/cart' className='ml-auto'>
            <ButtonContainer btn='navBtn'>
              <i className='fas fa-cart-plus me-2' />
              my cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav `
  background-color: var(--main-blue);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  .nav-link {
    color: var(--main-white) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`

