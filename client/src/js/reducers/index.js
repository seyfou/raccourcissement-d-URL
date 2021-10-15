import {combineReducers} from "redux";
import {userReducer} from "./user";

import {categoryReducer} from "./category"
import {reservationReducer} from "./reservation"
import {editResReducer} from "./editRes"
export const rootReducer = combineReducers({userReducer,categoryReducer,reservationReducer,editResReducer});