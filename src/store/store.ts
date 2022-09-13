import {createStore} from 'redux';
import { userReducer } from './tokens/tokenReducer';

const store = createStore (userReducer);

export default store;