import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignUp } from "./pages/Signup"
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
