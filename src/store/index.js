import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./modules/rootReducer";
import thunk from 'redux-thunk';


const tron = process.env.NODE_ENV === 'development' ? console['tron'].createEnhancer() : null
const enhancers = [tron];
const store = createStore(rootReducer,  compose(applyMiddleware(thunk), ...enhancers));

export default store;
