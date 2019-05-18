import * as actionTypes from '../Components/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
      case actionTypes.UPDATE_CONTACT:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };