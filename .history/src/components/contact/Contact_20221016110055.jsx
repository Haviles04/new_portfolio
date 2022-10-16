import React from 'react'
import './contact.css'
import { SlSocialGithub } from 'react-icons/sl'
import { SLSocialLinkedin } from 'react-icons/sl'

function Contact() {
  return (
    <div className="contact container">
      <h3>Get in touch!</h3>
      <h4>Github <SlSocialGithub /></h4>
      <h4>Linked In <SLSocialLinkedin /></h4>
    </div>
  )
}

export default Contact