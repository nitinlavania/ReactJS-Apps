import React, { Component } from 'react';
import { connect } from 'react-redux'
import CartButton from './CartButton';
import WishListButton from './WishListButton';
import CartGridView from './CartGridView';
import Header from './Header';
import { showList } from '../middlewares';

class TabViewComponent extends Component {

   render() {
        return(
            <div>
                <CartButton />
                <WishListButton />
            </div>
        )
    }
}

export default TabViewComponent