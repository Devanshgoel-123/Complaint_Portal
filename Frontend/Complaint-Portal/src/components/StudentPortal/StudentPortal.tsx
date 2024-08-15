import ComplaintForm from "../ComplaintForm/ComplaintForm";
import ComplaintStatus from "../ComplaintStatus/ComplaintStatus";
import ContactInfo from "../ContactInfo/ContactInfo";

function StudentPortal() {
  return (
    <>
      <ComplaintForm />
      <ComplaintStatus />
      <ContactInfo />
    </>
  );
}

export default StudentPortal;
