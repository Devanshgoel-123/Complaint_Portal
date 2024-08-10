import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";
import ComplaintStatus from "./components/ComplaintStatus/ComplaintStatus";
function App() {
  return (
    <>
      <NavBar />
      <ComplaintForm />
      <ComplaintStatus />
    </>
  );
}

export default App;
