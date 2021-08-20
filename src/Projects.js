import React from "react"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__header">
        This is a list of my ongoing and completed projects over the years
      </h1>
      <ProjectCard
        language="React JS"
        brand="Omney"
        client="FCMB"
        status="completed"
      />
      <ProjectCard
        language="React Native"
        brand="Flippay"
        client=""
        link="https://play.google.com/store/apps/details?id=com.paynyce.flippay"
      />

      <ProjectCard
        language="Nuxt.js"
        brand="Easyship"
        client=""
        link="easyship.com"
      />

      <ProjectCard
        language="HTML, CSS, JS"
        brand="MarketHub"
        client="Vodacom"
      />
      <ProjectCard
        language="React Native"
        brand="Pawa2u"
        client="RMH Limited"
        link="https://play.google.com/store/apps/details?id=com.soardigital.pawa2user"
      />
      <ProjectCard
        language="React JS"
        brand="RIDIMA"
        client=""
        status="halted"
      />
      <ProjectCard
        language="React Native"
        brand="Standard Life EMS"
        link="https://play.google.com/store/apps/details?id=com.itskillscenter.slo"
      />

      <ProjectCard
        language="Wordpress"
        brand="Chownow"
        client=""
        link="get.chownow.com"
      />
    </div>
  )
}

export default Projects
