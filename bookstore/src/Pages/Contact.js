import React, { useState } from 'react';

function ContactUs() {
  // Define state variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    // TODO: Send the form data to a backend API or service
    console.log('Form submitted:', { name, email, message });
    // Clear the form inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
