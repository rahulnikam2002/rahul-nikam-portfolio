import React, { useState } from "react";
import "./header.styles.scss";
import { Button } from "../styled.components/button/button.component";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";


export const Header = (props) => {
  let [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <div className="header_wrapper">
      <div className="main_header">
        <div className="header_logo">
          {props.goBack ? (
            <ArrowBackRoundedIcon
              className="goBackIcon"
              onClick={() => {
                window.history.go(-1);
              }}
            />
          ) : (
            <MenuRoundedIcon
              className="menu_icon"
              onClick={() => setMenuOpen(true)}
            />
          )}
          <Link to="/">
            <h1>Rahul Nikam</h1>
          </Link>
        </div>

        <div className="menu_items">
          <div className="menu_sub_items">
            <Link to="/" className="link" rel="noreferrer">
              <p>Home</p>
            </Link>

            <Link to="/projects" className="link" rel="noreferrer">
              <p>Projects</p>
            </Link>

            <Link to="/about" className="link" rel="noreferrer">
            <p>About me</p>
            </Link>

            <Link to="/contact" className="link" rel="noreferrer">
            <p>Contact me</p>
            </Link>
            <a href="https://github.com/rahulnikam2002" target='_blank' className="link" rel="noreferrer">
              <p>GitHub</p>
            </a>

          </div>

          <div className="call_developer_btn">
            <a href="tel:8767213959">
              <Button className="header_button" margin={`0px 10px`}>
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div  className={menuOpen ? "mobile_menu" : "hide_mobile_menu"} >
        <div className="mobile_menu_section" >  
          <div className="mobile_menu_header">
            <CloseRoundedIcon
              className="menu_closeIcon"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="mobile_menu_items_list">
            <Link to="/" className="link" rel="noreferrer">
              <div className="mobile_menu_item">
                <p>Home</p>
                <ChevronRightRoundedIcon className="RightRoundedIcon" />
              </div>
            </Link>

            <Link to="/projects" className="link" rel="noreferrer">
              <div className="mobile_menu_item">
                <p>My Projects</p>
                <ChevronRightRoundedIcon className="RightRoundedIcon" />
              </div>
            </Link>

            <Link to="/about" className="link" rel="noreferrer">
            <div className="mobile_menu_item">
              <p>About Me</p>
              <ChevronRightRoundedIcon className="RightRoundedIcon" />
            </div>
            </Link>

            <Link to="/contact" className="link" rel="noreferrer">
            <div className="mobile_menu_item">
              <p>Contact Me</p>
              <ChevronRightRoundedIcon className="RightRoundedIcon" />
            </div>
            </Link>

            <a href="https://github.com/rahulnikam2002" className="link" rel="noreferrer">
              <div className="mobile_menu_item">
                <p>GitHub</p>
                <ChevronRightRoundedIcon className="RightRoundedIcon" />
              </div>
            </a>

          </div>
          <a href="https://drive.google.com/file/d/1gftS4pbu8lo5qObpNJr7R8jxQRfxYajR/view" target='_blank'>
          <div className="get_resume_btn_area">
            <Button className="resume_btn">Get my Resume</Button>
          </div>
          </a>
            <div className="blob_design"></div>

          <div className="social_media_links">
            <a
              className="social_media_link"
              href="https://www.linkedin.com/in/rahul-nikam-5099b220a/"
            >
              <p>LinkedIn</p>
            </a>

            <a
              className="social_media_link"
              href="https://www.instagram.com/rahulnikam.uiux/"
            >
              <p>Instagram</p>
            </a>

            <a
              className="social_media_link"
              href="https://www.twitter.com/_rahulnikam_/"
            >
              <p>Twitter</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
