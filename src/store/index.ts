import { createStore, persist } from 'easy-peasy';

import model from './model/index';

const store = createStore(
  persist({ model }),
);

export default store;
