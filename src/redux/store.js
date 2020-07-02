import React from "react";
import {createStore} from "redux";
import {rootReducer} from "./rootReducer";

const store = createStore(rootReducer, {records:[]});
export default store;