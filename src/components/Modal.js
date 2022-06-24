import axios from "axios";
import { useState } from "react";
import "./Modal.css";

function Modal(props) {
  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [phone,setPhone] = useState("");
  let [city,setCity] = useState("");
 
  if (!props.show) {
    return null;
  }
  const handleInput = event => {
    setName(event.target.value);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{props.title}</h3>
        </div>
        <div className="modal-body">
          <label for="name">name:</label>
          <input type="text" id="name" name="name" onChange={handleInput}/>
          <br />
          <label for="mail">Email:</label>
          <input type="text" id="mail" name="mail" />
          <br />
          <label for="phone">Phone number</label>
          <input type="tel" id="phone" name="phone" />
          <br />
          <label for="city">City</label>
          <input type="text" id="city" name="city" />
          <br />
        </div>
        <button className="btn btn-primary" onClick={()=>{
            setName()
            axios.post("https://jsonplaceholder.typicode.com",{})
        }}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Modal;
