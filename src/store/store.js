import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "../operationSlice/operationSlice";






const store = configureStore({

  reducer: {
    operation: operationSlice
  }

})


export default store