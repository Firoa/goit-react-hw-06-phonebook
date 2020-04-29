import { createStore,combineReducers } from "redux";

import { devToolsEnhancer } from 'redux-devtools-extension';
import * as Reducers from './reducer'


const rootReducer = combineReducers({
    contacts : Reducers.contactFormReducer,
    filter: Reducers.filterReducer
})

const store = createStore(rootReducer,{contacts:[]},devToolsEnhancer());

export default store;