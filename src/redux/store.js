import { createStore,combineReducers } from "redux";

import { devToolsEnhancer } from 'redux-devtools-extension';
import contactFormReducer from './reducer'


const rootReducer = combineReducers({
    contacts : contactFormReducer,
})

const store = createStore(rootReducer,{contacts:[]},devToolsEnhancer());

export default store;