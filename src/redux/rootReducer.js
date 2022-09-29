import { combineReducers } from "redux";

import testReducer from "./reducers/testReducer";
import adminReducer from "./reducers/adminReducer";
import userSignReducer from "./reducers/userSignReducer";
import userReducerPay from "./reducers/userReducerPay";
import CartReducer from "./reducers/CartReducer";
import interactionsReducer from "./reducers/InteractionsReducer";

const rootReducer = combineReducers({
    testReducer,
    adminReducer,
    userSignReducer,
    userReducerPay,
    CartReducer,
    interactionsReducer


});

export default rootReducer