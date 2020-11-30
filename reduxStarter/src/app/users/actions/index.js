import {
  PROCESS_USER_FORM,
  FETCH_USER_LIST,
  REMOVE_USER,
  EDIT_USER,
  SET_SELECTED_USER
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

export const editUser = (user) => ({
  type: EDIT_USER,
  user,
});

export const setSelectedUser = (user) => ({
  type: SET_SELECTED_USER,
  user,
});





