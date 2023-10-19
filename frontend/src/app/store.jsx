import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import loginReducer from './login/loginAction'
import userlistReducer from './userlist/userlistSlice'
import editSliceReducer from "./edit/editSlice";
import userhomeSliceReducer from "./userHome/userhomeSlice";


const store = configureStore({
    reducer:{
        user : userReducer,
        login : loginReducer,
        userlist : userlistReducer,
        edit : editSliceReducer,
        userhome : userhomeSliceReducer,
    }
})

export default store