import React,{useState} from "react";
import { useNavigate,useParams } from "react-router-dom";

const EditContact = ({ editContacts,UpdateHandler }) => {
    const {id} = useParams();
    const data = editContacts.find((ch)=> ch.id === id);

  const [nameEdit, setName] = useState(data.name);
  const [phoneEdit,setPhone] = useState(data.phone)
  const [emailEdit, setEmail] = useState(data.email);
  const navigate = useNavigate();

  const edit = (e) => {
    e.preventDefault();
    if (nameEdit === "" || emailEdit === "" || phoneEdit ==="") {
      alert("All fields are mandatory");
      return;
    }
    UpdateHandler({ id:id,name:nameEdit, phone:phoneEdit, email:emailEdit });
    setName("");
    setPhone("");
    setEmail("");
    navigate("/");
  };
//   document.querySelector('#nameValue').value = {nameEdit}
//   document.querySelector('#emailValue').value = {emailEdit}

  return (
    <div className="ui main" style={{ marginTop: "50px" }}>
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={edit}>
        <div className="field">
          <label>Name:</label>
          <input id="nameValue"
            type="text"
            name="nameEdit"
            placeholder="Name"
            value={nameEdit}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone No:</label>
          <input
            type="number"
            name="phoneEdit"
            placeholder="Phone No .. "
            value={phoneEdit}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email:</label>
          <input id="emailValue"
            type="text"
            name="emailEdit"
            placeholder="Email"
            value={emailEdit}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Cancel</button>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
