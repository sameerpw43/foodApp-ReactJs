import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import Login from "./Login";
import Signup from "./Screens/Signup";


function App() {
  return (
   <>
<BrowserRouter>
<Navbar/>
<Routes>
  
  <Route path="/"  element={<Home />}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/createuser" element={<Signup/>}/>
</Routes>
</BrowserRouter>
  
   </>
  );
}

export default App;
