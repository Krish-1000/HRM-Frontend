import { useEffect, useState } from "react"
import { UserDetailsApi } from "../services/Api"
import NavBar from "../components/NavbarLog"
import { isAuthenticated, logout } from "../services/Auth"
import { Navigate, useNavigate } from "react-router-dom"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "../scenes/global/Topbar"
import Dashboard from "../scenes/dashboard"
// import Home from "./scenes/global/Home";
import About from "../scenes/global/About"
// import Navbar from "../scenes/global/Sidebar"
import NavbarLog from "../components/NavbarLog"
import Sidebar1 from "../scenes/global/Sidebar"
import Calendar from "../scenes/global/View"

export default function DashboardPage(){

    const navigate = useNavigate();

    const [ShowNav, setShowNav] = useState(false);
    

    
    const logoutUser = () => {
        logout();
        navigate('/login')
    }

  //   if(!isAuthenticated()){ //if false
  //     //redirect user to login
  //     return <Navigate to="/login" />
  //  }

    return(
      <div className="app">
       <Sidebar1 />

    {/* <Navbar show={ShowNav} /> */}
    <main className="content"   >
    {/* <NavbarLog /> */}

    {/* <Navbar show={ShowNav} /> */}
    
        <Topbar />
        
    <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Calendar />} />
        </Routes>
      </main>
    </div>
  
    )
}


{/* <NavBar logoutUser={logoutUser}/> */}
    {/* <main role="main" className="container mt-5">
        <div className="container">
          <div className="text-center mt-5">
            <h3>Dashboard page</h3>
            { user.name && user.email && user.localId ?
            (<div>
              <p className="text-bold " >Hi {user.name}, your Firebase ID is {user.localId}</p>
              <p>Your emaill is {user.email}</p>
            </div>)
            : <p>Loading...</p>
            }
          </div>
        </div>
    </main> */}

        // const [user,setUser] = useState({name:"",email:"",localId:""})

    // useEffect(()=>{
    //   if(isAuthenticated()){ //if the user enter the details and authenticated it ll call user api and api request will send
    //     UserDetailsApi().then((response)=>{
    //     console.log(response);
    //     setUser({
    //         name:response.data.users[0].displayName,
    //         email:response.data.users[0].email,
    //         localId:response.data.users[0].localId
    //     })
    //   })
    // }
    // },[])