import React from 'react'
import './contact.css'
import { SlSocialGithub } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'

function Contact() {
  return (
    <div className="contact container">
      <h3>Get in touch!</h3>
      <h4>Github <SlSocialGithub /></h4>
      <h4>Linked In <SlSocialLinkedin /></h4>
    </div>
  )
}

export default Contact