
import healthAuraImage from "../../public/img/Health-Aura-project.png";
import vaccinesNearMeImage from "../../public/img/Vaccines-Near-Me-project.png";
import promptEngineersImage from "../../public/img/Prompt-Engineers-project.png";

export const projectData = [
    {
      key: 1,
      projectName: `Health Aura - Complete Healthcare System`,
      projectType: `Full stack`,
      projectStatus: 'Still Working',
      githubRepo: 'https://github.com/rahulnikam2002/Health-Aura---Your-Health-With-Us',
      projectImage: healthAuraImage,
      projectLiveLink: '',
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
      key: 2,
      projectName: `Vaccines Near Me - Frontend Project`,
      projectType: `Frontend`,
      projectStatus: 'Deployed',
      projectImage: vaccinesNearMeImage,
      githubRepo: 'https://github.com/rahulnikam2002/Covid-Vaccines-Locator',
      projectLiveLink: 'https://vaccinesnearme.web.app',
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
      key: 3,
      projectName: `Prompt Engineers - Full Stack Project`,
      projectType: `Full Stack`,
      projectStatus: 'Deployed',
      githubRepo: '',
      projectImage: promptEngineersImage,
      projectLiveLink: 'https://promptengineers.in',
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
    }
  ];