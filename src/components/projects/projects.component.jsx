import React, { useEffect } from "react";
import { projectData } from "./project-data.js";
import { Button } from "../../components/styled.components/button/button.component";
import "./project.styles.scss";
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'


export const Project = (props) => {
  const allProjectData = projectData;
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    AOS.init({
      duration: 1000
    })
  },[])


  return (
    <div>
      {props.showData ? (
        <h1 className="project_area_title">
          Recent <span>Projects</span>
        </h1>
      ) : null}
      {
        props.shouldSlice ? (
          <div className="project_cards">
        {allProjectData.slice(0, 3).map((project) => (
          <div key={project.key} className="single_project_card" data-aos='fade-up'>
            <img src={project.projectImage} alt="" />
            <div className="project_type">
              <p>{project.projectType}</p>
            </div>
            <div className="card_data_without_img">
              <p className="project_title">
                {project.projectName}
              </p>
              <p>
                {project.shortDescription}
              </p>
              <Button className="open_project_btn" onClick={() => navigate(`/projects/${project.key}`)}>Check Project</Button>
            </div>
          </div>
        ))}
      </div>
        ) : (
          <div className="project_cards">
        {allProjectData.map((project) => (
          <div key={project.key} className="single_project_card" data-aos='fade-up'>
            <img src={project.projectImage} alt="" />
            <div className="project_type">
              <p>{project.projectType}</p>
            </div>
            <div className="card_data_without_img">
              <p className="project_title">
                {project.projectName}
              </p>
              <p>
                {project.shortDescription}
              </p>
              <Button className="open_project_btn" onClick={() => navigate(`/projects/${project.key}`)}>Check Project</Button>
            </div>
          </div>
        ))}
      </div>
        )
      }
    </div>
  );
};
