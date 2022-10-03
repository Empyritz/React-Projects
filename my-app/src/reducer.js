
const reducer = (state, {type, payload}) => {
  if(type === 'CLEAR_CART'){
    return {...state, cart: []}
  }
  if(type === 'REMOVE'){
    return {...state, cart: state.cart.filter((item)=> item.id !== payload)}
  }
  if(type === 'INCREASE'){
    let tempCart = state.cart.map((item)=> {
      if(item.id === payload){
        return ({
          ...item, 
          amount: item.amount +1
        })
      } 
      return item
    })
    return {...state, cart: tempCart}
  }
  if(type === 'DECREASE'){
    let tempCart = state.cart.map((item)=> {
      if(item.id === payload){
        return ({
          ...item, 
          amount: item.amount -1
        })
      } 
      return item
    }).filter((cartItem) => cartItem.amount !== 0)
    return {...state, cart: tempCart}
  }
  if(type === 'GET_TOTALS'){
    let {totalPrice, totalAmount } = state.cart.reduce((cartTotal, cartItem)=>{
      const {price, amount } = cartItem
      const itemTotal = price * amount

      cartTotal.totalAmount += amount
      cartTotal.totalPrice += itemTotal
      return cartTotal
    },{
      totalPrice: 0,
      totalAmount: 0,
    })
    totalPrice = totalPrice.toFixed(2)

    return {...state, totalPrice, totalAmount}
  }
  if(type === 'LOADING'){
    return {...state, loading: true}
  }
  if(type === 'DISPLAY_ITEMS'){
    return {...state, cart: payload, loading: false}
  }
  if(type === 'ERROR'){
    return {...state, loading: false}
  }
  if(type === 'TOGGLE_AMOUNT'){
    return {...state, cart: state.cart.map((item) => {
      if(item.id === payload.id){
        if(payload.type === 'increase'){
          return {...item, amount: item.amount +1}
        }else{
          return {...item, amount: item.amount-1}
        }
      }
      return item
    }).filter(item => item.amount !== 0) }
  }
  return state
}

export default reducer