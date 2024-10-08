import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/reducers";

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
