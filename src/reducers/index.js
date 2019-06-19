import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import uiReducer from './uiReducer';
import browseReducer from './browseReducer';


export default combineReducers({
    tokenReducer,
    uiReducer,
    browseReducer
});