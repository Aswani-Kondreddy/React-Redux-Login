import { createStore } from 'redux';
import loginReducer from '../Reducer/index';

const store = createStore(loginReducer);

export default store;