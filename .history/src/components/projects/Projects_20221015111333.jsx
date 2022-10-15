import React from 'react'
import './projects.css'
import Rating from '../../assets/rating.png'
import TipCalc from '../../assets/tipcalc.png'

function Projects() {
  return (
    <div className="projects">
      <h3>Projects</h3>
      <h4>Projects built from FrontendMentio.io</h4>
      <a href="https://haviles04.github.io/interactive-rating-component-main/"><img src={Rating}/></a>
      <a href="https://haviles04.github.io/Tip-Calculator/"><img src={TipCalc}/></a>
    </div>
  )
}

export default Projects