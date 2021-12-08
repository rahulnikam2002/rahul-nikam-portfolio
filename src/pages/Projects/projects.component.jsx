import React, { useEffect } from "react";
import { Header } from "../../components/header/header.component";
import { Project } from "../../components/projects/projects.component";

export const Projects = () => {
    
  useEffect(() => {
    document.title = "Rahul Nikam - Projects";
  }, []);

  return (
    <div>
      <Header goBack={true} />
      <Project shouldSlice={false} />
    </div>
  );
};
