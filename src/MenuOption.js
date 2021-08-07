import React from "react"
import "./MenuOption.css"
import RemoveIcon from "@material-ui/icons/Remove"

function MenuOption({ optionID, option, active }) {
  return (
    <div className={`menuOption ${active && "menuOption--active"}`}>
      <h4>
        {optionID}
        <RemoveIcon className="menuOption__Line" />
        {option}
      </h4>
    </div>
  )
}

export default MenuOption
