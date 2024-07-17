export const storeUserData = (data : any) => {
    localStorage.setItem('idToken',data)
} //localStorage - builtin js object

//Resolvers are functions (getUserData) that handle the fetching of data for the schema's fields. 
//They determine how the API should respond to a query.

//Each field in the schema is mapped to a resolver function

export const getUserData = ()=>{
    return localStorage.getItem('idToken');
} //it will return idToken-> data

export const removeUserData =() => {
    localStorage.removeItem('idToken');
} //to remove token for again redirecting logi/reg page