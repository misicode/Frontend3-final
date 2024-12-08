import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim().length < 5) {
      setError("Please verify your information again. The name must be more than 5 characters");
      setSuccess(false);
    } else if(!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Please verify your information again. The email must be in a valid format");
      setSuccess(false);
    } else if(message.trim().length < 5) {
      setError("Please verify your information again. The message must be more than 5 characters");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
    }
  };

  return (
    <div className="form-content">
      {error && <div className="error">{ error }</div>}
      {success && <div className="success">Thank you {name}, we will contact you as soon as possible via email</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>
            Name:
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        <div className="form-item">
          <label>
            Email:
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="form-item">
          <label>
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="3"
            onChange={ (e) => setMessage(e.target.value) }
          />
        </div>
        <button className="btn-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
