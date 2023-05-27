import React, { useState } from "react";
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
 const Create =()=>{
    const history = useNavigate();
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const handleSubmit =(e)=>{
e.preventDefault();
 axios.post("https://6471a2ab6a9370d5a41a7e71.mockapi.io/ops",{
firstName:firstName,
lastName:lastName
}).then(()=>{
    history("/Read");
})
setFirstName("");
setLastName('');

    }
    return(
    <div className="d-flex justify-content-center align-items-center">

    <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name"onChange={(e)=>setFirstName(e.target.value) }value={firstName} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last NAme</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
      </Form.Group>
     
      <Link to ='/Read'>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </Link>
    </Form>
        </div>
    )
 }
 export default Create;