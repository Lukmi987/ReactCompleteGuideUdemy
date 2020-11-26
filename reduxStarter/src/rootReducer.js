import { combineReducers } from 'redux';

import counter from './app/counter/reducers/counter';
import counterForm from './app/counter/reducers/counterForm';

//define how the store is going to look like
const rootReducer = combineReducers({
  counter,
  counterForm
});

export default rootReducer;
