import {CHANGE_COUNTER, SET_COUNTER_FORM, TEST_EFFECT} from '../../../constants/actionTypes'

export const changeCounter = (operationType) => ({
  type: CHANGE_COUNTER,
  operationType: operationType,
});

export const testEffect = () => ({
  type: TEST_EFFECT,
});

export const saveCounterForm = (formData) => ({
  type: SET_COUNTER_FORM,
  counterFormData: formData,
});

