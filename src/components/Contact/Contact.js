import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contanct-container">
      <h3>Contact</h3>
      <div className="contact-name-email">
        <label>
          Name*
          <input type="text" />
        </label>
        <label>
          Email*
          <input type="email" />
        </label>
      </div>
      <label >
        Title
        <input type="text" />
      </label>
      <label >
        Your Message
        <textarea type="text" id="contact-message"/>
      </label>
      <button>Post Comment</button>
    </div>
  );
}
