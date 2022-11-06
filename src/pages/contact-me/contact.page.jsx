import React, { useEffect } from "react";
// import { Button } from "../../components/styled.components/button/button.component";
import { Header } from '../../components/header/header.component'
import { ContactOption } from '../../components/contact/contact-options/contact-options.component'
import { ContactForm } from '../../components/contact/contact-form/contact-form.component'
import './contact.styles.scss'

export const ContactMe = () => {

  useEffect(() => {
    document.title = 'Contact Rahul Nikam'
  }, []);

  return (
    <div className='contact_page'>
      <Header />
      <ContactOption />
      <ContactForm />
    </div>
  );
};



