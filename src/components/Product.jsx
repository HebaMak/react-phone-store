import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className="card">
          <ProductConsumer>
            {value => (
              <div className="img-container p-5" onClick={()=>value.handleDetail(id)} >
                <Link to='/details'>
                  <img src={img} alt={title} className='card-img-top' />
                </Link>
                <button className='cart-btn' 
                        disabled={inCart ? true : false}
                        onClick={()=>{
                          value.addToCart(id)
                          value.openModal(id)
                          }} >
                  {
                    inCart ?
                      (<p className="text-capitalize mb-0" disabled>{" "}in cart</p>) 
                      : 
                      (<i className="fas fa-cart-plus" />)
                  }
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className='me-1'>$</span>{price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes= {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div `
  .card {
    transition: all 1s linear;
    border: .4rem solid transparent;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear
  }
  &:hover {
    .card {
      border: .4rem solid rgba(0,0,0,.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2)
    }
    .card-footer {
      background: rgba(247,247,247)
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    
    .card-img-top {
      max-width: 200px;
      height: 250px;
      transition: all 1s linear;
    }
    &:hover {
      .card-img-top {
      transform: scale(1.2);
      }
      .cart-btn {
        transform: translate(0 , 0);
      }
    }
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    background-color: var(--light-blue);
    border: none;
    color: var(--main-white);
    font-size: 1.4rem;
    border-radius: .5rem 0 0 0;
    transform: translate(100% , 100%);
    transition: all 1s linear;
    &:hover {
      background-color: var(--main-blue);
      cursor: pointer
    }
  }
`