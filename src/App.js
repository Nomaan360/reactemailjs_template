import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    //////////e.preventDefault();,.

    emailjs
     .sendForm('service_6nhab6h', 'template_sh4ar5p', form.current, {
        publicKey: '_pLVRiXnKQzxs5o8r',
      })
     .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="number" name="user_number" />
      <label>Message</label>
      <textarea name="message" />
      <label>Experience</label>
      <input type="number" name="user_Experience" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default App;
// service_c2zao7n