import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ComplaintForm from "./components/ComplaintForm/ComplaintForm";
import ComplaintStatus from "./components/ComplaintStatus/ComplaintStatus";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <ComplaintForm />
      <ComplaintStatus />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default App;
