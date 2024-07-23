import { useState } from 'react';
import React,{Component} from 'react';
import './LoginPage.css';
// import { LoginApi } from '../services/Api';
import { storeUserData } from '../services/Storage';
import { isAuthenticated } from '../services/Auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import NavBar from '../components/NavbarLog';
import request, { gql } from 'graphql-request';
import BASEURL from '../URLs/BaseURL';
import NavbarLog from '../components/NavbarLog';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
      user {
        id
        username
        firstName
        lastName
        isActive
      }
    }
  }
`
export default function LoginPage() {
    const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        custom_error: null as string | null,
     }

      const [errors,setErrors] = useState(initialStateErrors);
      
      const [loading,setLoading] = useState(false);

      const location:any = useLocation();

      const navigate = useNavigate();

      const[inputs,setInputs] =useState({
        email:"",
        password:"",
      })

      const handleInput = (event:any) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
      }

      const handleSubmit = (event:any) => {
        console.log(inputs);
        event.preventDefault();
        let errors = initialStateErrors;
        let hashError = false;  //for api request
        
        if(inputs.email == ""){
          errors.email.required=true;
          hashError=true;
        }
        if(inputs.password == ""){
          errors.password.required=true;
          hashError=true;
        }

        if(inputs.email !== "" && inputs.password !== ""){
          try {
            request(BASEURL, LOGIN, {  
              email: inputs.email,
              password: inputs.password,
            }).then((response: any) => {
              console.log("response-------->",response);
              if(response.tokenAuth.success){
                console.log("hello");
                // return <Navigate to="/dashboard" />
                localStorage.setItem('vividobotsHRM', JSON.stringify(response));
                // location.push('/dashboard');
                navigate('/dashboard');
                
                
              }else{
                localStorage.setItem('vividobotsHRM',"undefined");
               
                setLoading(false)
              }
             
    
            }).catch ((error)=> {
              console.error(error);
              localStorage.setItem('vividobotsDetails',"undefined");
            
              setLoading(false)
            })
          } catch (error) {
            console.error(error)
           
            setLoading(false)
          }

        setErrors({...errors});
        }
     

    }
    
    // if(isAuthenticated()){ //true r false
    //     //redirect user to dashboard
    //     return <Navigate to="/dashboard" />
    //  }

    return(
        <div>
         <NavbarLog />
        <section className="login-block">
        <div className="container">
            <div className="row ">
                <div className="col login-sec">
                    <h2 className="text-center">Login Now</h2>
                    <form onSubmit={handleSubmit} className="login-form" action="">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                        <input type="email"  className="form-control" onChange={handleInput} name="email"  id="" placeholder="email" value={inputs.email} />
                        { errors.email.required == true ?
                                    (<span className="text-danger" >
                                        Email is required.
                                    </span>) : null
                                  }
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password" onChange={handleInput}  name="password" placeholder="password" id="" value={inputs.password} />
                        {errors.password.required == true ?
                                    (<span className="text-danger" >
                                        Password is required.
                                    </span>) : null
                                }
                    </div>
                    <div className="form-group">
                    { loading == true ?
                        (<div className="text-center">
                        <div className="spinner-border text-primary " role="status">
                        <span className="sr-only">Loading...</span>
                        </div>
                        </div>) : null
                        }
                        <span className="text-danger" >
                        {errors.custom_error ?
                            (<p>{errors.custom_error}</p>)
                            : null
                        }
                        </span>
                        <input  type="submit" className="btn btn-login float-right" disabled={loading}  value="Login" />
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                    Create new account ? Please <Link  to="/register">Sign up</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </div>
        
    )
}