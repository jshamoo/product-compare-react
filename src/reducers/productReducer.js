import * as types from '../constants/types'

const INITIAL_STATE = {
  products: [],
  userPrice: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state, products: action.payload.map(product =>
          ({...product, compare: false})
        )
      };
    case types.COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map(product =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      };
    case types.FILTER_OUT_BLUE:
      return {
        ...state, products: state.products.filter(product =>
          product.colors.includes('blue')
        )
      }
    case types.ADD_USER_PRICE:
      return {
        ...state, userPrice: action.userPrice
      }
    case types.FILTER_PRICE:
      return {
        ...state, products: state.products.filter(product =>
          Number(product.price.slice(1)) <= state.userPrice
        )
      }
    default:
      return state
  }
}
