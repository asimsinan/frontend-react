import { configureStore } from "@reduxjs/toolkit";
import yazilarReducer from "./reducer";
const store=configureStore({reducer:yazilarReducer});
export default store;
