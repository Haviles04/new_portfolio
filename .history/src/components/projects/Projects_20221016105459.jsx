import React from 'react'
import './projects.css'
import Rating from '../../assets/rating.png'
import TipCalc from '../../assets/tipcalc.png'

function Projects() {
  return (
    <div className="projects container">
      <h3>Projects</h3>
      <h4>Projects built from FrontendMentor.io</h4>
      <div className='projectImgContainer'>
      <a href="https://haviles04.github.io/interactive-rating-component-main/"><img alt="rating component" src={Rating}/></a>
      <a href="https://haviles04.github.io/Tip-Calculator/"><img  alt="tip calculator"  src={TipCalc}/></a>
      </div>
    </div>
  )
}

export default Projects