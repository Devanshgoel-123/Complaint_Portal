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
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main">
          <Routes>
            <Route path="/student" element={<StudentPortal />} />
            <Route path="/worker" element={<WorkerPortal />} />
            {/* Redirect to Vercel's 404 page */}
            <Route
              path="*"
              element={<Navigate to="https://vercel.com/404" />}
            />
          </Routes>
        </main>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
