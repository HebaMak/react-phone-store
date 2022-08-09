import React from 'react'

const CartColumns = () => {
  return (
    <div className='container-fluid text-center d-none d-lg-block'>
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upperca">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upperca">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upperca">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upperca">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upperca">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-upperca">total</p>
        </div>
      </div>
    </div>
  )
}

export default CartColumns