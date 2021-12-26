import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../Reducers/rootReducers";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducers);

let store = createStore(
    persistedReducer,
    {},
    applyMiddleware(thunk)
);
let persistor = persistStore(store)

export {store, persistor};