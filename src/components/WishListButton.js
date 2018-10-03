import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showList } from '../middlewares'

class WishListButton extends Component {

    render() {
        return(
            <div>
                <div className="wishlist-btn" onClick={() => this.props.dispatch(showList('WISH_LIST'))}>Wish List</div>
            </div>
        )
    }
}

WishListButton = connect()(WishListButton)

export default WishListButton