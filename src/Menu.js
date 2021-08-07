import React from "react"
import "./Menu.css"
import MenuOption from "./MenuOption"
import { Link } from "react-router-dom"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MediaOption from "./MediaOption"

function Menu() {
  return (
    <div className="menu">
      <div className="menu__pages">
        <Link to="/">
          <MenuOption active optionID="01" option="projects" />
        </Link>
        <Link to="/skills">
          <MenuOption optionID="02" option="skills" />
        </Link>
        <MenuOption optionID="03" option="clones" />
        {/* <MenuOption optionID="4" option="" /> */}
      </div>
      <div className="menu__media">
        <a href="https://twitter.com/royGED">
          <MediaOption Icon={TwitterIcon} text="Twitter" />
        </a>
        <a href="https://github.com/oluseyi-ged">
          <MediaOption Icon={GitHubIcon} text="Github" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8136292202&text=Hi,%20Roy%20here.%20You%20need%20a%20website?">
          <MediaOption Icon={WhatsAppIcon} text="Whatsapp" />
        </a>
      </div>
    </div>
  )
}

export default Menu
