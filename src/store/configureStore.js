import {createStore} from 'redux';
import contactReducer from '../reducers/contactReducer';

export default function configureStore(initialState) {
  return createStore(contactReducer, initialState);
}