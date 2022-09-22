import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import NewRequest from "./components/NewRequest/NewRequest";
import SignIn from "./components/SignIn/SignIn";
import NewUserDashboard from "./components/NewUserDashboard/NewUserDashboard";
import SubmittedRequest from "./components/SubmittedRequest/SubmittedRequest";

function App() {
  const [bg, setBg] = useState(localStorage.getItem("bg-state") === "true");

  React.useEffect(() => {
    localStorage.setItem("bg-state", bg);
  }, [bg]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<SignIn setBg={setBg} />} />
          <Route
            exact
            path="/userdashboard"
            element={<UserDashboard setBg={setBg} />}
          />
          <Route
            exact
            path="/newrequest"
            element={<NewRequest setBg={setBg} />}
          />
          <Route
            exact
            path="/newuserdashboard"
            element={<NewUserDashboard setBg={setBg} />}
          />
          <Route
            exact
            path="/submittedrequest"
            element={<SubmittedRequest setBg={setBg} />}
          />
        </Routes>
      </div>
      <div className="bg" data-show={bg} />
    </>
  );
}

export default App;
