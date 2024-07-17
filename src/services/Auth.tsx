import { getUserData, removeUserData } from "./Storage"


export const isAuthenticated = ()=>{
    return getUserData()!= null?true:false;
} //if its value is null the user is not registered and it will return false 
 // if its value is not null , it will return true 

 export const logout = () => {
    removeUserData();
 }