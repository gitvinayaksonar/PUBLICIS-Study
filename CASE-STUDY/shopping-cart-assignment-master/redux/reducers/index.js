import { combineReducers } from 'redux';
import bannersReducer from './bannersReducer';
import categoryListReducer from './categoryListReducer'
import productsBuyReducer from './productsBuyReducer';
import productsReducer from './productsReducer'


const rootReducer = combineReducers({
    categoryList : categoryListReducer,
    products : productsReducer,
    productsBought : productsBuyReducer,
    banners : bannersReducer
})

export default rootReducer;
