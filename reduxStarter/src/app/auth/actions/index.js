import {
  LOGIN_USER
} from '../../../constants/actionTypes'

export const processLoginForm = (user) => ({
  type: LOGIN_USER,
  user,
});





