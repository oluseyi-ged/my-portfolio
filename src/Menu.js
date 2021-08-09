import React from "react"
import "./Menu.css"
// import MenuOption from "./MenuOption"
import { NavLink } from "react-router-dom"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MediaOption from "./MediaOption"
import RemoveIcon from "@material-ui/icons/Remove"

function Menu() {
  return (
    <div className="menu">
      <div className="menu__pages">
        <NavLink
          className="menu__pagesLink"
          exact
          activeClassName="active"
          to="/"
        >
          <h4>
            01
            <RemoveIcon className="menu__pagesLine" />
            projects
          </h4>
        </NavLink>
        <NavLink
          className="menu__pagesLink"
          activeClassName="active"
          to="/skills"
        >
          <h4>
            02
            <RemoveIcon className="menu__pagesLine" />
            skills
          </h4>
        </NavLink>

        <NavLink
          className="menu__pagesLink"
          activeClassName="active"
          to="/clones"
        >
          <h4>
            03
            <RemoveIcon className="menu__pagesLine" />
            clones
          </h4>
        </NavLink>

        <NavLink
          className="menu__pagesLink"
          activeClassName="active"
          to="/resume"
        >
          <h4>
            04
            <RemoveIcon className="menu__pagesLine" />
            view resume
          </h4>
        </NavLink>
        {/* <Link to="/">
          <MenuOption active optionID="01" option="projects" />
        </Link>
        <Link to="/skills">
          <MenuOption optionID="02" option="skills" />
        </Link>
        <MenuOption optionID="03" option="clones" /> */}
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
