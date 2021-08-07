import React from "react"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__header">
        These are the lists of my ongoing and completed projects over the years
      </h1>
      <ProjectCard
        language="React JS"
        brand="Omney"
        client="FCMB"
        link="ongoing"
      />
      <ProjectCard
        language="HTML, CSS, JS"
        brand="MarketHub"
        client="Vodacom"
        link="ongoing"
      />

      <ProjectCard
        language="React JS"
        brand="RIDIMA"
        client=""
        link="ongoing"
      />
    </div>
  )
}

export default Projects
