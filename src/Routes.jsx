import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import UserProfile from "./pages/UserProfile/UserProfile";
import Navbar from "./components/Navbar/Navbar";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={""} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
