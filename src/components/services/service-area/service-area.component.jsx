import React, { useEffect } from "react";
import { ServiceCatalogue } from "../service-catalogue/service-catalogue.component";
import { Button } from "../../styled.components/button/button.component";
import "./service-area.styles.scss";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'

export const ServiceArea = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000
        })
      }, [])
  return (
    <div className="serviceAreaStyle">
      <ServiceCatalogue />
      <div data-aos="fade-up" className="my_competent">
        <h2>
          What I'm <span className="highlight">able</span> to do?
        </h2>
        <p>
          I can handle projects related to Full Stack development and UiUx, If i
          talk about complexity of the project then it can ranges from very easy
          to Advance type of projects.
          <br />
          <br />I have created many project using technologies like NodeJS,
          JavaScript, MySQL, MongoDB, HTML, CSS, ReactJS. I have completed C/C++
          and Data Structures and Algorithm (DSA).
        </p>
        <Link to="/projects" rel="noreferrer">
          <Button>Check My Projects</Button>
        </Link>
      </div>
    </div>
  );
};
