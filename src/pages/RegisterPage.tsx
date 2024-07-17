import React from 'react';
import { useState } from 'react';
// import { RegisterApi } from '../services/Api';
// import { isAuthenticated } from '../services/Auth';
// import { storeUserData } from '../services/Storage';
import './RegisterPage.css';
import { RegisterApi } from '../services/Api';
import { storeUserData } from '../services/Storage';
import { isAuthenticated } from '../services/Auth';
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import NavBar from '../components/NavbarLog';
import NavbarLog from '../components/NavbarLog';
// import { error } from 'console';

// import NavBar from '../components/NavBar';

export default function RegisterPage() {
     const initialStateErrors = {
        email:{required:false},
        password:{required:false},
        name:{required:false},
        custom_error: null as string | null,
     }

      const [errors,setErrors] = useState(initialStateErrors);  //for error msg , by default it is false, if any error occurs
           //it will become true and print error msg

      const [loading,setLoading]=useState(false);

      const handleSubmit = (event:any) => {
          event.preventDefault();
          let errors = initialStateErrors;
          let hashError = false;  //for api request
          if(inputs.name == ""){
            errors.name.required=true;
            hashError=true;
          }
          if(inputs.email == ""){
            errors.email.required=true;
            hashError=true;
          }
          if(inputs.password == ""){
            errors.password.required=true;
            hashError=true;
          }

          if(hashError!=true){ //if it is false, it ll send api request
            //sending register api request
            setLoading(true);

            RegisterApi(inputs).then((response)=>{
                storeUserData(response.data.idToken); //user value will be accepted and redirect to dashboard
            }).catch((err : any)=>{ //error handling nd we can also add more error msg with respect to error
                if(err.response.data.error.message=="EMAIL_EXISTS"){
                    setErrors({...errors,custom_error:"Already this email has been registered"})
                }
                else if(String(err.response.data.error.message).includes('WEAK_PASSWORD')){
                    setErrors({...errors,custom_error:"Password should be at least 6 characters"})
                }
            }).finally(()=> {
             setLoading(false);
            })
          }

          setErrors({...errors});
  
      } //event.preventDefault(); to stop the browser loading or refreshing but the reg form will be submitted
        //if it is empty it will become true and print error msg

      const[inputs,setInputs] =useState({
        email:"",
        password:"",
        name:""
      }) //onChange - whenever we type value or name or email or pass

      const handleInput = (event:any) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
      } //... spread operator and it will take r accept the value

      if(isAuthenticated()){ //true r false
       //redirect user to dashboard
       return <Navigate to="/dashboard" />
    }

    return (
        <div>
            <NavbarLog />
        <section className="register-block">
            <div className="container">
                <div className="row ">
                    <div className="col register-sec">
                        <h2 className="text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit} className="register-form" action="" >
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>

                                <input type="text" className="form-control" onChange={handleInput} name="name" id="" /> 
                               {errors.name.required==true ?
                               (<span className="text-danger" >
                                        Name is required.
                                    </span>) : null
                                 }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>

                                <input type="text" className="form-control" onChange={handleInput} name="email" id="" />
                                { errors.email.required == true ?
                                    (<span className="text-danger" >
                                        Email is required.
                                    </span>) : null
                                  }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                <input className="form-control" type="password" onChange={handleInput} name="password" id="" />
                                {errors.password.required == true ?
                                    (<span className="text-danger" >
                                        Password is required.
                                    </span>) : null
                                }
                            </div>
                            <div className="form-group">

                                <span className="text-danger" >
                                    {errors.custom_error ?
                                        (<p>{errors.custom_error}</p>)
                                        : null
                                    }
                                </span>
                                { loading == true ?
                                    (<div className="text-center">
                                        <div className="spinner-border text-primary " role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>) : null
                                 }

                                <input type="submit" className="btn btn-login float-right" disabled={loading} value="Sign Up" />
                                {/* disabled={loading} if true, loading will be disabled */}
                            </div> 
                            <div className="clearfix"></div>
                            <div className="form-group">
                                Already have account ? Please <Link to="/login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
        
    )
}