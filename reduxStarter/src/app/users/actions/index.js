import {
  PROCESS_USER_FORM,
  FETCH_USER_LIST
} from '../../../constants/actionTypes'

export const processUserForm = (formData) => ({
  type: PROCESS_USER_FORM,
  counterFormData: formData,
});

export const fetchUserList = () => ({
  type: FETCH_USER_LIST,
});


