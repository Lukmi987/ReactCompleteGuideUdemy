import {CHANGE_COUNTER, TEST_EFFECT} from '../../../constants/actionTypes'

export const changeCounter = (operationType) => ({
  type: CHANGE_COUNTER,
  operationType: operationType,
});

export const testEffect = () => ({
  type: TEST_EFFECT,
});
