import React from "react"
import "./Resume.css"

function Resume() {
  return (
    <a href="./Oluwaseyi's Resume.pdf" download>
      <div className="resume">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1628669895/Annotation_2021-08-11_091643_zyuj6v.png"
          alt=""
          className="resume__blur"
        />
        <div class="resume__overlay">
          <div class="resume__text">Hello World</div>
        </div>
      </div>
    </a>
  )
}

export default Resume
