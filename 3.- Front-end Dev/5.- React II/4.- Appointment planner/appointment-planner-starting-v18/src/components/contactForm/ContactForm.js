import React from "react";
import { Form } from "react-router-dom";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>  
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        type="text" 
        placeholder="Your Name"
      />
      <input 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        type="tel" 
        placeholder="Your Phone Number"
      />
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        placeholder="Your Email"
        
      />
      <input 
        value="Add Contact" 
        type="submit"
      />
    </form>
  );
};

