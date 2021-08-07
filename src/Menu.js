import React from "react"
import "./Menu.css"
import MenuOption from "./MenuOption"

function Menu() {
  return (
    <div className="menu">
      <MenuOption active optionID="01" option="projects" />
      <MenuOption optionID="02" option="skills" />
      <MenuOption optionID="03" option="clones" />
      {/* <MenuOption optionID="4" option="" /> */}
    </div>
  )
}

export default Menu
