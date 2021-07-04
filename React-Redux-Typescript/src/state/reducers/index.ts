import { combineReducers } from "redux";
import bankReducer from "../reducers/bankReducers"

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers
