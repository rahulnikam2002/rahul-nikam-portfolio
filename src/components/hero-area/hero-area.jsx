import React, { useEffect } from "react";
import { Button } from "../styled.components/button/button.component";
import {
  Project,
  CertifiedDeveloper,
  DeveloperCard,
} from "../styled.components/project/project.component";
import "./hero-area.styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// import homepageHeaderImage from "../../public/img/hero-man.png";

export const HeroArea = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const aboutPageStyle = {
    textAlign: "center",
    width: "100%",
  };

  const aboutPageHeroArea = {
    width: "60%",
    margin: "auto",
    marginBotto: "20px",
  };
  return (
    <div
      className={
        props.whichPage === "aboutPage" ? "aboutPageHeroComponent" : "hero_area"
      }
    >
      {props.whichPage === "aboutPage" ? (
        <div
          data-aos="fade-up"
          className="left_info_area"
          style={aboutPageStyle}
        >
          {props.whichPage === "aboutPage" ? (
            <p className="slogan">About me</p>
          ) : (
            <p className="slogan">
              SPEED UP <br /> DEVELOPMENT
            </p>
          )}
          {/* <p className="slogan">SPEED UP <br /> DEVELOPMENT</p> */}
          <h1 className="hero_title">
            Hi I'm <br />
            Rahul Rajesh Nikam
          </h1>
          <p
            className="hero_description"
            style={
              props.whichPage === "aboutPage" ? { aboutPageHeroArea } : null
            }
          >
            A passionate developer and 3rd Year CS student who works in
            technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, MySQL,
            MongoDB, RestAPIs, WordPress
          </p>
          <a
            href="https://drive.google.com/file/d/19PA0X2aNR_MJF9xeWrfQhzyiuRMy0Z-F/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="hero_button" margin={`0px`}>
              Get my Resume
            </Button>
          </a>
        </div>
      ) : (
        <div data-aos="fade-up" className="left_info_area">
          {props.whichPage === "aboutPage" ? (
            <p className="slogan">About me</p>
          ) : (
            <p className="slogan">
              SPEED UP <br /> DEVELOPMENT
            </p>
          )}
          {/* <p className="slogan">SPEED UP <br /> DEVELOPMENT</p> */}
          <h1 className="hero_title">
            Hi I'm <br />
            Rahul Rajesh Nikam
          </h1>
          <p className="hero_description">
            A passionate developer and 3rd Year CS student who works in
            technologies such as ReactJS, JavaScript, NodeJS, ExpressJS, MySQL,
            MongoDB, RestAPIs, WordPress
          </p>
          <a
            href="https://drive.google.com/file/d/19PA0X2aNR_MJF9xeWrfQhzyiuRMy0Z-F/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="hero_button" margin={`0px`}>
              Get my Resume
            </Button>
          </a>
        </div>
      )}

      {props.whichPage === "aboutPage" ? (
        <div
          className="right_info_area"
          style={{ backgroundImage: "none" }}
        ></div>
      ) : (
        <div className="right_info_area">
          <Project projectCount={20} />
          <CertifiedDeveloper />
          <DeveloperCard followersCount={526} />
        </div>
      )}
    </div>
  );
};
