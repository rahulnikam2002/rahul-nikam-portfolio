import React, { useEffect } from "react";
import "./skills.styles.scss";
import htmlIcon from "../../public/img/html-5.png";
import cssIcon from "../../public/img/css.png";
import javaScriptIcon from "../../public/img/javascript.png";
import reactJsIcon from "../../public/img/reactjs.png";
import nodeJsIcon from "../../public/img/nodejs.png";
import expressJsIcon from "../../public/img/expressjs.png";
import mySqlIcon from "../../public/img/mysql.png";
import mongoDbIcon from "../../public/img/mongoDB.png";
import uiUxIcon from "../../public/img/user-interface-icon.png";
import restApiIcon from "../../public/img/api.png";
import wordPressIcon from "../../public/img/wordpress.png";
import girVersionControlIcon from "../../public/img/git-version-control.png";
import digitalMarketing from '../../public/img/digital-marketing.png'
import affiliateMarketing from '../../public/img/Affiliate-Marketing-PNG.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

export const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

  const skillsData = [
    {
      skillName: "HTML",
      skillIcon: htmlIcon,
    },
    {
      skillName: "CSS",
      skillIcon: cssIcon,
    },
    {
      skillName: "JavaScript",
      skillIcon: javaScriptIcon,
    },
    {
      skillName: "ReactJS",
      skillIcon: reactJsIcon,
    },
    {
      skillName: "React Native",
      skillIcon: reactJsIcon,
    },
    {
      skillName: "NodeJS",
      skillIcon: nodeJsIcon,
    },
    {
      skillName: "ExpressJS",
      skillIcon: expressJsIcon,
    },
    {
      skillName: "MySQL",
      skillIcon: mySqlIcon,
    },
    {
      skillName: "MongoDB",
      skillIcon: mongoDbIcon
    },
    {
      skillName: "GIT",
      skillIcon: girVersionControlIcon
    },
    {
      skillName: "UiUx",
      skillIcon: uiUxIcon,
    },
    {
      skillName: "RestAPIs",
      skillIcon: restApiIcon,
    },
    {
      skillName: "WordPress",
      skillIcon: wordPressIcon,
    }
  ];
  return (
    <div className="my_skills" data-aos='fade-up'>
      <p className="small_title">What i know?</p>
      <h2 className="section_title">My Skills</h2>
      <div className="skills_list">
        {skillsData.map(skill => (
          <div className="single_skill" data-aos="fade-up">
            <img src={skill.skillIcon} alt="" className="skill_image" />
            <div className="skill_info">
              <p className="skill_name">{skill.skillName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
