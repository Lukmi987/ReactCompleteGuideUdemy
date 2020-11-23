import {CHANGE_COUNTER} from '../../constants/actionTypes'

export const changeCounter = (operationType) => ({
  type: CHANGE_COUNTER,
  operationType: operationType,
});
