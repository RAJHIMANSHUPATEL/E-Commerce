import { act } from 'react-dom/test-utils'
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  //Product Loader
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload]
    }
  }
  // Set Grid and List View 
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true
    }
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false
    }
  }

  // Sort Items
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    if (sort === 'price-lowest') {
      console.log('price-lowest')
    }
    if (sort === 'price-highest') {
      console.log('price-highest')
    }
    if (sort === 'name-a') {
      console.log('name-a')
    }
    if (sort === 'name-z') {
      console.log('name-z')
    }
    return { ...state }
  }


  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
