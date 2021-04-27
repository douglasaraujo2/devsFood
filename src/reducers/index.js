import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    user: UserReducer,
    cart: CartReducer
});