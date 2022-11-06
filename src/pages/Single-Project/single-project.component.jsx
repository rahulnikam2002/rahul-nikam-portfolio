import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../../components/projects/project-data.js";
import { Header } from "../../components/header/header.component";
import "./single-project.styles.scss";
import { RecentProject } from "../../components/sidebar/recent-projects/recent-projects.component";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "../../components/styled.components/button/button.component.jsx";

export const SingleProjectPage = (props) => {
  let { key } = useParams();
  const dataToBeLoaded = Number(key) - 1;
  let data = projectData;

  useEffect(() => {
    document.title = `${data[dataToBeLoaded].projectName}`;
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [dataToBeLoaded, data]);

  return (
    <div>
      <Header goBack={true} />
      <span style={{display: 'none'}}>
        {(document.title = `${data[dataToBeLoaded].projectName}`)}
      </span>
      <div className="content_area">
        <div className="left_content">
          <div className="featured_image">
            <img src={data[dataToBeLoaded].projectImage} alt="" />
          </div>
          <div className="project_type">
            <p>{data[dataToBeLoaded].projectType}</p>
            <p className="project_status">
              {data[dataToBeLoaded].projectStatus}
            </p>
          </div>
          <div className="project_title">
            <h1>
              {data[dataToBeLoaded].projectName}{" "}
              <span>
                {data[dataToBeLoaded].projectLiveLink.length > 2 ? (
                  <a
                    href={data[dataToBeLoaded].projectLiveLink}
                    className="openProjectIcon"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <OpenInNewIcon />
                  </a>
                ) : null}
              </span>{" "}
            </h1>
          </div>
          <div className="project_description">
            <div
              dangerouslySetInnerHTML={{
                __html: data[dataToBeLoaded].projectDescription,
              }}
            ></div>
            <br />
          </div>
          {data[dataToBeLoaded].projectLiveLink.length > 2 ? (
            <a
              target="_blank"
              rel="noreferrer"
              href={data[dataToBeLoaded].projectLiveLink}
              
            >
              <Button className="open_Project_New_Tab_Btn">
                Visit Live Project
              </Button>
            </a>
          ) : null}
        </div>

        <div className="right_content">
          <RecentProject />
        </div>
      </div>
    </div>
  );
};
