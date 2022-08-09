import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotal from './CartTotal'
import EmptyCart from './EmptyCart'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value
            if(cart.length > 0) {
              return (
                <>
                  <Title name='your' title='cart' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} history={window.history}/>
                </>
              )
            } else {
              return(
                <EmptyCart />
              )
            } 
          }}
        </ProductConsumer>
      </section>
    )
  }
}
