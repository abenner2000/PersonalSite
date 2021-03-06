import Headshot from './headshot.jpg';
import Fam from './Fam.jpg';
import Git from './github.jpg';
import Logic from './Logic.PNG';
import Hangman from './Hangman.PNG';
import YT from './youtube.png';
import SYEP from './syep.png';
import ZAS from './zas.jfif';
import EK from './ekanyone.jfif';
import FRDM from './FRDM.PNG';
import POL from './Pololu.PNG';
import UCA from './UCA.jpg'
import MERN from './MERN.PNG';
import RESUME from './Resume.PNG'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './experience.css';
import './projects.css';
import './about.css';
import reportWebVitals from './reportWebVitals';

function home() {
  ReactDOM.render(
    <MainBody />,
    document.getElementById('root')
  );
}

function experience() {
  ReactDOM.render(
    <Experience />,
    document.getElementById('root')
  );
}

function projects() {
  ReactDOM.render(
    <Projects />,
    document.getElementById('root')
  );
}

function about() {
  ReactDOM.render(
    <About />,
    document.getElementById('root')
  );
}

function resume() {
  ReactDOM.render(
    <Resume />,
    document.getElementById('root')
  );
}

class MainBody extends React.Component {
  render() {
    return(
      <div>
        <div class="CenterColumn">
          <div class="Top">
            <div class="PictureCircle">
              <img src={Headshot} class="Picture" />
              <p class="Name">Andrew Benner</p>
              <p class="Text">
                Hi! My name is Andrew Benner, and I'd like to thank you for taking the time
                to stop by my personal website. This website was created using ReactJS and is 
                currently being hosted via AWS(S3,CloudFront, and Route 53). If you'd like to check out projects 
                that I've worked on (My Portfolio) click where it says 'Personal Projects'.
                If you'd like to learn a little bit about me personally/professionally
                click where it says 'Experience' or 'About Me'.
              </p>
              <p class="Text">
                Contact me at: andrewbenner918@gmail.com
              </p>
              <br /><br /><br /><br /><br /><br />
            </div>
          </div>
        </div>
        <div class = "NavBar">
          <div class = "List">
              <div class = "HyperBox">
                <p class = "HyperLinks" onClick={() => experience()}>Experience</p>
              </div>
              <div class = "HyperBox">
                <p class = "HyperLinks" onClick={() => projects()}>Personal Projects</p>
              </div>
              <div class = "HyperBox">
                <p class = "HyperLinks" onClick={() => about()}>About Me</p>
              </div>
              <div class = "HyperBox">
                <p class = "HyperLinks" onClick={() => resume()}>Resume</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return(
      <div>
        <p class = "Name"> My Experience </p>
        <div class = "ExperienceBox">
          <table class = "ExperienceTable">
          <tr>
              <td class = "ExperienceTD">
                <p class = "ExperienceName">
                  Binghamton University
                </p>
                <p class = "Text">
                  Undergraduate Course Assistant (01/2022 - 05/2022)
                </p>
                <a href = "https://www.binghamton.edu/electrical-computer-engineering/index.html" target = "_blank">
                  <img src={UCA} class = "ExperiencePic" />
                </a>
              </td>
              <td class = "ExperienceTD">
                <p class = "Text">
                  Most recently, I was an undergraduate course assistant for a class called
                  Junior Design at Binghamton University. This course used C programming to 
                  program hardware like microcontrollers. I helped students with questions
                  that they had in regards to lab assignments and projects where they 
                  had to program the soft microprocessor MicroBlaze. I was also available 
                  for electronic assistance via email and helped the students in the conceptual
                  development of their final projects.
                </p>
              </td >
            </tr>
            <tr>
              <td class = "ExperienceTD">
                <p class = "ExperienceName">
                  eKanyone
                </p>
                <p class = "Text">
                  Software Engineering Intern (05/2021 - 08/2021)
                </p>
                <img src={EK} class = "ExperiencePic" />
              </td>
              <td class = "ExperienceTD">
                <p class = "Text">
                  During my Summer '21 internship at eKanyone, I got to work on a team of interns 
                  where I vastly improved my skills and knowledge on both front and backend programming.
                  I got to contribute to the design and development of a full stack CRUD ecommerce website
                  using ReactJS and Django.
                </p>
              </td >
            </tr>
            <tr>
            <td class = "ExperienceTD">
                <p class = "ExperienceName">
                  Zen Art Soul
                </p>
                <p class = "Text">
                  Web Dev/Technology Intern (08/2020 - 03/2021)
                </p>
                <a href = "http://zenartssoul.com/index.html" target = "_blank">
                  <img src={ZAS} class = "ExperiencePic" />
                </a>
              </td>
              <td class = "ExperienceTD">
                <p class = "Text">
                  During my internship at Zen Art Soul I greatly improved my HTML,CSS, 
                  and JavaScript skills, as I was responsible for keeping the store and 
                  company websites updated and fresh. The company used Weebly, however I 
                  constantly found myself editing code to change templates and designs.
                  I also worked with the photography intern to keep a fresh and changing
                  gallery of art displayed on the website.
                </p>
              </td >
            </tr>
            <tr>
            <td class = "ExperienceTD">
                <p class = "ExperienceName">
                  SYEP at Laguardia Community College
                </p>
                <p class = "Text">
                  Digital Art Intern (07/2020 - 08/2020)
                </p>
                <a href = "https://www1.nyc.gov/site/dycd/services/jobs-internships/summer-youth-employment-program-syep.page" target = "_blank">
                  <img src={SYEP} class = "ExperiencePic" />
                </a>
              </td>
              <td class = "ExperienceTD">
                <p class = "Text">
                  During my internship at SYEP @ Laguardia Community College, I learned problem solving skills 
                  and polished my creativity with various projects throughout the summer. For my final project, 
                  I created a website that compiled the final projects of all my other fellow interns. I published 
                  the website to GitHub Pages and my supervisor used my final project to present to the administration.
                </p>
              </td >
            </tr>
          </table>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>   
        <div class = "secondNavBar">
          <div class = "secondList">
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => home()}>Home</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => projects()}>Personal Projects</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => about()}>About Me</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return(
      <div>
        <p class = "Name"> Personal Projects </p>
        <div class="PictureCircle">
          <a href = "https://github.com/abenner2000" target = "_blank">
            <img src={Git} class="GitPicture" />
          </a>
          <a href = "https://github.com/abenner2000" target = "_blank">
            <p class = "ProjectsName">
              (Github Link)
            </p>
          </a>
        </div>
        <p class = "Name">Software Projects </p>
        <div class = "ProjectsBox">
          <table class = "ProjectsTable">
          <tr>
              <td class = "ProjectsTD">
                <p class = "ProjectsName">
                  MERN FullStack E-Commerce Website
                </p>
                <a href = "https://ecommerce-site-3c042.web.app/" target = "_blank">
                  <img src={MERN} class = "ProjPic" />
                </a>
              </td>
              <td class = "ProjectsTD">
                <p class = "Text">
                  I developed this Full Stack website using a MERN stack. I used
                  Firestore database (NoSQL) from Firebase instead of MongoDB. This
                  website handles user authentication through Firebase, a secure method
                  of payment processing through integration of the Stripe API, and provides
                  a user order history breakdown through the connection with the Cloud
                  Firestore database. Alongside this, the user cart can be manipulated 
                  through editing global variables with the React Context API.
                </p>
              </td >
            </tr>
            <tr>
              <td class = "ProjectsTD">
                <p class = "ProjectsName">
                  Hangman Game
                </p>
                <a href = "https://abenner2000.github.io/Hangman" target = "_blank">
                  <img src={Hangman} class = "ProjPic" />
                </a>
              </td>
              <td class = "ProjectsTD">
                <p class = "Text">
                  I developed this Hangman game using React.JS 
                  (similar to how I developed this website). I used components
                  to easily construct the UI, and coded functionality that
                  entails: choosing a difficulty level, drawing the hangman,
                  handling correct/incorrect/repeated guesses, and more. Click
                  the image to be taken to the app.
                </p>
              </td >
            </tr>
            <tr>
            <td class = "ProjectsTD">
                <p class = "ProjectsName">
                  Hangman Bot
                </p>
                <a href = "https://youtu.be/_QI0u8PDYSc" target = "_blank">
                  <img src={YT} class = "ProjPic" />
                </a>
              </td>
              <td class = "ProjectsTD">
                <p class = "Text">
                  This bot was built using the Selenium framework, on
                  Python. You can play the video to see a demo. The bot 
                  works by first guessing all vowels, and then guessing
                  random letters (excluding previously guessed letters).
                </p>
              </td >
            </tr>
            <tr>
            <td class = "ProjectsTD">
                <p class = "ProjectsName">
                  Logic Gate Calculator
                </p>
                <a href = "https://abenner2000.github.io/LogicGateReact" target = "_blank">
                  <img src={Logic} class = "ProjPic" />
                </a>
              </td>
              <td class = "ProjectsTD">
                <p class = "Text">
                  This is a logic gate calculator that I initally created
                  using VanillaJS. It takes a logic gate and multiple binary
                  inputs, and then outputs the correct binary output. I 
                  rebuilt this using ReactJS to improve my skills and to make
                  it easier to host on Github Pages. Click the image to be 
                  taken to the app.
                </p>
              </td >
            </tr>
          </table>
        </div>
        <p class = "Name">Hardware (Embedded) Projects </p>
        <div class = "ProjectsBox">
          <table class = "ProjectsTable">
            <tr>
              <td class = "ProjectsTD">
                <p class = "ProjectsName">
                  FRDM KL25Z Board Project
                </p>
                <a href = "https://youtu.be/cULHY6uY5r8" target = "_blank">
                  <img src={FRDM} class = "ProjPic" />
                </a>
              </td>
              <td class = "ProjectsTD">
                <p class = "Text">
                  This was the final project for a course I took in my senior year at 
                  SUNY Binghamton (EECE 458 - Embedded Systems Design). Using drivers 
                  to interact with the hardware of the board, I made use of a built 
                  in accelerometer to allow the user to create a color and display it 
                  on the LED. Holding the board at varying angles on different planes 
                  (picked up by the accelerometer) will display a color that the user 
                  can choose by pressing the button. Once three colors have been picked, 
                  a final button press will display the color that all three chosen 
                  colors create once combined. Click on the picture to be taken to a 
                  YouTube demo. The code can be found in my GitHub.
                </p>
              </td >
            </tr>
            <tr>
            <td class = "ProjectsTD">
                <p class = "ProjectsName">
                  Pololu 3pi Robot Project
                </p>
                <a href = "https://youtu.be/VpMcMdAtS50" target = "_blank">
                  <img src={POL} class = "ProjPic" />
                </a>
              </td>
              <td class = "ProjectsTD">
                <p class = "Text">
                  This was the final project for a course I took in my 
                  junior year at SUNY Binghamton (EECE 387 - Junior Design). 
                  I created drivers to interact with the hardware of the 
                  Pololu 3PI robot and then programmed it to completely 
                  navigate a maze, detect all mines (paper pieces) and 
                  return to the start. Click on the picture to be taken to 
                  a YouTube demo. The code can be found in my GitHub.
                </p>
              </td >
            </tr>
          </table>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div class = "secondNavBar">
          <div class = "secondList">
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => home()}>Home</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => experience()}>Experience</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => about()}>About Me</p>
              </div>
          </div>
        </div>
        <br /><br />
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return(
      <div>
        <div class = "PictureBox">
          <img src={Fam} class="FamPicture" />
        </div>
        <div class = "TextBox">
          <p class = "Name">About Me</p>
          <p class = "Text">
            I'm a very family-oriented person, and I love to travel.
            Alongside travelling, two of my biggest hobbies are playing
            guitar and singing. A dream I've had since a boy, is to travel
            to the world's most beautiful locations and play my guitar there.
            I love challenges and I love to compete with others. Whether it be
            weighlifting, running, or doing math; I love competitions. I 
            also enjoy playing video games occasionally.
          </p>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div class = "secondNavBar">
          <div class = "secondList">
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => home()}>Home</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => experience()}>Experience</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => projects()}>Personal Projects</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

class Resume extends React.Component {
  render() {
    return(
      <div>
        <div class = "TextBox">
          <p class = "Name">Resume</p>
          <img src = {RESUME} class = "resume" />
          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        <div class = "secondNavBar">
          <div class = "secondList">
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => home()}>Home</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => experience()}>Experience</p>
              </div>
              <div class = "secondHyperBox">
                <p class = "HyperLinks" onClick={() => projects()}>Personal Projects</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MainBody />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
