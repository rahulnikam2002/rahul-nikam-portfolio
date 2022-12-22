import healthAuraImage from "../../public/img/Health-Aura-project.png";
import vaccinesNearMeImage from "../../public/img/Vaccines-Near-Me-project.png";
import promptEngineersImage from "../../public/img/Prompt-Engineers-project.png";
import healthassist from "../../public/img/healthassist.jpg";

export const projectData = [
  {
    key: 1,
    projectName: `Health Assist - Full stack native application`,
    projectType: `Full stack`,
    projectStatus: "Still Working",
    githubRepo:
      "https://github.com/rahulnikam2002/HealthAssist",
    projectImage: healthassist,
    projectLiveLink: "",
    shortDescription: `smart way to manage and book appointments for Clinics, there is no need to manually verify appointment by the staff...`,
    projectDescription: `<h2>What exactly HealthAssist is?</h2>

    <p>HealthAssist is the smart way to manage and book appointments for Clinics, Users can book appointments, and there is no need to manually verify each and every appointment by the staff. Appointments will be verified automatically by the system itself.<br />
    <br />
    We are trying to add some unique features to this app, <strong>Join Family Account</strong>, where user can add their family members while booking an appointment and they can directly select the member who needs the treatment.<br />
    &nbsp;</p>
    
    <h2>Technologies used:</h2>
    
    <ol>
      <li>React Native - Main Application</li>
      <li>ReactJs - Admin Dashboard</li>
      <li>ExpressJs</li>
      <li>MongoDB</li>
    </ol>
    
    <h3>Extra Dependencies:</h3>
    
    <ol>
      <li>React Native
      <ul>
        <li>Expo</li>
        <li><strong><a href="https://github.com/gorhom/react-native-bottom-sheet" target="_blank"><span style="color:#077052">Gorham bottom-sheet</span></a></strong></li>
        <li>React Navigation</li>
        <li>Axios</li>
        <li>Tailwind CSS</li>
      </ul>
      </li>
      <li>NodeJs
      <ul>
        <li>Bcrypt</li>
        <li>JsonWebToken</li>
        <li>NodeMailer</li>
      </ul>
      </li>
    </ol>
    
    <h2>Team Members:</h2>
    
    <ol>
      <li><strong><a href="https://www.linkedin.com/in/siddhi-mahadik-470092212/" target="_blank"><span style="color:#077052">Siddhi Mahadik</span></a></strong></li>
      <li><strong><a href="https://www.linkedin.com/in/nisha-patil-44b645214/" target="_blank"><span style="color:#077052">Nisha Patil</span></a></strong></li>
    </ol>
    
    <div>
      <h4>Affiliated Product</h4>
      <p>Try one of the best Product Hair Volumizing product by Urbangabru - <span><a href="https://amzn.to/3YGeiZ7">Hair Volumizing Powder Wax for Men by Urbangabru</a></span> </p>
    </div>
    `,
  },
  {
    key: 2,
    projectName: `Health Aura - Complete Healthcare System`,
    projectType: `Full stack`,
    projectStatus: "Completed",
    githubRepo:
      "https://github.com/rahulnikam2002/Health-Aura---Your-Health-With-Us",
    projectImage: healthAuraImage,
    projectLiveLink: "",
    shortDescription: `Users can find nearest Hospitals, Medicals, Doctors, Technologies used in this project are NodeJS, Express, MySQL...`,
    projectDescription: `
<p>Users can find nearest Hospitals, Medicals, Doctors and they can contact any doctor easily, we included functionality such as user authentication, in this I have used Bcrypt for hashing confidential data of users, I have also added change password functionality where a 4 digit OTP will be sent to the user and also it will get stored in Database in an hashed format for security purpose.</p>
<p><br></p>
<h2>Technologies used</h2>
<ol>
    <li>I have use NodeJS as a backend.</li>
    <li>Express for the server.</li>
    <li>liMySQL for the Database.</li>
    <li>Express Handlebars (HBS) as a template engine.</li>
    <li>HTML &amp; CSS for Structure and Designing</li>
    <li>Bcrypt for hashing passwords and OTPs.</li>
    <li>JSON Web Token for generating unique tokens.</li>
    <li>Node Mailer for sending mails.</li>
    <li>Cookie Parser for storing data in user&apos;s cookie.</li>
    <li>Multer for adding multiple files (Images).</li>
    <li>Dotenv for hiding confidential data.</li>
</ol>
<p><br></p>
<h2>Functionalities</h2>
<ol>
    <li>CMS for adding Hospitals, Medicals, Doctors and to check complete websites data.</li>
    <li>Login and Registration system.</li>
    <li>Change password system.</li>
    <li>User profile page (Editable).</li>
    <li>Advance search functionality (Searching by using user&apos;s Location GPS)</li>
</ol>`,
  },
  {
    key: 3,
    projectName: `Vaccines Near Me - Frontend Project`,
    projectType: `Frontend`,
    projectStatus: "Deployed",
    projectImage: vaccinesNearMeImage,
    githubRepo: "https://github.com/rahulnikam2002/Covid-Vaccines-Locator",
    projectLiveLink: "https://vaccinesnearme.web.app",
    shortDescription: `Its a web app which shows vaccination camp held by Government of India, We have used HTML, CSS, JavaScript...`,
    projectDescription: `
      <p>Vaccines Near Me is a web app which shows information related to Vaccination camp held by the Government of India, Its single page application so its very easy to navigate. and if you have a question in your mind that why we have created this, there area also apps like CoWin they too provides same information!! Yes these websites too provide same content but the difference is to see information on websites like CoWin user needs to register and this process is so lengthy, People who live in Rural area might be uncomfortable for using these websites to we have created a single page application which is very easy to use. &nbsp;</p>
      <p><br></p>
      <h2>Technologies used</h2>
      <ol>
          <li>HTML for structure.</li>
          <li>CSS for designing.</li>
          <li>JavaScript.</li>
          <li>CoWin API.</li>
          <li>Firebase for Deployment.</li>
      </ol>`,
  },
  {
    key: 4,
    projectName: `Prompt Engineers - Full Stack Project`,
    projectType: `Full Stack`,
    projectStatus: "Deployed",
    githubRepo: "",
    projectImage: promptEngineersImage,
    projectLiveLink: "https://promptengineers.in",
    shortDescription: `Its a project for one of the company Prompt Engineers in Pune, Technologies used are NodeJS, Express, MySQL...`,
    projectDescription: `
      <p>I had developed and deployed a website for a company based in Pune named Prompt Engineers, Its a simple full stack website where I&apos;m showing all the services provided by the company. I have used NodeJS for backend, Express for server, MySQL for Database, and also created CMS for adding services, and to check contacts. This website is deployed on Apache Server (cPanel), as it was companies recommendation to host it on cPanel.</p>
      <p><br></p>
      <h2>Technologies used</h2>
      <ol>
          <li>I have use NodeJS as a backend.</li>
          <li>Express for the server, MySQL for the Database.</li>
          <li>Express Handlebars (HBS) as a template engine.</li>
          <li>HTML &amp; CSS for Structure and Designing</li>
          <li>Bootstrap.</li>
      </ol>`,
  },
];
