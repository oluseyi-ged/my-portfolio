import React from "react"
import "./CloneCard.css"

function CloneCard({ url, cloneID, cloneName }) {
  return (
    <div className="cloneCard">
      <a href={url}>
        <div className="cloneCard__body">
          <img src={cloneID} alt="" />
          <h3>{cloneName}</h3>
        </div>
      </a>
    </div>
  )
}

export default CloneCard
