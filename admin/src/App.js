import React from "react"
import { Container } from "react-bootstrap"

import { AuthProvider } from "./contexts/AuthContext"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import PrivateRoute from "./components/routes/PrivateRoute"

import Signup from "./components/auth/Signup"
// import Login from "./components/auth/Login"
// import Dashboard from "./components/Dashboard"
// import ForgotPassword from "./components/auth/ForgotPassword"
// import UpdateProfile from "./components/profile/UpdateProfile"








function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" element={<Signup />}></Route>
              {/* <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} /> */}
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  )
}

export default App