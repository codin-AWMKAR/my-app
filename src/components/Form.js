import "./FormStyles.css";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || email === '') {
      alert('Please fill in all required fields.');
    } else {
      emailjs.sendForm("service_hskhe89", 'template_qm5bgd9', event.target, 'IHqTQx0gg1NanFN8c')
        .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        })
        .catch((error) => {
          console.error('Email failed to send:', error);
          alert('Email failed to send.');
        });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="Type your message here" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
