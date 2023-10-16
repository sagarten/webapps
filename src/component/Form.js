import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateMobile = () => {
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
      setMobileError("Please enter a valid 10-digit mobile number");
    } else {
      setMobileError("");
    }
  };

  return (
    <div className="form-container">
      <div className="contact-inputs">
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
          />
        </div>
        <button className="contact-button">Contact Me</button>
      </div>
      {emailError && <p className="error">{emailError}</p>}
      {mobileError && <p className="error">{mobileError}</p>}
    </div>
  );
}

export default Form;
