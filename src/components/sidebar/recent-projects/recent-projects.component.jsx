import React from "react";
import { projectData } from "../../projects/project-data.js";
import "./recent-project.styles.scss";
import { Link } from "react-router-dom";

export const RecentProject = () => {
  const data = projectData;
  return (
    <div className="recent_project_sidebar">
      {data.slice(0, 5).map((singleProjectData) => (
        <div className="projects_listing">
          <div className="project_image">
            <img src={singleProjectData.projectImage} alt="" />
          </div>
          <div className="project_info">
            <Link className="link" to={`/projects/${singleProjectData.key}`}>
              <div className="project_name">
                <p>{singleProjectData.projectName}</p>
              </div>
            </Link>

            <div className="project_type">
              <p>{singleProjectData.projectType}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
