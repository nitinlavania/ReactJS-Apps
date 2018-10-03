const listReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_LIST':
        return {
            ...state,
            userPayload: action.userPayload,
            type: action.type
        }
      case 'CART':
        return {
            ...state,
            cartPayload: action.cartPayload,
            type: action.type,
            userPayload: state.userPayload
        }
      case 'WISH_LIST':
        return {
            ...state,
            wishPayload: action.wishPayload,
            type: action.type,
            userPayload: state.userPayload
        }
      default:
        return state
    }
  }
  
  const listReducers = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_LIST':
        return listReducer(undefined, action)

      case 'CART':
        return listReducer(state, action)

      case 'WISH_LIST':
        return listReducer(state, action)
    
      default:
        return state
    }
  }
  
  export default listReducers
  