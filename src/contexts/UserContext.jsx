import { createContext, useEffect, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import instance from "../axios";

export const UserContext = createContext();

const UserContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(userReducer, {users : []});
    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await instance.get("/users");
                dispatch({type : "SET_USERS", payload: data});
            }catch(error){
                console.log(error);
            }
        })();
    }, []);

    return <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider;