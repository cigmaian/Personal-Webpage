/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function aboutSection() {
  var createAboutMe = document.createElement('section');
  createAboutMe.setAttribute("id", "about");
  createAboutMe.classList.add("createAboutMe");
  var aboutMeDiv = document.createElement('div');
  aboutMeDiv.classList.add("aboutMeDiv");
  createAboutMe.appendChild(aboutMeDiv);
  var left = document.createElement('div');
  left.classList.add('left');
  var right = document.createElement('div');
  right.classList.add('right');
  aboutMeDiv.appendChild(left);
  aboutMeDiv.appendChild(right);
  var aboutMeTitle = document.createElement('h2');
  aboutMeTitle.classList.add("aboutMeTitle");
  aboutMeTitle.textContent = "[0]aboutMe";
  left.appendChild(aboutMeTitle);
  var aboutMeDescription = document.createElement('p');
  aboutMeDescription.classList.add("aboutMeDescription");
  aboutMeDescription.textContent = "I'm a Front-end developer who carries a keen eye for design in an user-first approach. My current focus is in creating responsive layouts on the JavaScript stack of React and NodeJS which I have been exploring recently, and from my background as an physicist I'm well acquainted to bringing out solutions to complex problems.";
  right.appendChild(aboutMeDescription);
  var skillsDiv = document.createElement('div');
  skillsDiv.classList.add("skills");
  createAboutMe.appendChild(skillsDiv);
  var skillContainer = document.createElement("div"); // pricing

  skillContainer.classList.add("skillContainer");
  skillsDiv.appendChild(skillContainer);
  var stackFront = document.createElement("div");
  stackFront.classList.add("product");
  skillContainer.appendChild(stackFront);
  var stackFrontTitle = document.createElement("h3");
  stackFrontTitle.classList.add("level");
  stackFrontTitle.textContent = "Front-end";
  stackFront.appendChild(stackFrontTitle);
  var frontLogo = document.createElement("div");
  frontLogo.classList.add("frontLogo");
  frontLogo.appendChild(createStackItem("HTML5"));
  frontLogo.appendChild(createStackItem("CSS3"));
  frontLogo.appendChild(createStackItem("JavaScript"));
  stackFront.appendChild(frontLogo);
  var stackTechnology = document.createElement("div");
  stackTechnology.classList.add("product");
  skillContainer.appendChild(stackTechnology);
  var stackTechnologyTitle = document.createElement("h3");
  stackTechnologyTitle.classList.add("level");
  stackTechnologyTitle.textContent = "Technologys";
  stackFront.appendChild(stackTechnologyTitle);
  var techLogo = document.createElement("div");
  techLogo.classList.add("frontLogo");
  techLogo.appendChild(createStackItem("Git"));
  techLogo.appendChild(createStackItem("WebPack"));
  techLogo.appendChild(createStackItem("npm"));
  techLogo.appendChild(createStackItem("Linux"));
  techLogo.appendChild(createStackItem("GitHub"));
  stackFront.appendChild(techLogo);
  var skillsTitle = document.createElement('h2');
  skillsTitle.classList.add("skillsTitle");
  skillsTitle.textContent = "Tools and Skills";
  skillsDiv.appendChild(skillsTitle);
  var speakDiv = document.createElement('div');
  speakDiv.classList.add("speak");
  createAboutMe.appendChild(speakDiv);
  var englishDiv = document.createElement('div');
  englishDiv.classList.add("country");
  englishDiv.textContent = "I speak English";
  speakDiv.appendChild(englishDiv);
  var englishImg = document.createElement('img');
  englishImg.classList.add('language');
  englishImg.src = "./img/language/uk.svg";
  englishImg.alt = "english";
  englishDiv.appendChild(englishImg);
  var romanianDiv = document.createElement('div');
  romanianDiv.classList.add("country");
  romanianDiv.textContent = "Vorbesc românește";
  speakDiv.appendChild(romanianDiv);
  var romanianImg = document.createElement('img');
  romanianImg.classList.add('language');
  romanianImg.src = "./img/language/ro.png";
  romanianImg.alt = "ro";
  romanianDiv.appendChild(romanianImg);
  var deDiv = document.createElement('div');
  deDiv.classList.add("country");
  deDiv.textContent = "Ich spreche deutsch";
  speakDiv.appendChild(deDiv);
  var deImg = document.createElement('img');
  deImg.classList.add('language');
  deImg.src = "./img/language/de.png";
  deImg.alt = "de";
  deDiv.appendChild(deImg);
  return createAboutMe;
}

function createStackItem(name) {
  var stackItem = document.createElement("div");
  stackItem.classList.add("stack-item");
  var stackName = document.createElement("h4");
  stackName.textContent = name;
  var stackImage = document.createElement("img");
  stackImage.src = "./img/stack/".concat(name.toLowerCase(), ".png");
  stackImage.alt = "".concat(name);
  stackImage.classList.add("stack");
  stackItem.appendChild(stackImage);
  stackItem.appendChild(stackName);
  return stackItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutSection);
/*


   

   
 
*/

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactSection() {
  var contact = document.createElement("section");
  contact.setAttribute("id", "contact");
  contact.classList.add("contact");
  var contactTitle = document.createElement("h2");
  contactTitle.classList.add("contact");
  contactTitle.textContent = "[2]contact";
  contact.appendChild(contactTitle);
  var contactContent = document.createElement("div");
  contactContent.classList.add("contactContent");
  contact.appendChild(contactContent);
  var contactText = document.createElement("p");
  contactText.classList.add("contactText");
  contactText.textContent = "I'm currently interested in a Front-end developer. Please do not hesitate to contact me if you have any questions about additional credentials or the design of this website.";
  contactContent.appendChild(contactText);
  var contactList = document.createElement("div");
  contactList.classList.add("contactList");
  contactContent.appendChild(contactList);
  var listTile = document.createElement("p");
  listTile.classList.add("listTitle");
  listTile.textContent = "You can write me an e-mail at: cigmaian1@gmail.com";
  contactList.appendChild(listTile);
  var listSecTitle = document.createElement("p");
  listSecTitle.classList.add("listSecTitle");
  listSecTitle.textContent = "OR";
  contactList.appendChild(listSecTitle);
  var listIcons = document.createElement("div");
  listIcons.classList.add("listIcons");
  contactList.appendChild(listIcons);
  var listIconsTitle = document.createElement("p");
  listIconsTitle.classList.add("listIconsTitle");
  listIconsTitle.textContent = "Reach me through social media";
  listIcons.appendChild(listIconsTitle);
  var imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  listIcons.appendChild(imgDiv);
  var listGitIcon = document.createElement("img");
  listGitIcon.classList.add("listGitIcon");
  listGitIcon.src = "img/stack/github.png";
  listGitIcon.alt = "git log";
  var gitLink = document.createElement("a");
  gitLink.href = "https://github.com/cigmaian";
  gitLink.target = "_blank";
  gitLink.appendChild(listGitIcon);
  listIcons.appendChild(gitLink);
  var listIn = document.createElement("img");
  listIn.classList.add("listIn");
  listIn.src = "img/stack/li.png";
  listIn.alt = "linkedIn logo";
  var inLogo = document.createElement("a");
  inLogo.href = "https://ro.linkedin.com/in/andrei-cigmaian/ro";
  inLogo.target = "_blank";
  inLogo.appendChild(listIn);
  listIcons.appendChild(inLogo);
  imgDiv.appendChild(gitLink);
  imgDiv.appendChild(inLogo);
  return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactSection);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createIntro() {
  var introContent = document.createElement('div');
  introContent.classList.add('introContent');
  var titleIntro = document.createElement('h1');
  titleIntro.classList.add('titleIntro');
  titleIntro.textContent = "Hello,";
  introContent.appendChild(titleIntro);
  var nameIntro = document.createElement('p');
  nameIntro.classList.add('nameIntro');
  nameIntro.textContent = "I'm Cigmaian Andrei.";
  introContent.appendChild(nameIntro);
  var text1 = document.createElement('p');
  text1.classList.add('text1');
  text1.textContent = "I build digital experiences.";
  introContent.appendChild(text1);
  /*
  const text2 = document.createElement('p');
  text2.classList.add('text2');
  text2.textContent = "I'm a Front-end developer who carries a keen eye for design in an user-first approach. My current focus is in creating responsive layouts on the JavaScript stack of React and NodeJS which I have been exploring recently, and from my background as an physicist I'm well acquainted to bringing out solutions to complex problems.";
  introContent.appendChild(text2);
  */

  return introContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createIntro);
/*
function createIntro(){

    const introContent = document.createElement('div');
    introContent.classList.add('introContent');

    const titleIntro = document.createElement('h1');
    titleIntro.classList.add('titleIntro');
    titleIntro.textContent = "Hi I am Andrei";
    introContent.appendChild(titleIntro);


    const nameIntro = document.createElement('p');
    nameIntro.classList.add('nameIntro');
    nameIntro.textContent = "Cigmaian Andrei.";
    introContent.appendChild(nameIntro);

    const text1 = document.createElement('p');
    text1.classList.add('text1');
    text1.textContent = " ";
    introContent.appendChild(text1);

    const text2 = document.createElement('p');
    text2.classList.add('text2');
    text2.textContent = " ";
    introContent.appendChild(text2);

    return introContent;
}

function loadIntro(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createIntro());
}

export default loadIntro;

*/

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _work_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work.js */ "./src/work.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






function createHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  var headerLogo = document.createElement("h1");
  headerLogo.classList.add("headerLogo");
  headerLogo.textContent = "[CA]";
  header.appendChild(headerLogo);
  header.appendChild(createNav());
  return header;
}

function createNav() {
  var nav = document.createElement("nav");
  var aboutMenu = document.createElement("a");
  aboutMenu.classList.add("navLink");
  aboutMenu.textContent = "[0]aboutMe";
  aboutMenu.href = "#about";
  var workMenu = document.createElement("a");
  workMenu.classList.add("navLink");
  workMenu.textContent = "[1]myWork";
  workMenu.href = "#mywork";
  var contactMenu = document.createElement("a");
  contactMenu.classList.add("navLink");
  contactMenu.textContent = "[2]contact";
  contactMenu.href = "#contact";
  nav.appendChild(aboutMenu);
  nav.appendChild(workMenu);
  nav.appendChild(contactMenu);
  return nav;
}

function createMain() {
  var main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  main.appendChild((0,_main_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  main.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  main.appendChild((0,_work_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
  main.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
  return main;
}
/*

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  
  const copyright = document.createElement("p");
  copyright.textContent = `Designed & Built by Cigmaian Andrei © ${new Date().getFullYear()}`;

  
  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/cigmaian";

  const githubIcon = document.createElement("img");
  githubIcon.src= `img/stack/github.png`;
  githubIcon.alt = "git-img";
  githubIcon.classList.add('git');    

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubLink);
  
  
  footer.appendChild(copyright);

  return footer;
}
*/


function initializeWebsite() {
  var content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  /*
  content.appendChild(createFooter());
  */
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/work.js":
/*!*********************!*\
  !*** ./src/work.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function workSection() {
  var createWork = document.createElement("section");
  createWork.setAttribute("id", "mywork");
  createWork.classList.add("createWork");
  var myWork = document.createElement('h2');
  myWork.classList.add("myWork");
  myWork.textContent = "[1]myWork";
  createWork.appendChild(myWork);
  createWork.appendChild(createWorkItem("Restaurant Page", "Restaurant Web Page build with HTML5, CSS3, JavaScrip, WebPack & Git. The site consist of home page, menu page, contact page The aim of the project was to make a functional multi page Restaurant website using WebPack to bundle files and Javscript DOM manipulation.", "https://github.com/cigmaian/restaurant-page-online", "https://cigmaian.github.io/restaurant-page-online/"));
  createWork.appendChild(createWorkItem("Etch-a-Sketch", " The project was build with HTML5, CSS3, JavaScrip. The idea behind the app was to recreate the good old childhood draw board. App feaures: Select grid size, Random color button option, Custom color Selector, Canvas option.", "https://github.com/cigmaian/Etch-a-Sketch", "https://cigmaian.github.io/Etch-a-Sketch/"));
  createWork.appendChild(createWorkItem("Library App", "A small Library app, created with HTML5, CSS3 and JavaScript. The data is stored in localStorage. Features: Search bar implementation, You can delete any of your books, Can update whether you've read any of the books in your library", "https://github.com/cigmaian/Project-Library", "https://cigmaian.github.io/Project-Library/"));
  createWork.appendChild(createWorkItem("Online Calculator", "An online calculator with basic arithmetic operations, application developed using HTML5, CSS3, JavaScrip. Features: Keyboard inputs are supported for numbers, opertaors and other options, Comes with options to clear/delete a single input OR clear the whole display.", "https://github.com/cigmaian/Calculator", "https://cigmaian.github.io/Calculator/"));
  createWork.appendChild(createWorkItem("Sign-up-Form", "A sing-up form built using HTML5, CSS3 and JavaScript. Features: Dark mode, Hover effect on logo, buttons and log in.", "https://github.com/cigmaian/Sign-up-Form", "https://cigmaian.github.io/Sign-up-Form/"));
  createWork.appendChild(createWorkItem("Gun-Farmer-Bear", "This is my first game developed using HTML5, CSS3 and JavaScript. Check GitHub for more in depth details of the development stages.", "https://github.com/cigmaian/GUN-FARMER-BEAR", "https://cigmaian.github.io/GUN-FARMER-BEAR/"));
  createWork.appendChild(createWorkItem("Tic-Tac-Toe", "The famouse Tic Tac Toe game made with HTML5, CSS3 and JavaScript! I used this project to practice simple algorithms and using event listeners. Features: Two player mode, Checks for a winner or if there is a tie.", "https://github.com/cigmaian/Tic-Tac-Toe", "https://cigmaian.github.io/Tic-Tac-Toe/"));
  return createWork;
}

function createWorkItem(name, description, linkCode, linkLive) {
  var projectGrid = document.createElement("div");
  projectGrid.classList.add("grid"); //product landing page 48 html

  var projectImg = document.createElement("img");
  projectImg.classList.add("projectImg");
  projectImg.src = "./img/projects/".concat(name.toLowerCase(), ".png");
  projectImg.alt = "".concat(name);
  var projectDescription = document.createElement("div");
  projectDescription.classList.add("projectDescription");
  var projectTitle = document.createElement("h6");
  projectTitle.classList.add("projectTitle");
  projectTitle.textContent = name;
  var projectText = document.createElement("p");
  projectText.classList.add("projectText");
  projectText.textContent = description;
  var projectButtons = document.createElement("div");
  projectButtons.classList.add("projectButtons");
  var reviewButton = document.createElement("a");
  reviewButton.classList.add("reviewButton");
  reviewButton.href = linkCode;
  reviewButton.target = "_blank";
  reviewButton.textContent = "{REVIEW THE CODE}";
  var liveButton = document.createElement("a");
  liveButton.classList.add("liveButton");
  liveButton.href = linkLive;
  liveButton.target = "_blank";
  liveButton.textContent = "[SEE IT LIVE]";
  projectButtons.appendChild(liveButton);
  projectButtons.appendChild(reviewButton);
  projectDescription.appendChild(projectTitle);
  projectDescription.appendChild(projectText);
  projectDescription.appendChild(projectButtons);
  projectGrid.appendChild(projectDescription);
  projectGrid.appendChild(projectImg);
  /*
    projectGrid.appendChild(projectButtons);
  */

  return projectGrid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (workSection);
/*


 const projectGrid = document.createElement("div");
    projectGrid.classList.add("grid"); //product landing page 48 html
    createWork.appendChild(projectGrid);

    const projectImg = document.createElement("img");
    projectImg.classList.add("projectImg");
    projectImg.src = "./img/projects/restaurant.png";
    projectImg.alt = "restaurant page";
    projectGrid.appendChild(projectImg);
    
    const projectDescription = document.createElement("div");
    projectDescription.classList.add("projectDescription");
    projectGrid.appendChild(projectDescription);

    const projectTitle = document.createElement('h6');
    projectTitle.classList.add("projectTitle");
    projectTitle.textContent = "TTTTTTTT";
    projectDescription.appendChild(projectTitle);

    const projectText = document.createElement("p");
    projectText.classList.add("projectText");
    projectText.textContent = "ggggggggggggg";
    projectDescription.appendChild(projectText);

    const projectButtons = document.createElement("div");
    projectButtons.classList.add("projectButtons");
    projectGrid.appendChild(projectButtons);

    const reviewButton = document.createElement("a");
    reviewButton.classList.add("reviewButton");
    reviewButton.href = "";
    reviewButton.textContent = "REVIEW THE CODE";
    projectButtons.appendChild(reviewButton);

    const liveButton = document.createElement("a");
    liveButton.classList.add("liveButton");
    liveButton.href =" ";
    liveButton.textContent = "SEE IT LIVE";
    projectButtons.appendChild(liveButton);

     


 
*/

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Open+Sans:wght@300&family=Special+Elite&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Special+Elite&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 80%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 2.5vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: var(--black);\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color: var(--black); \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: var(--black);\n  margin-top: 15vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n}\n\n.titleIntro{\n  font-size: calc(100px + 1vw);\n  margin-top: 80px;\n \n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(70px + 1vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n  width: 28ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n}\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: var(--black);\n  border-radius: 20px; \n  position: relative;\n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n  \n}\n\n.stack-item{\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.stack-item h4{\n  color:var(--white);\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n\n.frontLogo .stack-item:nth-child(4) img{\n background: var(--white);\n border-radius: 10px;\n \n}\n\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: var(--white);\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: var(--black);\n}\n\n.speak .country{\n  color: var(--white);\n  align-items: center;\n  display: flex;  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: var(--black);\n  border-radius: 50%;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n}\n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 80%;\n}\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n  .myWork:hover{\n    color: var(--font-color-orange);\n    opacity: .9;\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n  padding: 0px;\n}\n\n.projectImg {\n  display: block;\n  height: auto;\n  width: 80%;\n  margin: 10px 0;\n  border-radius: 30px; \n  border: 1px solid var(--black);\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px;\n  text-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n}\n\n.liveButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  padding: 30px 30px 0 30px;\n}\n\n.contact h2{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.contact h2:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.contactContent{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.contactText{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  font-size: calc(24px + .1vw);\n}\n\n.contactList{\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n  .listTitle{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listSecTitle{\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n\n.listIconsTitle{\n  width: 100%;\n  text-align: center;\n}\n\n.listIcons{\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listIcons a{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listIcons a img{\n  display: block;\n  width: calc(45px + 1vw);\n  height: auto;\n  margin: 25px 15px 10px 10px;\n  transition: transform .3s ease-in-out;\n \n}\n\n.listIcons a img:hover{\n  transform: scale(1.2);\n}\n\n.imgDiv{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: larger;\n}\n\n/* Footer */\n\n.wave {\n position: relative;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  color: var(--black);\n  background-color:var(--white);\n}\n\n.wave {\n  width: 100%;\n  margin: 0  auto;\n  position:relative;\n  text-align:center;\n  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);\n  color:white;\n}\n\n.waves {\n  position:relative;\n  width: 100%;\n  height:15vh;\n  margin-bottom:-8px; /*Fix for safari gap*/\n  min-height:100px;\n  max-height:150px;\n}\n\n/* Animation */\n\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n   transform: translate3d(-90px,0,0);\n  }\n  100% { \n    transform: translate3d(85px,0,0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waves {\n    text-align: center;\n    height:40px;\n    min-height:40px;\n  }\n}\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n}\n  #content{\n    width: 100%;\n}\n\n  .header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n  .headerLogo{\n    margin-left: 0px;\n    padding-top: 1px;\n}\n\n  nav{\n    margin-top: 15px;\n    margin-right: 0px;\n}\n\n  .frontLogo{\n    gap:1rem;\n}\n\n  .listIcons a img{\n    width: 15vw;\n  }\n  .copyright {\n  display: flex;\n  flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n\n  .frontLogo{\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n\n  .speak{\n    width: auto;\n  }\n\n  #content{\n  width: 100%;\n  }\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n\n@media (max-width: 1450px){\n  .contactContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contactText{\n    width: 85%;\n    display: flex;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactList{\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactText{\n    text-align: center;\n    font-size: calc(20px + .1vw);\n  }\n}\n\n\n@media (max-width: 650px){\n  .projectButtons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    margin-top: 40px;\n  }\n}\n\n@media (max-width: 1750px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n\n  .contact{\n    margin-top: -5px;\n  }\n\n  .contact h2{\n  margin-bottom: 30px;\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  text-align: center;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  };\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Open+Sans:wght@300&family=Special+Elite&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Special+Elite&display=swap');\n\n:root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 80%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 2.5vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: var(--black);\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color: var(--black); \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: var(--black);\n  margin-top: 15vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n}\n\n.titleIntro{\n  font-size: calc(100px + 1vw);\n  margin-top: 80px;\n \n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(70px + 1vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n  width: 28ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n}\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: var(--black);\n  border-radius: 20px; \n  position: relative;\n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n  \n}\n\n.stack-item{\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.stack-item h4{\n  color:var(--white);\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n\n.frontLogo .stack-item:nth-child(4) img{\n background: var(--white);\n border-radius: 10px;\n \n}\n\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: var(--white);\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: var(--black);\n}\n\n.speak .country{\n  color: var(--white);\n  align-items: center;\n  display: flex;  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: var(--black);\n  border-radius: 50%;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n}\n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 80%;\n}\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n  .myWork:hover{\n    color: var(--font-color-orange);\n    opacity: .9;\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n  padding: 0px;\n}\n\n.projectImg {\n  display: block;\n  height: auto;\n  width: 80%;\n  margin: 10px 0;\n  border-radius: 30px; \n  border: 1px solid var(--black);\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px;\n  text-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n}\n\n.liveButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  padding: 30px 30px 0 30px;\n}\n\n.contact h2{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.contact h2:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.contactContent{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.contactText{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  font-size: calc(24px + .1vw);\n}\n\n.contactList{\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n  .listTitle{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listSecTitle{\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n\n.listIconsTitle{\n  width: 100%;\n  text-align: center;\n}\n\n.listIcons{\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listIcons a{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listIcons a img{\n  display: block;\n  width: calc(45px + 1vw);\n  height: auto;\n  margin: 25px 15px 10px 10px;\n  transition: transform .3s ease-in-out;\n \n}\n\n.listIcons a img:hover{\n  transform: scale(1.2);\n}\n\n.imgDiv{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: larger;\n}\n\n/* Footer */\n\n.wave {\n position: relative;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  color: var(--black);\n  background-color:var(--white);\n}\n\n.wave {\n  width: 100%;\n  margin: 0  auto;\n  position:relative;\n  text-align:center;\n  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);\n  color:white;\n}\n\n.waves {\n  position:relative;\n  width: 100%;\n  height:15vh;\n  margin-bottom:-8px; /*Fix for safari gap*/\n  min-height:100px;\n  max-height:150px;\n}\n\n/* Animation */\n\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n   transform: translate3d(-90px,0,0);\n  }\n  100% { \n    transform: translate3d(85px,0,0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waves {\n    text-align: center;\n    height:40px;\n    min-height:40px;\n  }\n}\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n}\n  #content{\n    width: 100%;\n}\n\n  .header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n  .headerLogo{\n    margin-left: 0px;\n    padding-top: 1px;\n}\n\n  nav{\n    margin-top: 15px;\n    margin-right: 0px;\n}\n\n  .frontLogo{\n    gap:1rem;\n}\n\n  .listIcons a img{\n    width: 15vw;\n  }\n  .copyright {\n  display: flex;\n  flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n\n  .frontLogo{\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n\n  .speak{\n    width: auto;\n  }\n\n  #content{\n  width: 100%;\n  }\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n\n@media (max-width: 1450px){\n  .contactContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contactText{\n    width: 85%;\n    display: flex;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactList{\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactText{\n    text-align: center;\n    font-size: calc(20px + .1vw);\n  }\n}\n\n\n@media (max-width: 650px){\n  .projectButtons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    margin-top: 40px;\n  }\n}\n\n@media (max-width: 1750px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n\n  .contact{\n    margin-top: -5px;\n  }\n\n  .contact h2{\n  margin-bottom: 30px;\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  text-align: center;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  };\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");

(0,_website_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSx3QkFBd0IsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sS0FBSyxL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cGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL3dvcmsuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dFNlY3Rpb24oKXtcblxuICAgIGNvbnN0IGNyZWF0ZUFib3V0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY3JlYXRlQWJvdXRNZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICAgIGNyZWF0ZUFib3V0TWUuY2xhc3NMaXN0LmFkZChcImNyZWF0ZUFib3V0TWVcIik7XG5cbiAgICBjb25zdCBhYm91dE1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRNZURpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZURpdlwiKTtcbiAgICBcbiAgICBjcmVhdGVBYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVEaXYpO1xuXG4gICAgXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgICBhYm91dE1lRGl2LmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gICAgY29uc3QgYWJvdXRNZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dE1lVGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0TWVUaXRsZVwiKTtcbiAgICBhYm91dE1lVGl0bGUudGV4dENvbnRlbnQgPSBcIlswXWFib3V0TWVcIjtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGFib3V0TWVUaXRsZSk7XG5cbiAgICBjb25zdCBhYm91dE1lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRNZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lRGVzY3JpcHRpb25cIik7XG4gICAgYWJvdXRNZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJJJ20gYSBGcm9udC1lbmQgZGV2ZWxvcGVyIHdobyBjYXJyaWVzIGEga2VlbiBleWUgZm9yIGRlc2lnbiBpbiBhbiB1c2VyLWZpcnN0IGFwcHJvYWNoLiBNeSBjdXJyZW50IGZvY3VzIGlzIGluIGNyZWF0aW5nIHJlc3BvbnNpdmUgbGF5b3V0cyBvbiB0aGUgSmF2YVNjcmlwdCBzdGFjayBvZiBSZWFjdCBhbmQgTm9kZUpTIHdoaWNoIEkgaGF2ZSBiZWVuIGV4cGxvcmluZyByZWNlbnRseSwgYW5kIGZyb20gbXkgYmFja2dyb3VuZCBhcyBhbiBwaHlzaWNpc3QgSSdtIHdlbGwgYWNxdWFpbnRlZCB0byBicmluZ2luZyBvdXQgc29sdXRpb25zIHRvIGNvbXBsZXggcHJvYmxlbXMuXCI7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoYWJvdXRNZURlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHNraWxsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNraWxsc0Rpdi5jbGFzc0xpc3QuYWRkKFwic2tpbGxzXCIpO1xuICAgIGNyZWF0ZUFib3V0TWUuYXBwZW5kQ2hpbGQoc2tpbGxzRGl2KTtcblxuICAgIFxuXG4gICAgY29uc3Qgc2tpbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBwcmljaW5nXG4gICAgc2tpbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNraWxsQ29udGFpbmVyXCIpOyBcbiAgICBza2lsbHNEaXYuYXBwZW5kQ2hpbGQoc2tpbGxDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3RhY2tGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhY2tGcm9udC5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdFwiKTtcbiAgICBza2lsbENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFja0Zyb250KTsgICAgXG5cbiAgICBjb25zdCBzdGFja0Zyb250VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgc3RhY2tGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsZXZlbFwiKTtcbiAgICBzdGFja0Zyb250VGl0bGUudGV4dENvbnRlbnQgPSBcIkZyb250LWVuZFwiO1xuICAgIHN0YWNrRnJvbnQuYXBwZW5kQ2hpbGQoc3RhY2tGcm9udFRpdGxlKTtcblxuICAgIGNvbnN0IGZyb250TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnRMb2dvLmNsYXNzTGlzdC5hZGQoXCJmcm9udExvZ29cIik7XG4gICAgZnJvbnRMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkhUTUw1XCIpKTtcbiAgICBmcm9udExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiQ1NTM1wiKSk7XG4gICAgZnJvbnRMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkphdmFTY3JpcHRcIikpO1xuICAgIFxuICAgIHN0YWNrRnJvbnQuYXBwZW5kQ2hpbGQoZnJvbnRMb2dvKTtcblxuICAgIGNvbnN0IHN0YWNrVGVjaG5vbG9neSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhY2tUZWNobm9sb2d5LmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0XCIpO1xuICAgIHNraWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YWNrVGVjaG5vbG9neSk7XG5cbiAgICBjb25zdCBzdGFja1RlY2hub2xvZ3lUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBzdGFja1RlY2hub2xvZ3lUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGV2ZWxcIik7XG4gICAgc3RhY2tUZWNobm9sb2d5VGl0bGUudGV4dENvbnRlbnQgPSBcIlRlY2hub2xvZ3lzXCI7XG4gICAgc3RhY2tGcm9udC5hcHBlbmRDaGlsZChzdGFja1RlY2hub2xvZ3lUaXRsZSk7XG5cbiAgICBjb25zdCB0ZWNoTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVjaExvZ28uY2xhc3NMaXN0LmFkZChcImZyb250TG9nb1wiKTtcbiAgICB0ZWNoTG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJHaXRcIikpO1xuICAgIHRlY2hMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIldlYlBhY2tcIikpO1xuICAgIHRlY2hMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIm5wbVwiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiTGludXhcIikpO1xuICAgIHRlY2hMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkdpdEh1YlwiKSk7XG4gICBcblxuICAgIHN0YWNrRnJvbnQuYXBwZW5kQ2hpbGQodGVjaExvZ28pO1xuXG4gICAgY29uc3Qgc2tpbGxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNraWxsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJza2lsbHNUaXRsZVwiKTtcbiAgICBza2lsbHNUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9vbHMgYW5kIFNraWxsc1wiO1xuICAgIHNraWxsc0Rpdi5hcHBlbmRDaGlsZChza2lsbHNUaXRsZSk7XG5cbiAgICBjb25zdCBzcGVha0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWFrRGl2LmNsYXNzTGlzdC5hZGQoXCJzcGVha1wiKTtcbiAgICBjcmVhdGVBYm91dE1lLmFwcGVuZENoaWxkKHNwZWFrRGl2KTtcblxuICAgIGNvbnN0IGVuZ2xpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbmdsaXNoRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuICAgIGVuZ2xpc2hEaXYudGV4dENvbnRlbnQgPSBcIkkgc3BlYWsgRW5nbGlzaFwiO1xuICAgIHNwZWFrRGl2LmFwcGVuZENoaWxkKGVuZ2xpc2hEaXYpO1xuXG4gICAgY29uc3QgZW5nbGlzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVuZ2xpc2hJbWcuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2UnKTtcbiAgICBlbmdsaXNoSW1nLnNyYyA9IFwiLi9pbWcvbGFuZ3VhZ2UvdWsuc3ZnXCI7XG4gICAgZW5nbGlzaEltZy5hbHQgPSBcImVuZ2xpc2hcIjtcbiAgICBlbmdsaXNoRGl2LmFwcGVuZENoaWxkKGVuZ2xpc2hJbWcpO1xuXG4gICAgY29uc3Qgcm9tYW5pYW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb21hbmlhbkRpdi5jbGFzc0xpc3QuYWRkKFwiY291bnRyeVwiKTtcbiAgICByb21hbmlhbkRpdi50ZXh0Q29udGVudCA9IFwiVm9yYmVzYyByb23Dom5lyJl0ZVwiO1xuICAgIHNwZWFrRGl2LmFwcGVuZENoaWxkKHJvbWFuaWFuRGl2KTtcblxuICAgIGNvbnN0IHJvbWFuaWFuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcm9tYW5pYW5JbWcuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2UnKTtcbiAgICByb21hbmlhbkltZy5zcmMgPSBcIi4vaW1nL2xhbmd1YWdlL3JvLnBuZ1wiO1xuICAgIHJvbWFuaWFuSW1nLmFsdCA9IFwicm9cIjtcbiAgICByb21hbmlhbkRpdi5hcHBlbmRDaGlsZChyb21hbmlhbkltZyk7XG5cblxuICAgIGNvbnN0IGRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVEaXYuY2xhc3NMaXN0LmFkZChcImNvdW50cnlcIik7XG4gICAgZGVEaXYudGV4dENvbnRlbnQgPSBcIkljaCBzcHJlY2hlIGRldXRzY2hcIjtcbiAgICBzcGVha0Rpdi5hcHBlbmRDaGlsZChkZURpdik7XG5cbiAgICBjb25zdCBkZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlSW1nLmNsYXNzTGlzdC5hZGQoJ2xhbmd1YWdlJyk7XG4gICAgZGVJbWcuc3JjID0gXCIuL2ltZy9sYW5ndWFnZS9kZS5wbmdcIjtcbiAgICBkZUltZy5hbHQgPSBcImRlXCI7XG4gICAgZGVEaXYuYXBwZW5kQ2hpbGQoZGVJbWcpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUFib3V0TWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YWNrSXRlbShuYW1lKXtcbiAgICBjb25zdCBzdGFja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YWNrSXRlbS5jbGFzc0xpc3QuYWRkKFwic3RhY2staXRlbVwiKTtcbiAgICBcbiAgICBjb25zdCBzdGFja05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgc3RhY2tOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHN0YWNrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHN0YWNrSW1hZ2Uuc3JjID0gYC4vaW1nL3N0YWNrLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgIHN0YWNrSW1hZ2UuYWx0ID0gYCR7bmFtZX1gO1xuICAgIHN0YWNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN0YWNrXCIpO1xuXG4gICAgc3RhY2tJdGVtLmFwcGVuZENoaWxkKHN0YWNrSW1hZ2UpO1xuICAgIHN0YWNrSXRlbS5hcHBlbmRDaGlsZChzdGFja05hbWUpO1xuICAgIFxuICAgIHJldHVybiBzdGFja0l0ZW07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRTZWN0aW9uO1xuXG4vKlxuXG5cbiAgIFxuXG4gICBcbiBcbiovIiwiZnVuY3Rpb24gY29udGFjdFNlY3Rpb24oKXtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJbMl1jb250YWN0XCI7XG4gICAgXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGVudFwiKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gXCJJJ20gY3VycmVudGx5IGludGVyZXN0ZWQgaW4gYSBGcm9udC1lbmQgZGV2ZWxvcGVyLiBQbGVhc2UgZG8gbm90IGhlc2l0YXRlIHRvIGNvbnRhY3QgbWUgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBhYm91dCBhZGRpdGlvbmFsIGNyZWRlbnRpYWxzIG9yIHRoZSBkZXNpZ24gb2YgdGhpcyB3ZWJzaXRlLlwiXG5cbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5cbiAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdExpc3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RMaXN0XCIpO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RMaXN0KTtcbiAgICBcbiAgICBjb25zdCBsaXN0VGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpc3RUaWxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0VGl0bGVcIik7XG4gICAgbGlzdFRpbGUudGV4dENvbnRlbnQgPSBcIllvdSBjYW4gd3JpdGUgbWUgYW4gZS1tYWlsIGF0OiBjaWdtYWlhbjFAZ21haWwuY29tXCI7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQobGlzdFRpbGUpO1xuXG4gICAgY29uc3QgbGlzdFNlY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGlzdFNlY1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0U2VjVGl0bGVcIik7XG4gICAgbGlzdFNlY1RpdGxlLnRleHRDb250ZW50ID0gXCJPUlwiO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RTZWNUaXRsZSk7XG5cbiAgICBjb25zdCBsaXN0SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpc3RJY29ucy5jbGFzc0xpc3QuYWRkKFwibGlzdEljb25zXCIpO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJY29ucyk7XG5cbiAgICBjb25zdCBsaXN0SWNvbnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpc3RJY29uc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0SWNvbnNUaXRsZVwiKTtcbiAgICBsaXN0SWNvbnNUaXRsZS50ZXh0Q29udGVudCA9IFwiUmVhY2ggbWUgdGhyb3VnaCBzb2NpYWwgbWVkaWFcIjtcbiAgICBsaXN0SWNvbnMuYXBwZW5kQ2hpbGQobGlzdEljb25zVGl0bGUpO1xuXG4gICAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcImltZ0RpdlwiKTtcbiAgICBsaXN0SWNvbnMuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcblxuICAgIGNvbnN0IGxpc3RHaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsaXN0R2l0SWNvbi5jbGFzc0xpc3QuYWRkKFwibGlzdEdpdEljb25cIik7XG4gICAgbGlzdEdpdEljb24uc3JjID0gXCJpbWcvc3RhY2svZ2l0aHViLnBuZ1wiO1xuICAgIGxpc3RHaXRJY29uLmFsdCA9IFwiZ2l0IGxvZ1wiO1xuICAgIFxuXG4gICAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuXCI7XG4gICAgZ2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChsaXN0R2l0SWNvbik7XG4gICAgbGlzdEljb25zLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG4gICAgY29uc3QgbGlzdEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsaXN0SW4uY2xhc3NMaXN0LmFkZChcImxpc3RJblwiKTtcbiAgICBsaXN0SW4uc3JjID0gXCJpbWcvc3RhY2svbGkucG5nXCI7XG4gICAgbGlzdEluLmFsdCA9IFwibGlua2VkSW4gbG9nb1wiO1xuXG4gICAgY29uc3QgaW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgaW5Mb2dvLmhyZWYgPSBcImh0dHBzOi8vcm8ubGlua2VkaW4uY29tL2luL2FuZHJlaS1jaWdtYWlhbi9yb1wiO1xuICAgIGluTG9nby50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgaW5Mb2dvLmFwcGVuZENoaWxkKGxpc3RJbik7XG4gICAgbGlzdEljb25zLmFwcGVuZENoaWxkKGluTG9nbyk7XG5cbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGluTG9nbyk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0U2VjdGlvbjsiLCJcbmZ1bmN0aW9uIGNyZWF0ZUludHJvKCl7XG4gICBcbiAgICBjb25zdCBpbnRyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW50cm9Db250ZW50Jyk7XG5cbiAgICBjb25zdCB0aXRsZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUludHJvLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSW50cm8nKTtcbiAgICB0aXRsZUludHJvLnRleHRDb250ZW50ID0gXCJIZWxsbyxcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnRybyk7XG5cblxuICAgIGNvbnN0IG5hbWVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lSW50cm8uY2xhc3NMaXN0LmFkZCgnbmFtZUludHJvJyk7XG4gICAgbmFtZUludHJvLnRleHRDb250ZW50ID0gXCJJJ20gQ2lnbWFpYW4gQW5kcmVpLlwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZChuYW1lSW50cm8pO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgndGV4dDEnKTtcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSSBidWlsZCBkaWdpdGFsIGV4cGVyaWVuY2VzLlwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG5cbiAgICAvKlxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHQyJyk7XG4gICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIkknbSBhIEZyb250LWVuZCBkZXZlbG9wZXIgd2hvIGNhcnJpZXMgYSBrZWVuIGV5ZSBmb3IgZGVzaWduIGluIGFuIHVzZXItZmlyc3QgYXBwcm9hY2guIE15IGN1cnJlbnQgZm9jdXMgaXMgaW4gY3JlYXRpbmcgcmVzcG9uc2l2ZSBsYXlvdXRzIG9uIHRoZSBKYXZhU2NyaXB0IHN0YWNrIG9mIFJlYWN0IGFuZCBOb2RlSlMgd2hpY2ggSSBoYXZlIGJlZW4gZXhwbG9yaW5nIHJlY2VudGx5LCBhbmQgZnJvbSBteSBiYWNrZ3JvdW5kIGFzIGFuIHBoeXNpY2lzdCBJJ20gd2VsbCBhY3F1YWludGVkIHRvIGJyaW5naW5nIG91dCBzb2x1dGlvbnMgdG8gY29tcGxleCBwcm9ibGVtcy5cIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICAgICovXG4gICAgcmV0dXJuIGludHJvQ29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW50cm87XG5cblxuXG5cbi8qXG5mdW5jdGlvbiBjcmVhdGVJbnRybygpe1xuXG4gICAgY29uc3QgaW50cm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2ludHJvQ29udGVudCcpO1xuXG4gICAgY29uc3QgdGl0bGVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVJbnRyby5jbGFzc0xpc3QuYWRkKCd0aXRsZUludHJvJyk7XG4gICAgdGl0bGVJbnRyby50ZXh0Q29udGVudCA9IFwiSGkgSSBhbSBBbmRyZWlcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnRybyk7XG5cblxuICAgIGNvbnN0IG5hbWVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lSW50cm8uY2xhc3NMaXN0LmFkZCgnbmFtZUludHJvJyk7XG4gICAgbmFtZUludHJvLnRleHRDb250ZW50ID0gXCJDaWdtYWlhbiBBbmRyZWkuXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnRybyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0MScpO1xuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHQyJyk7XG4gICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dDIpO1xuXG4gICAgcmV0dXJuIGludHJvQ29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9hZEludHJvKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUludHJvKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSW50cm87XG5cbiovXG5cbiIsIlxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbWFpbi5jc3MnO1xuaW1wb3J0IGFib3V0U2VjdGlvbiBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IGNyZWF0ZUludHJvIGZyb20gXCIuL21haW4uanNcIjtcbmltcG9ydCB3b3JrU2VjdGlvbiBmcm9tIFwiLi93b3JrLmpzXCI7XG5pbXBvcnQgY29udGFjdFNlY3Rpb24gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG5cbiBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJMb2dvLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJMb2dvXCIpO1xuICBoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJbQ0FdXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuICBcbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4gIGNvbnN0IGFib3V0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhYm91dE1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtcIik7XG4gIGFib3V0TWVudS50ZXh0Q29udGVudCA9IFwiWzBdYWJvdXRNZVwiO1xuICBhYm91dE1lbnUuaHJlZj1cIiNhYm91dFwiO1xuICBcbiAgY29uc3Qgd29ya01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgd29ya01lbnUuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtcIik7XG4gIHdvcmtNZW51LnRleHRDb250ZW50ID0gXCJbMV1teVdvcmtcIjtcbiAgd29ya01lbnUuaHJlZj1cIiNteXdvcmtcIjtcblxuICBjb25zdCBjb250YWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb250YWN0TWVudS5jbGFzc0xpc3QuYWRkKFwibmF2TGlua1wiKTtcbiAgY29udGFjdE1lbnUudGV4dENvbnRlbnQgPSBcIlsyXWNvbnRhY3RcIjtcbiAgY29udGFjdE1lbnUuaHJlZj1cIiNjb250YWN0XCI7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0TWVudSk7XG4gIG5hdi5hcHBlbmRDaGlsZCh3b3JrTWVudSk7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0TWVudSk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW50cm8oKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKCkpOyAgXG4gICBcbiAgbWFpbi5hcHBlbmRDaGlsZCh3b3JrU2VjdGlvbigpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbigpKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuLypcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgRGVzaWduZWQgJiBCdWlsdCBieSBDaWdtYWlhbiBBbmRyZWkgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YDtcblxuICBcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhblwiO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBnaXRodWJJY29uLnNyYz0gYGltZy9zdGFjay9naXRodWIucG5nYDtcbiAgZ2l0aHViSWNvbi5hbHQgPSBcImdpdC1pbWdcIjtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKCdnaXQnKTsgICAgXG5cbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBcbiAgXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG4qL1xuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAvKlxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCJmdW5jdGlvbiB3b3JrU2VjdGlvbigpe1xuXG4gICAgY29uc3QgY3JlYXRlV29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNyZWF0ZVdvcmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteXdvcmtcIik7XG4gICAgY3JlYXRlV29yay5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlV29ya1wiKTtcblxuICAgIGNvbnN0IG15V29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbXlXb3JrLmNsYXNzTGlzdC5hZGQoXCJteVdvcmtcIik7XG4gICAgbXlXb3JrLnRleHRDb250ZW50ID0gXCJbMV1teVdvcmtcIjtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQobXlXb3JrKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJSZXN0YXVyYW50IFBhZ2VcIixcbiAgICAgICAgICAgIFwiUmVzdGF1cmFudCBXZWIgUGFnZSBidWlsZCB3aXRoIEhUTUw1LCBDU1MzLCBKYXZhU2NyaXAsIFdlYlBhY2sgJiBHaXQuIFRoZSBzaXRlIGNvbnNpc3Qgb2YgaG9tZSBwYWdlLCBtZW51IHBhZ2UsIGNvbnRhY3QgcGFnZSBUaGUgYWltIG9mIHRoZSBwcm9qZWN0IHdhcyB0byBtYWtlIGEgZnVuY3Rpb25hbCBtdWx0aSBwYWdlIFJlc3RhdXJhbnQgd2Vic2l0ZSB1c2luZyBXZWJQYWNrIHRvIGJ1bmRsZSBmaWxlcyBhbmQgSmF2c2NyaXB0IERPTSBtYW5pcHVsYXRpb24uXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9yZXN0YXVyYW50LXBhZ2Utb25saW5lXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvXCJcbiAgICAgICAgKVxuICAgICk7XG4gICAgXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIkV0Y2gtYS1Ta2V0Y2hcIixcbiAgICAgICAgICAgIFwiIFRoZSBwcm9qZWN0IHdhcyBidWlsZCB3aXRoIEhUTUw1LCBDU1MzLCBKYXZhU2NyaXAuIFRoZSBpZGVhIGJlaGluZCB0aGUgYXBwIHdhcyB0byByZWNyZWF0ZSB0aGUgZ29vZCBvbGQgY2hpbGRob29kIGRyYXcgYm9hcmQuIEFwcCBmZWF1cmVzOiBTZWxlY3QgZ3JpZCBzaXplLCBSYW5kb20gY29sb3IgYnV0dG9uIG9wdGlvbiwgQ3VzdG9tIGNvbG9yIFNlbGVjdG9yLCBDYW52YXMgb3B0aW9uLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vRXRjaC1hLVNrZXRjaFwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9FdGNoLWEtU2tldGNoL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIkxpYnJhcnkgQXBwXCIsXG4gICAgICAgICAgICBcIkEgc21hbGwgTGlicmFyeSBhcHAsIGNyZWF0ZWQgd2l0aCBIVE1MNSwgQ1NTMyBhbmQgSmF2YVNjcmlwdC4gVGhlIGRhdGEgaXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZS4gRmVhdHVyZXM6IFNlYXJjaCBiYXIgaW1wbGVtZW50YXRpb24sIFlvdSBjYW4gZGVsZXRlIGFueSBvZiB5b3VyIGJvb2tzLCBDYW4gdXBkYXRlIHdoZXRoZXIgeW91J3ZlIHJlYWQgYW55IG9mIHRoZSBib29rcyBpbiB5b3VyIGxpYnJhcnlcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL1Byb2plY3QtTGlicmFyeVwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9Qcm9qZWN0LUxpYnJhcnkvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiT25saW5lIENhbGN1bGF0b3JcIixcbiAgICAgICAgICAgIFwiQW4gb25saW5lIGNhbGN1bGF0b3Igd2l0aCBiYXNpYyBhcml0aG1ldGljIG9wZXJhdGlvbnMsIGFwcGxpY2F0aW9uIGRldmVsb3BlZCB1c2luZyBIVE1MNSwgQ1NTMywgSmF2YVNjcmlwLiBGZWF0dXJlczogS2V5Ym9hcmQgaW5wdXRzIGFyZSBzdXBwb3J0ZWQgZm9yIG51bWJlcnMsIG9wZXJ0YW9ycyBhbmQgb3RoZXIgb3B0aW9ucywgQ29tZXMgd2l0aCBvcHRpb25zIHRvIGNsZWFyL2RlbGV0ZSBhIHNpbmdsZSBpbnB1dCBPUiBjbGVhciB0aGUgd2hvbGUgZGlzcGxheS5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL0NhbGN1bGF0b3JcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vQ2FsY3VsYXRvci9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJTaWduLXVwLUZvcm1cIixcbiAgICAgICAgICAgIFwiQSBzaW5nLXVwIGZvcm0gYnVpbHQgdXNpbmcgSFRNTDUsIENTUzMgYW5kIEphdmFTY3JpcHQuIEZlYXR1cmVzOiBEYXJrIG1vZGUsIEhvdmVyIGVmZmVjdCBvbiBsb2dvLCBidXR0b25zIGFuZCBsb2cgaW4uXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9TaWduLXVwLUZvcm1cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vU2lnbi11cC1Gb3JtL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIkd1bi1GYXJtZXItQmVhclwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIG15IGZpcnN0IGdhbWUgZGV2ZWxvcGVkIHVzaW5nIEhUTUw1LCBDU1MzIGFuZCBKYXZhU2NyaXB0LiBDaGVjayBHaXRIdWIgZm9yIG1vcmUgaW4gZGVwdGggZGV0YWlscyBvZiB0aGUgZGV2ZWxvcG1lbnQgc3RhZ2VzLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vR1VOLUZBUk1FUi1CRUFSXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL0dVTi1GQVJNRVItQkVBUi9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJUaWMtVGFjLVRvZVwiLFxuICAgICAgICAgICAgXCJUaGUgZmFtb3VzZSBUaWMgVGFjIFRvZSBnYW1lIG1hZGUgd2l0aCBIVE1MNSwgQ1NTMyBhbmQgSmF2YVNjcmlwdCEgSSB1c2VkIHRoaXMgcHJvamVjdCB0byBwcmFjdGljZSBzaW1wbGUgYWxnb3JpdGhtcyBhbmQgdXNpbmcgZXZlbnQgbGlzdGVuZXJzLiBGZWF0dXJlczogVHdvIHBsYXllciBtb2RlLCBDaGVja3MgZm9yIGEgd2lubmVyIG9yIGlmIHRoZXJlIGlzIGEgdGllLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vVGljLVRhYy1Ub2VcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vVGljLVRhYy1Ub2UvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gY3JlYXRlV29yayAgICAgICBcbiAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmtJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBsaW5rQ29kZSwgbGlua0xpdmUpIHtcbiAgICBjb25zdCBwcm9qZWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7IC8vcHJvZHVjdCBsYW5kaW5nIHBhZ2UgNDggaHRtbFxuXG4gICAgY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLnNyYyA9YC4vaW1nL3Byb2plY3RzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgIHByb2plY3RJbWcuYWx0ID0gYCR7bmFtZX1gO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7IFxuICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRleHRcIik7XG4gICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbnNcIik7XG4gICAgXG4gICAgY29uc3QgcmV2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcmV2aWV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdCdXR0b25cIik7XG4gICAgcmV2aWV3QnV0dG9uLmhyZWYgPSBsaW5rQ29kZTtcbiAgICByZXZpZXdCdXR0b24udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICByZXZpZXdCdXR0b24udGV4dENvbnRlbnQgPSBcIntSRVZJRVcgVEhFIENPREV9XCI7XG4gICBcbiAgICBjb25zdCBsaXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGl2ZUJ1dHRvblwiKTtcbiAgICBsaXZlQnV0dG9uLmhyZWYgPSBsaW5rTGl2ZTtcbiAgICBsaXZlQnV0dG9uLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgbGl2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiW1NFRSBJVCBMSVZFXVwiO1xuXG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQobGl2ZUJ1dHRvbik7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQocmV2aWV3QnV0dG9uKTtcblxuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICBcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuICAgIFxuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEltZyk7XG4gIC8qXG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuKi9cbiAgICByZXR1cm4gcHJvamVjdEdyaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdvcmtTZWN0aW9uO1xuXG5cbi8qXG5cblxuIGNvbnN0IHByb2plY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTsgLy9wcm9kdWN0IGxhbmRpbmcgcGFnZSA0OCBodG1sXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChwcm9qZWN0R3JpZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SW1nXCIpO1xuICAgIHByb2plY3RJbWcuc3JjID0gXCIuL2ltZy9wcm9qZWN0cy9yZXN0YXVyYW50LnBuZ1wiO1xuICAgIHByb2plY3RJbWcuYWx0ID0gXCJyZXN0YXVyYW50IHBhZ2VcIjtcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiVFRUVFRUVFRcIjtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RUZXh0XCIpO1xuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJnZ2dnZ2dnZ2dnZ2dnXCI7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbnNcIik7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuXG4gICAgY29uc3QgcmV2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcmV2aWV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdCdXR0b25cIik7XG4gICAgcmV2aWV3QnV0dG9uLmhyZWYgPSBcIlwiO1xuICAgIHJldmlld0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUkVWSUVXIFRIRSBDT0RFXCI7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQocmV2aWV3QnV0dG9uKTtcblxuICAgIGNvbnN0IGxpdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXZlQnV0dG9uXCIpO1xuICAgIGxpdmVCdXR0b24uaHJlZiA9XCIgXCI7XG4gICAgbGl2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0VFIElUIExJVkVcIjtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChsaXZlQnV0dG9uKTtcblxuICAgICBcblxuXG4gXG4qLyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PUxlYWd1ZStHb3RoaWMmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZmYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXJkbzp3Z2h0QDcwMCZmYW1pbHk9TGVhZ3VlK0dvdGhpYyZmYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgLS1mb250LWNvbG9yLW9yYW5nZTogcmdiKDI1NSwgMTUyLCAwKTtcXG4gIC0tZm9udC1jb2xvci1ibHVlOiAjMzJjMGY0O1xcbiAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICAtLWZvbnQtZmFtaWx5LWhlYWRlcjogZm9udC1mYW1pbHk6ICdMZWFndWUgR290aGljJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC1mYW1pbHktYm9keTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAtLWJsYWNrOiAjMDAwO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJvZHkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07IFxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbiNjb250ZW50e1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyTG9nb3tcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMi41dncpO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBwYWRkaW5nLXRvcDogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxufVxcblxcbi5oZWFkZXJMb2dvOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxubmF2e1xcbiAgd29yZC1zcGFjaW5nOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNHZoO1xcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4OyAgXFxufVxcblxcbm5hdiBhe1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7IFxcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uaW50cm9Db250ZW50e1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBtYXJnaW4tdG9wOiAxNXZoO1xcbn1cXG5cXG5oMSxcXG5oMiwgXFxuLm5hbWVJbnRybyB7XFxuICBmb250LWZhbWlseTogJ0xlYWd1ZSBHb3RoaWMnLCBzYW5zLXNlcmlmOztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50aXRsZUludHJve1xcbiAgZm9udC1zaXplOiBjYWxjKDEwMHB4ICsgMXZ3KTtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxuIFxcbn1cXG5cXG4ubmFtZUludHJve1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItYmx1ZSk7XFxuICBmb250LXNpemU6IGNhbGMoNzBweCArIDF2dyk7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi50ZXh0MXtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygzcHggKyAydncpOyBcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDI4Y2g7XFxuICBhbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyMiksIGJsaW5rIC41cyBzdGVwLWVuZCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwXFxuICB9XFxufVxcbiAgICBcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDUwJSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcXG4gIH1cXG59XFxuXFxuLmNyZWF0ZUFib3V0TWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmFib3V0TWVEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmFib3V0TWVEaXYgLmxlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpOyBcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5hYm91dE1lRGl2IC5yaWdodHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4uYWJvdXRNZVRpdGxlOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIG9wYWNpdHk6IC45O1xcbn1cXG5cXG4uc2tpbGxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxufVxcblxcbi5za2lsbENvbnRhaW5lcntcXG4gIHdpZHRoOiA1NSU7XFxufVxcblxcbi5sZXZlbHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTsgXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5mcm9udExvZ297XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsOyAgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2R1Y3QgaW1ne1xcbiAgei1pbmRleDogMTA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDM1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgXFxufVxcblxcbi5zdGFjay1pdGVte1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdGFjay1pdGVtIGg0e1xcbiAgY29sb3I6dmFyKC0td2hpdGUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxzVGl0bGV7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgMXZ3KTsgXFxufVxcblxcbi5mcm9udExvZ28gLnN0YWNrLWl0ZW06bnRoLWNoaWxkKDQpIGltZ3tcXG4gYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiBcXG59XFxuXFxuLmZyb250TG9nbyAuc3RhY2staXRlbTpudGgtY2hpbGQoNSkgaW1ne1xcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uc3BlYWt7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5zcGVhayAuY291bnRyeXtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDsgIFxcbn1cXG5cXG4uY291bnRyeSBpbWd7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMzVweCArIDF2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jcmVhdGVXb3Jre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5teVdvcmt7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuICAubXlXb3JrOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgICBvcGFjaXR5OiAuOTtcXG59XFxuXFxuLmdyaWR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNDBweDsgIFxcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4ucHJvamVjdEltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAuNnZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyAucmV2aWV3QnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmV2aWV3QnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5saXZlQnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXZlQnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuLmNvbnRhY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMzBweCAzMHB4IDAgMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgaDJ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuXFxuLmNvbnRhY3QgaDI6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5jb250YWN0Q29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3RUZXh0e1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgLjF2dyk7XFxufVxcblxcbi5jb250YWN0TGlzdHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuICAubGlzdFRpdGxle1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3RTZWNUaXRsZXtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEljb25zVGl0bGV7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJY29uc3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5saXN0SWNvbnMgYXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWd7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDQ1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAyNXB4IDE1cHggMTBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gXFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWc6aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5pbWdEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi53YXZlIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG59XFxuXFxuLndhdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgIGF1dG87XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2JhKDg0LDU4LDE4MywxKSAwJSwgcmdiYSgwLDE3MiwxOTMsMSkgMTAwJSk7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLndhdmVzIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MTV2aDtcXG4gIG1hcmdpbi1ib3R0b206LThweDsgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xcbiAgbWluLWhlaWdodDoxMDBweDtcXG4gIG1heC1oZWlnaHQ6MTUwcHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbiAqL1xcblxcbi5wYXJhbGxheCA+IHVzZSB7XFxuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAyNXMgY3ViaWMtYmV6aWVyKC41NSwuNSwuNDUsLjUpICAgICBpbmZpbml0ZTtcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0ycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XFxufVxcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC00cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDQpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XFxufVxcbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LDAsMCk7XFxuICB9XFxuICAxMDAlIHsgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwwLDApO1xcbiAgfVxcbn1cXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YXZlcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6NDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDYwJTtcXG4gIH1cXG59XFxuXFxuLyogOTgwcHggLyAxNnB4ID0gNjEuMjVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA2MS4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1OCU7XFxuICB9XFxufVxcblxcbi8qIDQ2MHB4IC8gMTZweCA9IDI4Ljc1ZW0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbn1cXG4gICNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiAgLmhlYWRlckxvZ297XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbiAgbmF2e1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxuICAuZnJvbnRMb2dve1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuICAubGlzdEljb25zIGEgaW1ne1xcbiAgICB3aWR0aDogMTV2dztcXG4gIH1cXG4gIC5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4Ljc1ZW0pe1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNraWxsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBcXG4gIH1cXG4gIC5hYm91dE1lRGl2IC5sZWZ0LFxcbiAgLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpe1xcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzEwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5za2lsbHNUaXRsZXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLmZyb250TG9nb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5zcGVha3tcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAgXFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gICNjb250ZW50e1xcbiAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcbiAgLnNwZWFre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAzNXB4O1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KXtcXG4gIC5jb250YWN0Q29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RUZXh0e1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWN0TGlzdHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY29udGFjdFRleHR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAuMXZ3KTtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KXtcXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCl7XFxuICAuZ3JpZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICB9XFxuICAubXlXb3Jre1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5wcm9qZWN0SW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0e1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDJ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDhEQUE4RDtFQUM5RCwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtB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Q3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7RUFDOUI7QUFDRjs7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7O0VBRWI7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtFQUNBLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLENBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXJkbzp3Z2h0QDcwMCZmYW1pbHk9TGVhZ3VlK0dvdGhpYyZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmZhbWlseT1TcGVjaWFsK0VsaXRlJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNhcmRvOndnaHRANzAwJmZhbWlseT1MZWFndWUrR290aGljJmZhbWlseT1TcGVjaWFsK0VsaXRlJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLWZvbnQtY29sb3Itb3JhbmdlOiByZ2IoMjU1LCAxNTIsIDApO1xcbiAgLS1mb250LWNvbG9yLWJsdWU6ICMzMmMwZjQ7XFxuICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIC0tZm9udC1mYW1pbHktaGVhZGVyOiBmb250LWZhbWlseTogJ0xlYWd1ZSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LWZhbWlseS1ib2R5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tYmxhY2s6ICMwMDA7XFxuICAtLXdoaXRlOiAjZmZmZmZmO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYm9keSk7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDEuOHJlbTsgXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJMb2dve1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAyLjV2dyk7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG59XFxuXFxuLmhlYWRlckxvZ286aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5uYXZ7XFxuICB3b3JkLXNwYWNpbmc6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IC00dmg7XFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICBcXG59XFxuXFxubmF2IGF7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTsgXFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5pbnRyb0NvbnRlbnR7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIG1hcmdpbi10b3A6IDE1dmg7XFxufVxcblxcbmgxLFxcbmgyLCBcXG4ubmFtZUludHJvIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGVhZ3VlIEdvdGhpYycsIHNhbnMtc2VyaWY7O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpdGxlSW50cm97XFxuICBmb250LXNpemU6IGNhbGMoMTAwcHggKyAxdncpO1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG4gXFxufVxcblxcbi5uYW1lSW50cm97XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyg3MHB4ICsgMXZ3KTtcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLnRleHQxe1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiBjYWxjKDNweCArIDJ2dyk7IFxcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogMjhjaDtcXG4gIGFuaW1hdGlvbjogdHlwaW5nIDJzIHN0ZXBzKDIyKSwgYmxpbmsgLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDBcXG4gIH1cXG59XFxuICAgIFxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgNTAlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudFxcbiAgfVxcbn1cXG5cXG4uY3JlYXRlQWJvdXRNZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXRNZURpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYWJvdXRNZURpdiAubGVmdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7IFxcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgd2lkdGg6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDQwdnc7XFxufVxcblxcbi5hYm91dE1lVGl0bGU6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5za2lsbHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG59XFxuXFxuLnNraWxsQ29udGFpbmVye1xcbiAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmxldmVse1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpOyBcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLmZyb250TG9nb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7ICBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvZHVjdCBpbWd7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMzVweCArIDF2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBcXG59XFxuXFxuLnN0YWNrLWl0ZW17XFxuICBwYWRkaW5nOiA0MHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0YWNrLWl0ZW0gaDR7XFxuICBjb2xvcjp2YXIoLS13aGl0ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5za2lsbHNUaXRsZXtcXG4gIHdpZHRoOiA0NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAxdncpOyBcXG59XFxuXFxuLmZyb250TG9nbyAuc3RhY2staXRlbTpudGgtY2hpbGQoNCkgaW1ne1xcbiBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuIFxcbn1cXG5cXG4uZnJvbnRMb2dvIC5zdGFjay1pdGVtOm50aC1jaGlsZCg1KSBpbWd7XFxuICBib3JkZXItcmFkaXVzOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5zcGVha3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnNwZWFrIC5jb3VudHJ5e1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4OyAgXFxufVxcblxcbi5jb3VudHJ5IGltZ3tcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNyZWF0ZVdvcmt7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm15V29ya3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG4gIC5teVdvcms6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICAgIG9wYWNpdHk6IC45O1xcbn1cXG5cXG4uZ3JpZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA0MHB4OyAgXFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0SW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDsgXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0RGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGV7XFxuICBmb250LXNpemU6IGNhbGMoMzBweCArIC42dncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25zIC5yZXZpZXdCdXR0b257XFxuICBwYWRkaW5nOiAxMnB4IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXZpZXdCdXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLmxpdmVCdXR0b257XFxuICBwYWRkaW5nOiAxMnB4IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4OyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpdmVCdXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25zIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbn1cXG5cXG4uY29udGFjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAzMHB4IDMwcHggMCAzMHB4O1xcbn1cXG5cXG4uY29udGFjdCBoMntcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG5cXG4uY29udGFjdCBoMjpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBvcGFjaXR5OiAuOTtcXG59XFxuXFxuLmNvbnRhY3RDb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdFRleHR7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAuMXZ3KTtcXG59XFxuXFxuLmNvbnRhY3RMaXN0e1xcbiAgd2lkdGg6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4gIC5saXN0VGl0bGV7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubGlzdFNlY1RpdGxle1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5saXN0SWNvbnNUaXRsZXtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdEljb25ze1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3RJY29ucyBhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJY29ucyBhIGltZ3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoNDVweCArIDF2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDI1cHggMTVweCAxMHB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbiBcXG59XFxuXFxuLmxpc3RJY29ucyBhIGltZzpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmltZ0RpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLndhdmUge1xcbiBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ud2F2ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAgYXV0bztcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsIHJnYmEoODQsNTgsMTgzLDEpIDAlLCByZ2JhKDAsMTcyLDE5MywxKSAxMDAlKTtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ud2F2ZXMge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDoxNXZoO1xcbiAgbWFyZ2luLWJvdHRvbTotOHB4OyAvKkZpeCBmb3Igc2FmYXJpIGdhcCovXFxuICBtaW4taGVpZ2h0OjEwMHB4O1xcbiAgbWF4LWhlaWdodDoxNTBweDtcXG59XFxuXFxuLyogQW5pbWF0aW9uICovXFxuXFxuLnBhcmFsbGF4ID4gdXNlIHtcXG4gIGFuaW1hdGlvbjogbW92ZS1mb3JldmVyIDI1cyBjdWJpYy1iZXppZXIoLjU1LC41LC40NSwuNSkgICAgIGluZmluaXRlO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDEpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDMpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTRzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxM3M7XFxufVxcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoNCkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcXG59XFxuQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwcHgsMCwwKTtcXG4gIH1cXG4gIDEwMCUgeyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4NXB4LDAsMCk7XFxuICB9XFxufVxcbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLndhdmVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgbWluLWhlaWdodDo0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjAlO1xcbiAgfVxcbn1cXG5cXG4vKiA5ODBweCAvIDE2cHggPSA2MS4yNWVtICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYxLjI1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU4JTtcXG4gIH1cXG59XFxuXFxuLyogNDYwcHggLyAxNnB4ID0gMjguNzVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAyOC43NWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1NSU7XFxufVxcbiAgI2NvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4gIC5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAuaGVhZGVyTG9nb3tcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuICBuYXZ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG4gIC5mcm9udExvZ297XFxuICAgIGdhcDoxcmVtO1xcbn1cXG5cXG4gIC5saXN0SWNvbnMgYSBpbWd7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgfVxcbiAgLmNvcHlyaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSl7XFxuICAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hYm91dE1lVGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCl7XFxuICAuYWJvdXRNZURpdiAubGVmdCxcXG4gIC5hYm91dE1lRGl2IC5yaWdodHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMTBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLnNraWxsc1RpdGxle1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAuZnJvbnRMb2dve1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgfVxcblxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7ICBcXG4gIH1cXG5cXG4gIC5hYm91dE1lVGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAuc3BlYWt7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgI2NvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxuICAuc3BlYWt7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDM1cHg7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDUwcHgpe1xcbiAgLmNvbnRhY3RDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFjdFRleHR7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RMaXN0e1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5jb250YWN0VGV4dHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIC4xdncpO1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xcbiAgLnByb2plY3RCdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTc1MHB4KXtcXG4gIC5ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gIH1cXG4gIC5teVdvcmt7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZGlzcGxheTogIGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLnByb2plY3RJbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gIH1cXG4gIC5wcm9qZWN0RGVzY3JpcHRpb257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnByb2plY3RCdXR0b25ze1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3R7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICB9XFxuXFxuICAuY29udGFjdCBoMntcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZS5qc1wiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6WyJhYm91dFNlY3Rpb24iLCJjcmVhdGVBYm91dE1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWJvdXRNZURpdiIsImFwcGVuZENoaWxkIiwibGVmdCIsInJpZ2h0IiwiYWJvdXRNZVRpdGxlIiwidGV4dENvbnRlbnQiLCJhYm91dE1lRGVzY3JpcHRpb24iLCJza2lsbHNEaXYiLCJza2lsbENvbnRhaW5lciIsInN0YWNrRnJvbnQiLCJzdGFja0Zyb250VGl0bGUiLCJmcm9udExvZ28iLCJjcmVhdGVTdGFja0l0ZW0iLCJzdGFja1RlY2hub2xvZ3kiLCJzdGFja1RlY2hub2xvZ3lUaXRsZSIsInRlY2hMb2dvIiwic2tpbGxzVGl0bGUiLCJzcGVha0RpdiIsImVuZ2xpc2hEaXYiLCJlbmdsaXNoSW1nIiwic3JjIiwiYWx0Iiwicm9tYW5pYW5EaXYiLCJyb21hbmlhbkltZyIsImRlRGl2IiwiZGVJbWciLCJuYW1lIiwic3RhY2tJdGVtIiwic3RhY2tOYW1lIiwic3RhY2tJbWFnZSIsInRvTG93ZXJDYXNlIiwiY29udGFjdFNlY3Rpb24iLCJjb250YWN0IiwiY29udGFjdFRpdGxlIiwiY29udGFjdENvbnRlbnQiLCJjb250YWN0VGV4dCIsImNvbnRhY3RMaXN0IiwibGlzdFRpbGUiLCJsaXN0U2VjVGl0bGUiLCJsaXN0SWNvbnMiLCJsaXN0SWNvbnNUaXRsZSIsImltZ0RpdiIsImxpc3RHaXRJY29uIiwiZ2l0TGluayIsImhyZWYiLCJ0YXJnZXQiLCJsaXN0SW4iLCJpbkxvZ28iLCJjcmVhdGVJbnRybyIsImludHJvQ29udGVudCIsInRpdGxlSW50cm8iLCJuYW1lSW50cm8iLCJ0ZXh0MSIsInN0eWxlIiwid29ya1NlY3Rpb24iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJoZWFkZXJMb2dvIiwiY3JlYXRlTmF2IiwibmF2IiwiYWJvdXRNZW51Iiwid29ya01lbnUiLCJjb250YWN0TWVudSIsImNyZWF0ZU1haW4iLCJtYWluIiwiaW5pdGlhbGl6ZVdlYnNpdGUiLCJjb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVXb3JrIiwibXlXb3JrIiwiY3JlYXRlV29ya0l0ZW0iLCJkZXNjcmlwdGlvbiIsImxpbmtDb2RlIiwibGlua0xpdmUiLCJwcm9qZWN0R3JpZCIsInByb2plY3RJbWciLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0VGV4dCIsInByb2plY3RCdXR0b25zIiwicmV2aWV3QnV0dG9uIiwibGl2ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=