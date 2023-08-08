import React from "react";
import { useFetchProjects } from "./FetchProjects";
const Project = () => {
  const { loding, project } = useFetchProjects();
  console.log("loading : ", loding);
  console.log("project : ", project);
  if (loding) {
    return <section className="projects">Loading ..</section>;
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {project.map((proItm) => {
          const { id, img, title, url } = proItm;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              className="project"
              rel="noreferrer"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
