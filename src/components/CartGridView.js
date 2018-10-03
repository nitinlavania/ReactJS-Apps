import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showList } from '../middlewares';
import TableData from './TableData';
import CartData from './CartData';
import WishListData from './WishListData';

class CartGridView extends Component {

    componentWillMount() {
        const {dispatch} = this.props
        dispatch(showList())
    }

    render() {
        const gridType = this.props.type
        
        return(
            <div className="cart-container">
                
                {(this.props && this.props.userData) ? <TableData payload={this.props.userData}/> : ''}
                
                {(this.props && this.props.cartData && gridType === 'CART') ? <CartData payload={this.props.cartData}/> : ''}
                
                {(this.props && this.props.wishData && gridType === 'WISH_LIST') ? <WishListData payload={this.props.wishData}/> : ''}
                
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        userData: state.listReducers.userPayload,
        cartData: state.listReducers.cartPayload,
        wishData: state.listReducers.wishPayload,
        type: state.listReducers.type
    }
}

CartGridView = connect(mapsStateToProps)(CartGridView)

export default CartGridView