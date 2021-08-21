import Headshot from './headshot.jpg';
import Fam from './Fam.jpg';
import Git from './github.jpg';
import Logic from './Logic.PNG';
import Hangman from './Hangman.PNG';
import YT from './youtube.png';
import SYEP from './syep.png';
import ZAS from './zas.jfif';
import EK from './ekanyone.jfif'

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
                currently being hosted via GitHub Pages. If you'd like to check out projects 
                that I've worked on (My Portfolio) click where it says 'Personal Projects'
                in green. If you'd like to learn a little bit about me personally/professionally
                click where it says 'Experience' or 'About Me' in green.
              </p>
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
        <p class = "HyperLinks" onClick={() => home()}>Home Page (click here)</p>
        <div class = "ExperienceBox">
          <table class = "ExperienceTable">
            <tr>
              <td class = "ExperienceTD">
                <p class = "ExperienceName">
                  eKanyone
                </p>
                <p class = "Text">
                  Software Engineering Intern (05/2021 - 08/2021)
                </p>
                <a href = "https://www.ekanyone.com/" target = "_blank">
                  <img src={EK} class = "ExperiencePic" />
                </a>
              </td>
              <td class = "ExperienceTD">
                <p class = "Text">
                  In my most recent internship at eKanyone, I got to work on a team of interns 
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
        <p class = "HyperLinks" onClick={() => home()}>Home Page (click here)</p>
        <div class="PictureCircle">
          <a href = "https://github.com/abenner2000" target = "_blank">
            <img src={Git} class="GitPicture" />
          </a>
        </div>
        <div class = "ProjectsBox">
          <table class = "ProjectsTable">
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
          <p class = "HyperLinks" onClick={() => home()}>Home Page (click here)</p>
          <p class = "Text">
            I'm a very family-oriented person, and I love to travel.
            Alongside travelling, two of my biggest hobbies are playing
            guitar and singing. A dream I've had since a boy, is to travel
            to the world's most beautiful locations and play my guitar there.
            I love challenges and I love to compete with others. Whether it be
            weighlifting, running, or doing math; I love competitions. I 
            also enjoy playing video games occasionally.
          </p>
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
