import { combineReducers } from 'redux';

import counter from './counter/reducers/counter';
import results from './counter/reducers/results';

//define how the store is going to look like
const rootReducer = combineReducers({
  counter,
  results
});

export default rootReducer;
