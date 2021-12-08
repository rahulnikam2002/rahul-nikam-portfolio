import React, { useEffect } from "react";
import frontEndIcon from "../../../public/img/frontend-icon.png";
import backEndIcon from "../../../public/img/backend-icon.png";
import UiUxIcon from "../../../public/img/user-interface-icon.png";
import "./service-catalogue.styles.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'

export const ServiceCatalogue = () => {
  useEffect(() => {
        AOS.init({
          duration: 1000
        })
      }, [])

  const services = [
    {
      id: 1,
      serviceName: "FrontEnd Development",
      image: frontEndIcon,
      description:
        "Working with frontend technologies such as ReactJS, JavaScript, HTML, SASS/SCSS, CSS, ChartJS, also i hold a ReactJS certificate.",
    },
    {
      id: 2,
      serviceName: "Backend Development",
      image: backEndIcon,
      description:
        "I have good knowledge of backend technologies such as NodeJS, Express, MySQL, MongoDB, I can build RestAPIs, also i have completed a Fullstack Development course and having a certificate too.",
    },
    {
      id: 3,
      serviceName: "Ui/Ux Designs",
      image: UiUxIcon,
      description: `I dont have any certificate in Ui/Ux but i can say i have good knowledge of this, i have built many projects and that's the reason i have good experience in this.`,
    },
  ];

  return (
    <div data-aos="fade-up" className="my_services">
      {services.map((services) => (
        <div data-aos="fade-right" key={services.id} className="frontend_service main_Service_box">
          <div className="serviceIcon">
            <img src={services.image} alt="" />
          </div>
          <div className="service_info">
            <h3>{services.serviceName}</h3>
            <p>
              {services.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
