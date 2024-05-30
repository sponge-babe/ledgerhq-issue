import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createAction } from "@reduxjs/toolkit";

import app from "./app";

const persistConfig = {
  version: 1,
  key: "mesh-uli-ts",
  storage,
  whitelist: ["app"],
  // migrate: createMigrate({
  //   1: (state: any) => ({
  //     ...state,
  //   }),
  // }),
};

export const logout = createAction("USER_LOGOUT");

const reducers = combineReducers({
  app,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "USER_LOGOUT") {
    localStorage.removeItem("persist:mesh-staking-ts");
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
