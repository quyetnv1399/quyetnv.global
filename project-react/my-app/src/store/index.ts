import { accountReducer } from "./account/reducer";
import { configureStore } from "@reduxjs/toolkit";


export default function configureAppStore() {
    const store = configureStore({
        // Automatically calls `combineReducers`
        reducer: {
            account: accountReducer
        }
      })

    return store
}
