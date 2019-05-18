import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
  };

export const updateContact = (id) => {
    return {
        type: actionTypes.UPDATE_CONTACT,
        id: id
    }
}