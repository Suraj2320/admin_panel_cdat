import React from "react";
import {Routes, Route} from "react-router-dom"
import  Admin  from "../Pages/Admin";
import Sidebar from './Sidebar'

import Login from './Login'
import Panel from './Panel'
import Registration from "./Registration";





const AllRoutes = () => {

  return (
    <Routes>      
      <Route path="/" element={<Login />}></Route>
      <Route path="/panel" element={<Panel />}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>     
      {/* <Route path="/registration" element={<Registration />}></Route> */}
            
    </Routes>
  )
};

export default AllRoutes;