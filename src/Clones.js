import React from "react"
import "./Clones.css"
import CloneCard from "./CloneCard"

function Clones() {
  return (
    <div className="clones">
      <CloneCard
        cloneID="https://cdn.svgporn.com/logos/slack-icon.svg"
        cloneName="Slack Clone"
        url="https://dummy-slack.netlify.app/"
      />
      <CloneCard
        cloneID="https://img.icons8.com/color/96/000000/plesk.png"
        cloneName="Covid Tracker"
        url="https://track-covid-ng.netlify.app/"
      />
      <CloneCard
        cloneID="https://cdn.svgporn.com/logos/twitter.svg"
        cloneName="Twitter Clone"
        url="https://dummy-twitter.netlify.app/"
      />
      <CloneCard
        cloneID="https://cdn.svgporn.com/logos/netflix-icon.svg"
        cloneName="Netflix Clone"
        url="https://cranky-mcnulty-3f641e.netlify.app/"
      />
      <CloneCard
        cloneID="https://cdn.svgporn.com/logos/youtube-icon.svg"
        cloneName="Youtube Clone"
        url="https://dummyyoutube.netlify.app/"
      />
      <CloneCard
        cloneID="https://img.icons8.com/nolan/128/tiktok.png"
        cloneName="TikTok Clone"
        url="https://dummy-tiktok.netlify.app/"
      />
      <CloneCard
        cloneID="https://img.icons8.com/fluency/144/000000/--tinder.png"
        cloneName="Tinder Clone"
        url="https://tinder-appclone.netlify.app/"
      />
      <CloneCard
        cloneID="https://cdn.svgporn.com/logos/github-octocat.svg"
        cloneName="More on Github"
        url="https://github.com/oluseyi-ged"
      />
    </div>
  )
}

export default Clones
