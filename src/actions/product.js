import * as types from '../constants/types'

export const getProducts = () =>
  dispatch =>
    fetch(`products.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        })
      })

export const compare = product => ({
    type: types.COMPARE_PRODUCT,
    product
  })

export const filterOutBlue = () => ({
   type: types.FILTER_OUT_BLUE
})

export const addUserPrice = (userPrice) => ({
  type: types.ADD_USER_PRICE,
  userPrice
})

export const filterPrice = () => ({
  type: types.FILTER_PRICE,
})
