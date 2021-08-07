import React from "react"
import "./ProjectCard.css"

function ProjectCard({ language, brand, client, link }) {
  return (
    <div className="projectCard">
      <h4>{language}</h4>
      <h2>
        <span>{brand}</span>
        {client}
      </h2>
      <p>{link}</p>
    </div>
  )
}

export default ProjectCard
