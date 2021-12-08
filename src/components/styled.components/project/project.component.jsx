// import styled from "styled-components";
import RahulNikam from "../../../public/img/rahulnikam.jpg";
import HeartIcon from "../../../public/img/heart.png";
import Certified from "../../../public/img/certified.png";
import chatIcon from "../../../public/img/chat.png";
import callIcon from "../../../public/img/call.png";
import "./project.styles.scss";

export const Project = (props) => (
  <div className="project_box floating">
    <div className="project_placeholder">
      <img src={HeartIcon} alt="heart-icon" />
      <p className="great_project">Great Projects</p>
    </div>
    <div className="project_counts">
      <h2>{props.projectCount}+ Done</h2>
      <p>
        In last <span className="project_count_duration">2 Months</span>
      </p>
    </div>
  </div>
);

export const CertifiedDeveloper = () => (
  <div className="certifiedDeveloperTag floating">
    <div className="certified_tag">
      <img src={Certified} alt="" />
      <p>Certified Developer</p>
    </div>
    <p className="certified_in">FullStack (MERN)</p>
  </div>
);

export const DeveloperCard = (props) => (
  <div className="developer_card floating">
    <img className="developer_image" src={RahulNikam} alt="Rahul-Nikam" />
    <p className="developer_name">Rahul Nikam</p>
    <p className="developer_occupation">FullStack Developer </p>
    <div class="followers_clients">
      <div className="followers">
        <p className="FC_title">Followers</p>
        <p className="FC_count">{props.followersCount}</p>
      </div>
      <div className="clients">
        <p className="FC_title">Clients</p>
        <p className="FC_count">5</p>
      </div>
      <div className="contact_developer_option">
        <a href="https://wa.me/+919767948152" target='_blank' rel="noreferrer">
          <div className="chat_option">
            <img src={chatIcon} alt="" />
          </div>
        </a>

        <a href="tel:8767213959" rel="noreferrer">
          <div className="call_option">
            <img src={callIcon} alt="" />
          </div>
        </a>
      </div>
    </div>
  </div>
);
