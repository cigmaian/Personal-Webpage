
import style from './main.css';

import aboutSection from "./about.js";
import createIntro from "./main.js";
import workSection from "./work.js";
import contactSection from "./contact.js";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");


 const headerLogo = document.createElement("h1");
  headerLogo.classList.add("headerLogo");
  headerLogo.textContent = "[CA]";

  header.appendChild(headerLogo);
  header.appendChild(createNav());
  
  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const aboutMenu = document.createElement("a");
  aboutMenu.classList.add("navLink");
  aboutMenu.textContent = "[0]aboutMe";
  aboutMenu.href="#about";
  
  const workMenu = document.createElement("a");
  workMenu.classList.add("navLink");
  workMenu.textContent = "[1]myWork";
  workMenu.href="#mywork";

  const contactMenu = document.createElement("a");
  contactMenu.classList.add("navLink");
  contactMenu.textContent = "[2]contact";
  contactMenu.href="#contact";

  nav.appendChild(aboutMenu);
  nav.appendChild(workMenu);
  nav.appendChild(contactMenu);

  return nav;
}


function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  main.appendChild(createIntro());
  main.appendChild(aboutSection());  
   
  main.appendChild(workSection());
  main.appendChild(contactSection());

  return main;
}


function createAboutMe(){

    const aboutSection = document.createElement("section");
    aboutSection.setAttribute("id", "about");



    return aboutSection;
}



function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Created by cigmaian © ${new Date().getFullYear()}`;

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/cigmaian";

  const githubIcon = document.createElement("img");
  githubIcon.src= `img/stack/github.png`;
  githubIcon.alt = "git-img";
  githubIcon.classList.add('git');

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  
}

export default initializeWebsite;