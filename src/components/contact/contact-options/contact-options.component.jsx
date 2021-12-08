import React, { useEffect } from  'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import './contact-options.style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'

export const ContactOption = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return(
        <div className='contact_option'>
            <div data-aos="fade-up" className="contact_option_single_block">
                <LocationOnIcon className='location contact_option_icon'/>
                <p>Pune, Maharashtra</p>
            </div>

            <div data-aos="fade-up" className="contact_option_single_block">
            <a href='tel:8767213959'>
                <CallIcon className='phone_call contact_option_icon'/>
                <p>Call me</p>
            </a>
            </div>

            <div data-aos="fade-up" className="contact_option_single_block">
            <a href='mailto:codewithrahulnikam@gmail.com'>
                <EmailIcon className=' mail_me contact_option_icon'/>
                <p>Mail me</p>
            </a>
            </div>
            
            <div data-aos="fade-up" className="contact_option_single_block">
            <a href='https://wa.me/+919767948152/?text=Hey+Rahul!!'>
                <WhatsAppIcon className=' whatsapp_me contact_option_icon'/>
                <p>WhatsApp me</p>
            </a>
            </div>
        </div>
    )
}