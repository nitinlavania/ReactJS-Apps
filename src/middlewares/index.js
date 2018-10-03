import axios from 'axios'

export const showList = function(type) {
    return function(dispatch) {
      const request = axios.get('service-data.json')
      request.then((data) => {
        
        switch (type) {
            case 'CART':
              return dispatch({
                type: 'CART',
                cartPayload: data.data.cart
            })
            case 'WISH_LIST':
              return dispatch({
                type: 'WISH_LIST',
                wishPayload: data.data.wishList.wishListItems
            })
            default:
              return dispatch({
                type: 'SHOW_LIST',
                userPayload: data.data.userDetails
            })
          }
      })
      .catch(error => {
        dispatch({
          type: 'Error occured',
          error: error
        })
      })
    }
  }