import { combineReducers } from "redux";

import testReducer from "./reducers/testReducer";
import adminReducer from "./reducers/adminReducer";
import userSignReducer from "./reducers/userSignReducer";

const rootReducer = combineReducers({
    testReducer,
    adminReducer,
    userSignReducer
});

export default rootReducer