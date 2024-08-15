import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import StudentPortal from "./components/StudentPortal/StudentPortal";
import WorkerPortal from "./components/WorkerPortal/WorkerPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/student" element={<StudentPortal />} />
            <Route path="/worker" element={<WorkerPortal />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
