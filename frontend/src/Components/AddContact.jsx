import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContacts }) => {
  const [name, setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("All fields are mandatory");
      return;
    }
    addContacts({ name,phone, email });
    setName("");
    setPhone("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main" style={{ marginTop: "50px" }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone No:</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone No .. "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
