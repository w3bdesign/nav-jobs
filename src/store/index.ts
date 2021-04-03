// import { createStore, persist } from 'easy-peasy';
import { createStore } from 'easy-peasy';

import model from './model/index';

/* const store = createStore(
  persist({ model }),
); */

const store = createStore(model);

export default store;
