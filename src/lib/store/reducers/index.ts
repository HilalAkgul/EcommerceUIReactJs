import { combineReducers } from 'redux';
import UserReducer from './User';
import CartReducer from './Cart';

export default combineReducers({
    UserReducer,
    CartReducer
});
