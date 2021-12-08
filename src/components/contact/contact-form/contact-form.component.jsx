import React, { useState, useRef, useEffect } from "react";
import "./contact-form.styles.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Button } from "../../styled.components/button/button.component";
import emailJs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css'

export const ContactForm = () => {
    const [sendMsg, setSendMsg] = useState('Send Message')

    const form = useRef();
    console.log(form)

    const sendEmail = (e) => {
        e.preventDefault();



        setSendMsg('Sending...')

        emailJs.sendForm('service_4cbdad4', 'template_2s2o9zn', form.current, 'user_RjKvBsi3aSCag2K2eOH2w')
        .then((result) => {
            setSendMsg('Message Sent!')
        }, (error) => {
            console.log(error.text);
        });
    }

    useEffect(() => {
      AOS.init({
          duration: 1000
      })
  }, [])

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div data-aos="fade-up" className="contact_form_section">
        <div className="contact_form">
          <p className="form_title">Contact Me</p>
          <div className="form">
            <div className="left_form">
              <div data-aos="fade-up" className="user_name input_section">
                <p>Name</p>
                <input required name='from_name' type="text" placeholder="Name" />
                <PersonIcon className="form_icon" />
              </div>

              <div data-aos="fade-up" className="user_email input_section">
                <p>Email</p>
                <input required name='user_email' type="email" placeholder="Email" />
                <EmailIcon className="form_icon" />
              </div>

              <div data-aos="fade-up" className="user_number input_section">
                <p>Phone Number</p>
                <input required type="text" name='user_phone' placeholder="Phone Number" />
                <PhoneIphoneIcon className="form_icon" />
              </div>
            </div>

            <div data-aos="fade-up" className="right_form">
              <p>Your Message</p>
              <textarea
                name="user_message"
                id=""
                cols="5"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <p data-aos="fade-up" className='contact_reason'>Why do you want to contact me?</p>
          <div data-aos="fade-up" className="contacted_for">
              <div className='reason_block'>
                  <input required type='text' name='contact_reason' placeholder='Hire me, project work, Personal, bug in website, or different' />
              </div>
          </div>
        </div>
        <Button stype="submit">{sendMsg}</Button>
      </div>
    </form>
  );
};
