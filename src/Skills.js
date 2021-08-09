import React from "react"
import "./Skills.css"
import SkillCard from "./SkillCard"

function Skills() {
  return (
    <div className="skills">
      <SkillCard
        skillID="https://cdn.svgporn.com/logos/react.svg"
        skill="React.JS"
      />
      <SkillCard
        skillID="https://cdn.svgporn.com/logos/css-3.svg"
        skill="SCSS, CSS"
      />
      <SkillCard
        skillID="https://cdn.svgporn.com/logos/git-icon.svg"
        skill="Version Control - Git, SVN"
      />
      <SkillCard
        skillID="https://cdn.svgporn.com/logos/material-ui.svg"
        skill="Material UI / Bootstrap"
      />
      <SkillCard
        skillID="https://cdn.svgporn.com/logos/redux.svg"
        skill="Context API, Redux"
      />
      <SkillCard
        skillID="https://img.icons8.com/color-glass/400/000000/web-design.png"
        skill="Responsive and Mobile Design"
      />
      <SkillCard
        skillID="https://cdn.svgporn.com/logos/cross-browser-testing.svg"
        skill="Cross-Browser Development"
      />
      <SkillCard
        skillID="https://img.icons8.com/office/400/000000/bug.png"
        skill="Testing and Debugging"
      />

      <SkillCard
        skillID="https://cdn.svgporn.com/logos/firebase.svg"
        skill="Firebase"
      />
    </div>
  )
}

export default Skills
