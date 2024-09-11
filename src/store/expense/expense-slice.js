import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 2000,
    expenseList: [],
  },
  reducers: {
    addExpense: (currentSlice, action) => {
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      });
      console.log("addExpense()", action);
    },
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload);
      console.log("addExpense()", action);
    },
  },
});

const { addExpense, setIncome } = expenseSlice.actions;

export { addExpense, setIncome };
