import { combineReducers } from "redux";

import testReducer from "./reducers/testReducer";
import adminReducer from "./reducers/adminReducer";

const rootReducer = combineReducers({
    testReducer,
    adminReducer
});

export default rootReducer