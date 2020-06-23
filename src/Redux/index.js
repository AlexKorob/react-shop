import { createStore, applyMiddleware } from "redux";
import { appReducer } from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import Middleware from 'Redux/Middleware/api';


export const storeCreator = () => {
  const middleware = composeWithDevTools(applyMiddleware(Middleware));
  const store = createStore(appReducer, middleware);
  return store;
}
