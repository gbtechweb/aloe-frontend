import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Acceder</div>
    <div className={props.step2 ? 'active' : ''} >Comprar</div>
    <div className={props.step3 ? 'active' : ''} >Pago</div>
    <div className={props.step4 ? 'active' : ''} >orden de compra</div>
  </div>
}

export default CheckoutSteps;