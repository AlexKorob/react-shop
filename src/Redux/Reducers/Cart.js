import { ADD_PRODUCT_TO_CART,
         DELETE_PRODUCT_FROM_CART,
         SET_COUNT_FOR_PRODUCT_IN_CART } from "Redux/Actions/cart";
import { reducerWrapper } from 'Helpers/Reducers';

const getProductFromCart = (product, cart) => (
  // Product and products in cart always must have id
  cart.find(el => {
    if (product.id === el.id) return true;
    return false
  })
)

const initialState = [];

const cart = {
  [ADD_PRODUCT_TO_CART]: (state, action) => {
    let new_item = action.item;
    let is_item_exist_in_cart = false;
    const new_state = state.map(item => {
      if (item.id === new_item.id) {
        is_item_exist_in_cart = true;
        return {...item, count: item.count + 1}
      }
      return item;
    });
    if (!is_item_exist_in_cart) {
      new_state.push({...new_item, count: 1});
    }
    return new_state;
  },

  [DELETE_PRODUCT_FROM_CART]: (state, action) => {
    const itemForDelete = action.item;
    let newState = {...state};
    let index = newState.findIndex(el => {
      if (el.id === itemForDelete.id) return true;
      return false;
    });
    if (index !== -1) {
      return newState
    }
    return state;
  },
  
  [SET_COUNT_FOR_PRODUCT_IN_CART]: (state, action) => {
    const productForUpdate = action.item;
    const count = action.count;
    let new_state = {...state};
    let product = getProductFromCart(productForUpdate, new_state);
    if (product) {
      product.count = count;
      return new_state;
    }
    return state;
  }
};

export default reducerWrapper(cart, initialState);