import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  employee: [],
};

export const addEmployeeAction = createAction("employee/add");

export default createReducer(initialState, (builder) => {
  builder.addCase(addEmployeeAction, (state, action) => {
    state.employee = [...state.employee, action.payload];
    return;
  });
});
