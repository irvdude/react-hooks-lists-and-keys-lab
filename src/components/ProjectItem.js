import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techSpan = technologies.map((technologies) => {
    return <span key={technologies}>{technologies}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
