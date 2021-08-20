import React from "react"
import "./ProjectCard.css"

function ProjectCard({ language, brand, client, link, status }) {
  return (
    <div className="projectPad">
      <a href={link} className="projectLink">
        <div className="projectCard">
          <h4>{language}</h4>
          <h2>
            <span>{brand}</span>
            {client}
          </h2>
          <p>{status}</p>
          <p>{link}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
