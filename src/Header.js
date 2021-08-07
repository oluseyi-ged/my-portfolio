import { Avatar } from "@material-ui/core"
import React from "react"
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <Avatar
        className="header__avatar"
        src="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg"
        alt="odd developer"
      />
      <h3>odd developer</h3>
    </div>
  )
}

export default Header
