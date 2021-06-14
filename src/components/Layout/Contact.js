import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row">
          <h1>Contact Us</h1>
          <h3>We'd love to hear from you!</h3>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" required />
        </div>
          <button type="submit"id="button">{status}</button>
      </div>
    </form>
  );
};

export default Contact;
