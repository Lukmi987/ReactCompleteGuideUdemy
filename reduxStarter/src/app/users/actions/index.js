import {
  PROCESS_USER_FORM,
  FETCH_USER_LIST, REMOVE_USER, EDIT_USER
} from '../../../constants/actionTypes'

export const processUserForm = (formData) => ({
  type: PROCESS_USER_FORM,
  counterFormData: formData,
});

export const fetchUserList = () => ({
  type: FETCH_USER_LIST,
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId: userId,
});

export const editUser = (userId,fname,lname) => ({
  type: EDIT_USER,
  userId,
  fname,
  lname,
});
