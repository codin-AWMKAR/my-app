import "./WorkCardStyles.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

import React from 'react'


const Work = () => {
  return (
    <div>
      <div className="work-container">
        <h1 className="project-heading" style={{fontfamily:"monospace",
      fontSize:"5.4rem"}} >Projects</h1>
        <div className="project-container">
           {WorkCardData.map((val,ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title} 
                text={val.text}
                view={val.view}/>
            )
           }) }
        </div>
      </div>
    </div>
  )
}

export default Work;
