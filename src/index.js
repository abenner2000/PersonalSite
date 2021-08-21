import Headshot from './headshot.jpg';
import Fam from './Fam.jpg';
import Git from './github.jpg';
import Logic from './Logic.PNG';
import Hangman from './Hangman.PNG';

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
          <p>Herlooo</p>
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
