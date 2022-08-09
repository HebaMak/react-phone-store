import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          value => {
            const {id, company, img, title, info, price, inCart} = value.detailProduct
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto my-5 text-center text-blue">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 col-md-6 mx-auto my-3">
                    <img src={img} alt={title} className='img-fluid' />
                  </div>
                  <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                    <h2>model: {title}</h2>
                    <h4 className='text-title text-uppercase text-muted my-3'>
                      made by: <span className='text-uppercase'>{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>price: <span>$</span> {price} </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to='/'>
                        <ButtonContainer btn='blue'>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer  btn='yellow'
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                          value.addToCart(id)
                                          value.openModal(id)
                                        }}>
                        {inCart ? 'in cart' : 'add to cart'}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}