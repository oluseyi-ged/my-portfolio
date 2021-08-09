import React from "react"
import "./SkillCard.css"

function SkillCard({ skillID, skill }) {
  return (
    <div className="skillCard">
      <div className="skillCard__body">
        <img src={skillID} alt="" />
        <h3>{skill}</h3>
      </div>
    </div>
  )
}

export default SkillCard
