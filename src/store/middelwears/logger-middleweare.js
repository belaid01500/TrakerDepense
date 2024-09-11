import { createListenerMiddleware } from "@reduxjs/toolkit";

export const loggerMiddleweare = createListenerMiddleware();

loggerMiddleweare.startListening({
  predicate: (action) => {
    return true;
  },
  effect: async (action) => {
    console.log(action);
  },
});
