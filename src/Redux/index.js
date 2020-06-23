import { createStore, applyMiddleware } from "redux";
import { appReducer } from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import Middleware from 'Redux/Middleware/api';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

export const storeCreator = () => {
  const middleware = composeWithDevTools(applyMiddleware(Middleware));
  const persistedReducer = persistReducer(persistConfig, appReducer)
  const store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store)
  return [ store, persistor ];
}
