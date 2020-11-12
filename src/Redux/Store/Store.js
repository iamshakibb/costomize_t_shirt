import { combineReducers, createStore } from "redux";
import isEditor from "../Reducer/Editor";
const allReducers = combineReducers({
  Editor: isEditor,
});

// creating store
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
