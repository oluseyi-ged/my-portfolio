import React from "react"
import "./MediaOption.css"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

function MediaOption({ Icon, text }) {
  return (
    <div className="mediaOption">
      <h4>
        <Icon fontSize="small" />
        {text}
        <ExitToAppIcon fontSize="small" />
      </h4>
    </div>
  )
}

export default MediaOption
