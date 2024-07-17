//In the inputs , we have all name,email,pass
import axios from "axios";
import { getUserData } from "./Storage";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyDXxf0224nki_WfVAe_Axw6qP5mgKsDjPI"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL= `accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;

export const RegisterApi = (inputs : any) => {
    let data = {displayName:inputs.name,email:inputs.email,password:inputs.password}
    return axios.post(REGISTER_URL,data) //post request
};

export const LoginApi = (inputs : any) => {
    let data = {email:inputs.email,password:inputs.password}
    return axios.post(LOGIN_URL,data) //post request
};

// export const UserDetailsApi = () => {
//     let data = {idToken : getUserData}
//     return axios.post(USER_DETAILS_URL,data) //post request   
// }

export const UserDetailsApi = () => {
    const idToken = getUserData();
    let data = { idToken };
    return axios.post(USER_DETAILS_URL, data);
}
