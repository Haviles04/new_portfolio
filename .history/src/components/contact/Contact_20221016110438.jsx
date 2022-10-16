import React from 'react'
import './contact.css'
import { SlSocialGithub } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'

function Contact() {
  return (
    <div className="contact container">
      <h3>Get in touch!</h3>
      <h4><a href="https://github.com/Haviles04">Github <SlSocialGithub size={28}/></a></h4>
      <h4><a href="">Linked In <SlSocialLinkedin size={28} /></a></h4>
    </div>
  )
}

export default Contact