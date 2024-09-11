import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loggerMiddleweare } from "./middelwears/logger-middleweare";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteliste: ["EXPENSE"],
};
const rootReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleweare.middleware),
});

const persistor = persistStore(store);
export { store, persistor };
