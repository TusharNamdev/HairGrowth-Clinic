import { configureStore } from "@reduxjs/toolkit";
import registerApiReducer from "./slices/registerSlice";
import appointmentReducer from "./slices/appointmentSlice";

export const store = configureStore({
  reducer: {
    register: registerApiReducer,
    appointment: appointmentReducer,
  },
});
