import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    autoRehydrate()
  )
);

persistStore(store, { storage: AsyncStorage, whitelist: ['gratitudes'] }).purge();
//persistStore(store, { storage: AsyncStorage, whitelist: ['gratitudes'] });

export default store;
