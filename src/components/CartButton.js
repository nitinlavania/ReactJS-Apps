import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showList } from '../middlewares'

class CartButton extends Component {

   render() {
        return(
            <div>
                <div className="cart-btn" onClick={() => this.props.dispatch(showList('CART'))}>Cart</div>
            </div>
        )
    }

}

CartButton = connect()(CartButton)

export default CartButton