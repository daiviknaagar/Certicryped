import { combineReducers } from "redux";
import auth from './auth';
import universites from './universities'
import variables from "./variables";

export default combineReducers({ auth, universites,variables });