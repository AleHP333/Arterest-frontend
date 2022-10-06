import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { contactUs } from "../../redux/actions/userActions";
import Footer from "../Footer/Footer";
import {useNavigate } from "react-router-dom";
//import { createContact } from '../../redux/actions'

import './ContactUs.css'

export default function ContactUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  })

  console.log(input)

  const [warning, setWarning] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      setWarning(false);
      setSuccess(false);
    
  };


  function validate(input) {

    let error = {}
    if (input.name.length >= 0 && !input.name.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
        error.name = 'Only letters and no spaces are allowed at the end!'
    } else error.name = null

    if (input.email.length >= 0 && !input.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        error.email = 'Write your email correctly!'
    } else error.email = null
  
    if (!input.subject) {
        error.subject = 'Must declare a subject!'
    } else error.subject = null
    

    if (input.message.length >= 0 && !input.message.match(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)) {
        error.message = 'Only letters and no spaces are allowed at the end!'
    } else error.message = null
    return error
}

function handleChange(e) {
  setInput({
      ...input,
      [e.target.name]: e.target.value
  })
  setError(validate({
      ...input,
      [e.target.name]: e.target.value
  }))
}

function handleSelect(e) {
  setInput({
      ...input,
      subject:  e.target.value
  })
  setError(validate({
      ...input,
      subject: e.target.value
  }))
}


  function handleSubmit(e) {
    e.preventDefault();
    if (error.name === null && error.email === null && error.subject === null &&
      error.message === null){
    dispatch(contactUs(input))
    setInput({
      subject: "",
      name: "",
      email: "",
      message: "",
    })
    setSuccess(true)
    navigate("/home")
  }else{
    setWarning(true)
  }
  }

  return (
    <div>
        
            <Snackbar elevation={6} autoHideDuration={1500} open={warning} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Fail</strong></AlertTitle>
                    <strong>Some fields may be wrong</strong>
                </Alert>
            </Snackbar>

    
    <div className="FormDiv">
      <h2>If you have any doubts, please let us know</h2>
      <form className="LogInForm" >
        <label className="FormLabel">Issue</label>
        <select className="FormInput" type="text" name="subject" value={input.subject} onChange={(e) => handleSelect(e)}
       > {error.subject && (
        <p>{error.subject}</p>)} 

          <option>Select one</option>
          <option value="product" defaultValue>Product</option>
          <option value="service" >Service</option>
          <option value="other">Other</option>
        </select>

        <input className="FormInput" value={input.name} onChange={(e) => handleChange(e)}
          type='text'
          placeholder="Your name"
          name="name"
          
        />{error.name && (
          <p>{error.name}</p>)}

        <input
          className="FormInput" value={input.email} onChange={(e) => handleChange(e)}
          type='email'
          placeholder="Your email"
          name="email"
    
        />{error.email && (
            <p>{error.email}</p>)}

        <label className="FormLabel">Message</label>
        <textarea className="FormInput FormTextArea" type="textarea" name="message" value={input.message} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>{error.name && (
            <p>{error.name}</p>)}
        <button className="SubmitBtn" type="submit" onClick={handleSubmit} > Send</button>
      </form>
      <Snackbar open={success} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={() => handleClose()} severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Send</AlertTitle>
          <strong>Your message was successfully sent</strong>
        </Alert>
      </Snackbar>

  
      </div>
      <Footer/>
      </div>
      
  )
}