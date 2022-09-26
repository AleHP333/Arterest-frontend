import { combineReducers } from "redux";

import testReducer from "./reducers/testReducer";
import adminReducer from "./reducers/adminReducer";
import userSignReducer from "./reducers/userSignReducer";
import userReducerPay from "./reducers/userReducerPay";
import CartReducer from "./reducers/CartReducer";

const rootReducer = combineReducers({
    testReducer,
    adminReducer,
    userSignReducer,
    userReducerPay,
    CartReducer


});

export default rootReducer