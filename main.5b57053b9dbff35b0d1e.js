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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 80%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 2.5vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: var(--black);\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color: var(--black); \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: var(--black);\n  margin-top: 15vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n}\n\n.titleIntro{\n  font-size: calc(100px + 1vw);\n  margin-top: 80px;\n \n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(70px + 1vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n  width: 28ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n}\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: var(--black);\n  border-radius: 20px; \n  position: relative;\n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n  \n}\n\n.stack-item{\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.stack-item h4{\n  color:var(--white);\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n\n.frontLogo .stack-item:nth-child(4) img{\n background: var(--white);\n border-radius: 10px;\n \n}\n\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: var(--white);\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: var(--black);\n}\n\n.speak .country{\n  color: var(--white);\n  align-items: center;\n  display: flex;  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: var(--black);\n  border-radius: 50%;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n}\n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 80%;\n}\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n  .myWork:hover{\n    color: var(--font-color-orange);\n    opacity: .9;\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n  padding: 0px;\n}\n\n.projectImg {\n  display: block;\n  height: auto;\n  width: 80%;\n  margin: 10px 0;\n  border-radius: 30px; \n  border: 1px solid var(--black);\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px;\n  text-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n}\n\n.liveButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  padding: 30px 30px 0 30px;\n}\n\n.contact h2{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.contact h2:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.contactContent{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.contactText{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  font-size: calc(24px + .1vw);\n}\n\n.contactList{\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n  .listTitle{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listSecTitle{\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n\n.listIconsTitle{\n  width: 100%;\n  text-align: center;\n}\n\n.listIcons{\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listIcons a{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listIcons a img{\n  display: block;\n  width: calc(45px + 1vw);\n  height: auto;\n  margin: 25px 15px 10px 10px;\n  transition: transform .3s ease-in-out;\n \n}\n\n.listIcons a img:hover{\n  transform: scale(1.2);\n}\n\n.imgDiv{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: larger;\n}\n\n/* Footer */\n\n.wave {\n position: relative;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  color: var(--black);\n  background-color:var(--white);\n}\n\n.wave {\n  width: 100%;\n  margin: 0  auto;\n  position:relative;\n  text-align:center;\n  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);\n  color:white;\n}\n\n.waves {\n  position:relative;\n  width: 100%;\n  height:15vh;\n  margin-bottom:-8px; /*Fix for safari gap*/\n  min-height:100px;\n  max-height:150px;\n}\n\n/* Animation */\n\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n   transform: translate3d(-90px,0,0);\n  }\n  100% { \n    transform: translate3d(85px,0,0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waves {\n    text-align: center;\n    height:40px;\n    min-height:40px;\n  }\n}\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n}\n  #content{\n    width: 100%;\n}\n\n  .header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n  .headerLogo{\n    margin-left: 0px;\n    padding-top: 1px;\n}\n\n  nav{\n    margin-top: 15px;\n    margin-right: 0px;\n}\n\n  .frontLogo{\n    gap:1rem;\n}\n\n  .listIcons a img{\n    width: 15vw;\n  }\n  .copyright {\n  display: flex;\n  flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n@media (max-width: 1750px){\n  .projectButtons{\n    display:flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n\n  .frontLogo{\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n\n  .speak{\n    width: auto;\n  }\n\n  #content{\n  width: 100%;\n  }\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n\n@media (max-width: 1450px){\n  .contactContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contactText{\n    width: 85%;\n    display: flex;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactList{\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactText{\n    text-align: center;\n    font-size: calc(20px + .1vw);\n  }\n}\n\n\n@media (max-width: 650px){\n  .projectButtons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    margin-top: 40px;\n  }\n}\n\n@media (max-width: 1550px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n\n  .contact{\n    margin-top: -5px;\n  }\n\n  .contact h2{\n  margin-bottom: 30px;\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  text-align: center;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  };\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Open+Sans:wght@300&family=Special+Elite&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Special+Elite&display=swap');\n\n:root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 80%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 2.5vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: var(--black);\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color: var(--black); \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: var(--black);\n  margin-top: 15vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n}\n\n.titleIntro{\n  font-size: calc(100px + 1vw);\n  margin-top: 80px;\n \n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(70px + 1vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n  width: 28ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n}\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: var(--black);\n  border-radius: 20px; \n  position: relative;\n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n  \n}\n\n.stack-item{\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.stack-item h4{\n  color:var(--white);\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n\n.frontLogo .stack-item:nth-child(4) img{\n background: var(--white);\n border-radius: 10px;\n \n}\n\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: var(--white);\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: var(--black);\n}\n\n.speak .country{\n  color: var(--white);\n  align-items: center;\n  display: flex;  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: var(--black);\n  border-radius: 50%;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n}\n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 80%;\n}\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n  .myWork:hover{\n    color: var(--font-color-orange);\n    opacity: .9;\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n  padding: 0px;\n}\n\n.projectImg {\n  display: block;\n  height: auto;\n  width: 80%;\n  margin: 10px 0;\n  border-radius: 30px; \n  border: 1px solid var(--black);\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px;\n  text-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n}\n\n.liveButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  padding: 30px 30px 0 30px;\n}\n\n.contact h2{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.contact h2:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.contactContent{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.contactText{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  font-size: calc(24px + .1vw);\n}\n\n.contactList{\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n  .listTitle{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listSecTitle{\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n\n.listIconsTitle{\n  width: 100%;\n  text-align: center;\n}\n\n.listIcons{\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listIcons a{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listIcons a img{\n  display: block;\n  width: calc(45px + 1vw);\n  height: auto;\n  margin: 25px 15px 10px 10px;\n  transition: transform .3s ease-in-out;\n \n}\n\n.listIcons a img:hover{\n  transform: scale(1.2);\n}\n\n.imgDiv{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: larger;\n}\n\n/* Footer */\n\n.wave {\n position: relative;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  color: var(--black);\n  background-color:var(--white);\n}\n\n.wave {\n  width: 100%;\n  margin: 0  auto;\n  position:relative;\n  text-align:center;\n  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);\n  color:white;\n}\n\n.waves {\n  position:relative;\n  width: 100%;\n  height:15vh;\n  margin-bottom:-8px; /*Fix for safari gap*/\n  min-height:100px;\n  max-height:150px;\n}\n\n/* Animation */\n\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n   transform: translate3d(-90px,0,0);\n  }\n  100% { \n    transform: translate3d(85px,0,0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waves {\n    text-align: center;\n    height:40px;\n    min-height:40px;\n  }\n}\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n}\n  #content{\n    width: 100%;\n}\n\n  .header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n  .headerLogo{\n    margin-left: 0px;\n    padding-top: 1px;\n}\n\n  nav{\n    margin-top: 15px;\n    margin-right: 0px;\n}\n\n  .frontLogo{\n    gap:1rem;\n}\n\n  .listIcons a img{\n    width: 15vw;\n  }\n  .copyright {\n  display: flex;\n  flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n@media (max-width: 1750px){\n  .projectButtons{\n    display:flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n}\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n\n  .frontLogo{\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n\n  .speak{\n    width: auto;\n  }\n\n  #content{\n  width: 100%;\n  }\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n\n@media (max-width: 1450px){\n  .contactContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contactText{\n    width: 85%;\n    display: flex;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactList{\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactText{\n    text-align: center;\n    font-size: calc(20px + .1vw);\n  }\n}\n\n\n@media (max-width: 650px){\n  .projectButtons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    margin-top: 40px;\n  }\n}\n\n@media (max-width: 1550px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n\n  .contact{\n    margin-top: -5px;\n  }\n\n  .contact h2{\n  margin-bottom: 30px;\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  text-align: center;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  };\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSx3QkFBd0IsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxh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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQVcsdURBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvd29yay5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFib3V0U2VjdGlvbigpe1xuXG4gICAgY29uc3QgY3JlYXRlQWJvdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjcmVhdGVBYm91dE1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XG4gICAgY3JlYXRlQWJvdXRNZS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlQWJvdXRNZVwiKTtcblxuICAgIGNvbnN0IGFib3V0TWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dE1lRGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lRGl2XCIpO1xuICAgIFxuICAgIGNyZWF0ZUFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZURpdik7XG5cbiAgICBcbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICAgIGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgYWJvdXRNZURpdi5hcHBlbmRDaGlsZChyaWdodCk7XG5cbiAgICBjb25zdCBhYm91dE1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFib3V0TWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZVRpdGxlXCIpO1xuICAgIGFib3V0TWVUaXRsZS50ZXh0Q29udGVudCA9IFwiWzBdYWJvdXRNZVwiO1xuICAgIGxlZnQuYXBwZW5kQ2hpbGQoYWJvdXRNZVRpdGxlKTtcblxuICAgIGNvbnN0IGFib3V0TWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dE1lRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImFib3V0TWVEZXNjcmlwdGlvblwiKTtcbiAgICBhYm91dE1lRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkknbSBhIEZyb250LWVuZCBkZXZlbG9wZXIgd2hvIGNhcnJpZXMgYSBrZWVuIGV5ZSBmb3IgZGVzaWduIGluIGFuIHVzZXItZmlyc3QgYXBwcm9hY2guIE15IGN1cnJlbnQgZm9jdXMgaXMgaW4gY3JlYXRpbmcgcmVzcG9uc2l2ZSBsYXlvdXRzIG9uIHRoZSBKYXZhU2NyaXB0IHN0YWNrIG9mIFJlYWN0IGFuZCBOb2RlSlMgd2hpY2ggSSBoYXZlIGJlZW4gZXhwbG9yaW5nIHJlY2VudGx5LCBhbmQgZnJvbSBteSBiYWNrZ3JvdW5kIGFzIGFuIHBoeXNpY2lzdCBJJ20gd2VsbCBhY3F1YWludGVkIHRvIGJyaW5naW5nIG91dCBzb2x1dGlvbnMgdG8gY29tcGxleCBwcm9ibGVtcy5cIjtcbiAgICByaWdodC5hcHBlbmRDaGlsZChhYm91dE1lRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3Qgc2tpbGxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2tpbGxzRGl2LmNsYXNzTGlzdC5hZGQoXCJza2lsbHNcIik7XG4gICAgY3JlYXRlQWJvdXRNZS5hcHBlbmRDaGlsZChza2lsbHNEaXYpO1xuXG4gICAgXG5cbiAgICBjb25zdCBza2lsbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIHByaWNpbmdcbiAgICBza2lsbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2tpbGxDb250YWluZXJcIik7IFxuICAgIHNraWxsc0Rpdi5hcHBlbmRDaGlsZChza2lsbENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzdGFja0Zyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFja0Zyb250LmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0XCIpO1xuICAgIHNraWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YWNrRnJvbnQpOyAgICBcblxuICAgIGNvbnN0IHN0YWNrRnJvbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBzdGFja0Zyb250VGl0bGUuY2xhc3NMaXN0LmFkZChcImxldmVsXCIpO1xuICAgIHN0YWNrRnJvbnRUaXRsZS50ZXh0Q29udGVudCA9IFwiRnJvbnQtZW5kXCI7XG4gICAgc3RhY2tGcm9udC5hcHBlbmRDaGlsZChzdGFja0Zyb250VGl0bGUpO1xuXG4gICAgY29uc3QgZnJvbnRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcm9udExvZ28uY2xhc3NMaXN0LmFkZChcImZyb250TG9nb1wiKTtcbiAgICBmcm9udExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiSFRNTDVcIikpO1xuICAgIGZyb250TG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJDU1MzXCIpKTtcbiAgICBmcm9udExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiSmF2YVNjcmlwdFwiKSk7XG4gICAgXG4gICAgc3RhY2tGcm9udC5hcHBlbmRDaGlsZChmcm9udExvZ28pO1xuXG4gICAgY29uc3Qgc3RhY2tUZWNobm9sb2d5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFja1RlY2hub2xvZ3kuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RcIik7XG4gICAgc2tpbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhY2tUZWNobm9sb2d5KTtcblxuICAgIGNvbnN0IHN0YWNrVGVjaG5vbG9neVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHN0YWNrVGVjaG5vbG9neVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsZXZlbFwiKTtcbiAgICBzdGFja1RlY2hub2xvZ3lUaXRsZS50ZXh0Q29udGVudCA9IFwiVGVjaG5vbG9neXNcIjtcbiAgICBzdGFja0Zyb250LmFwcGVuZENoaWxkKHN0YWNrVGVjaG5vbG9neVRpdGxlKTtcblxuICAgIGNvbnN0IHRlY2hMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZWNoTG9nby5jbGFzc0xpc3QuYWRkKFwiZnJvbnRMb2dvXCIpO1xuICAgIHRlY2hMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkdpdFwiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiV2ViUGFja1wiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwibnBtXCIpKTtcbiAgICB0ZWNoTG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJMaW51eFwiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiR2l0SHViXCIpKTtcbiAgIFxuXG4gICAgc3RhY2tGcm9udC5hcHBlbmRDaGlsZCh0ZWNoTG9nbyk7XG5cbiAgICBjb25zdCBza2lsbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc2tpbGxzVGl0bGUuY2xhc3NMaXN0LmFkZChcInNraWxsc1RpdGxlXCIpO1xuICAgIHNraWxsc1RpdGxlLnRleHRDb250ZW50ID0gXCJUb29scyBhbmQgU2tpbGxzXCI7XG4gICAgc2tpbGxzRGl2LmFwcGVuZENoaWxkKHNraWxsc1RpdGxlKTtcblxuICAgIGNvbnN0IHNwZWFrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BlYWtEaXYuY2xhc3NMaXN0LmFkZChcInNwZWFrXCIpO1xuICAgIGNyZWF0ZUFib3V0TWUuYXBwZW5kQ2hpbGQoc3BlYWtEaXYpO1xuXG4gICAgY29uc3QgZW5nbGlzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVuZ2xpc2hEaXYuY2xhc3NMaXN0LmFkZChcImNvdW50cnlcIik7XG4gICAgZW5nbGlzaERpdi50ZXh0Q29udGVudCA9IFwiSSBzcGVhayBFbmdsaXNoXCI7XG4gICAgc3BlYWtEaXYuYXBwZW5kQ2hpbGQoZW5nbGlzaERpdik7XG5cbiAgICBjb25zdCBlbmdsaXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZW5nbGlzaEltZy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgIGVuZ2xpc2hJbWcuc3JjID0gXCIuL2ltZy9sYW5ndWFnZS91ay5zdmdcIjtcbiAgICBlbmdsaXNoSW1nLmFsdCA9IFwiZW5nbGlzaFwiO1xuICAgIGVuZ2xpc2hEaXYuYXBwZW5kQ2hpbGQoZW5nbGlzaEltZyk7XG5cbiAgICBjb25zdCByb21hbmlhbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvbWFuaWFuRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuICAgIHJvbWFuaWFuRGl2LnRleHRDb250ZW50ID0gXCJWb3JiZXNjIHJvbcOibmXImXRlXCI7XG4gICAgc3BlYWtEaXYuYXBwZW5kQ2hpbGQocm9tYW5pYW5EaXYpO1xuXG4gICAgY29uc3Qgcm9tYW5pYW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICByb21hbmlhbkltZy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgIHJvbWFuaWFuSW1nLnNyYyA9IFwiLi9pbWcvbGFuZ3VhZ2Uvcm8ucG5nXCI7XG4gICAgcm9tYW5pYW5JbWcuYWx0ID0gXCJyb1wiO1xuICAgIHJvbWFuaWFuRGl2LmFwcGVuZENoaWxkKHJvbWFuaWFuSW1nKTtcblxuXG4gICAgY29uc3QgZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZURpdi5jbGFzc0xpc3QuYWRkKFwiY291bnRyeVwiKTtcbiAgICBkZURpdi50ZXh0Q29udGVudCA9IFwiSWNoIHNwcmVjaGUgZGV1dHNjaFwiO1xuICAgIHNwZWFrRGl2LmFwcGVuZENoaWxkKGRlRGl2KTtcblxuICAgIGNvbnN0IGRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVJbWcuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2UnKTtcbiAgICBkZUltZy5zcmMgPSBcIi4vaW1nL2xhbmd1YWdlL2RlLnBuZ1wiO1xuICAgIGRlSW1nLmFsdCA9IFwiZGVcIjtcbiAgICBkZURpdi5hcHBlbmRDaGlsZChkZUltZyk7XG5cbiAgICByZXR1cm4gY3JlYXRlQWJvdXRNZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhY2tJdGVtKG5hbWUpe1xuICAgIGNvbnN0IHN0YWNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhY2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJzdGFjay1pdGVtXCIpO1xuICAgIFxuICAgIGNvbnN0IHN0YWNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBzdGFja05hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3Qgc3RhY2tJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgc3RhY2tJbWFnZS5zcmMgPSBgLi9pbWcvc3RhY2svJHtuYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG4gICAgc3RhY2tJbWFnZS5hbHQgPSBgJHtuYW1lfWA7XG4gICAgc3RhY2tJbWFnZS5jbGFzc0xpc3QuYWRkKFwic3RhY2tcIik7XG5cbiAgICBzdGFja0l0ZW0uYXBwZW5kQ2hpbGQoc3RhY2tJbWFnZSk7XG4gICAgc3RhY2tJdGVtLmFwcGVuZENoaWxkKHN0YWNrTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIHN0YWNrSXRlbTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBhYm91dFNlY3Rpb247XG5cbi8qXG5cblxuICAgXG5cbiAgIFxuIFxuKi8iLCJmdW5jdGlvbiBjb250YWN0U2VjdGlvbigpe1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlsyXWNvbnRhY3RcIjtcbiAgICBcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG5cbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250ZW50XCIpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFRleHRcIik7XG4gICAgY29udGFjdFRleHQudGV4dENvbnRlbnQgPSBcIkknbSBjdXJyZW50bHkgaW50ZXJlc3RlZCBpbiBhIEZyb250LWVuZCBkZXZlbG9wZXIuIFBsZWFzZSBkbyBub3QgaGVzaXRhdGUgdG8gY29udGFjdCBtZSBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGFib3V0IGFkZGl0aW9uYWwgY3JlZGVudGlhbHMgb3IgdGhlIGRlc2lnbiBvZiB0aGlzIHdlYnNpdGUuXCJcblxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdExpc3RcIik7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuICAgIFxuICAgIGNvbnN0IGxpc3RUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGlzdFRpbGUuY2xhc3NMaXN0LmFkZChcImxpc3RUaXRsZVwiKTtcbiAgICBsaXN0VGlsZS50ZXh0Q29udGVudCA9IFwiWW91IGNhbiB3cml0ZSBtZSBhbiBlLW1haWwgYXQ6IGNpZ21haWFuMUBnbWFpbC5jb21cIjtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0VGlsZSk7XG5cbiAgICBjb25zdCBsaXN0U2VjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaXN0U2VjVGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3RTZWNUaXRsZVwiKTtcbiAgICBsaXN0U2VjVGl0bGUudGV4dENvbnRlbnQgPSBcIk9SXCI7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQobGlzdFNlY1RpdGxlKTtcblxuICAgIGNvbnN0IGxpc3RJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdEljb25zLmNsYXNzTGlzdC5hZGQoXCJsaXN0SWNvbnNcIik7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEljb25zKTtcblxuICAgIGNvbnN0IGxpc3RJY29uc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGlzdEljb25zVGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3RJY29uc1RpdGxlXCIpO1xuICAgIGxpc3RJY29uc1RpdGxlLnRleHRDb250ZW50ID0gXCJSZWFjaCBtZSB0aHJvdWdoIHNvY2lhbCBtZWRpYVwiO1xuICAgIGxpc3RJY29ucy5hcHBlbmRDaGlsZChsaXN0SWNvbnNUaXRsZSk7XG5cbiAgICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW1nRGl2XCIpO1xuICAgIGxpc3RJY29ucy5hcHBlbmRDaGlsZChpbWdEaXYpO1xuXG4gICAgY29uc3QgbGlzdEdpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxpc3RHaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJsaXN0R2l0SWNvblwiKTtcbiAgICBsaXN0R2l0SWNvbi5zcmMgPSBcImltZy9zdGFjay9naXRodWIucG5nXCI7XG4gICAgbGlzdEdpdEljb24uYWx0ID0gXCJnaXQgbG9nXCI7XG4gICAgXG5cbiAgICBjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW5cIjtcbiAgICBnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGxpc3RHaXRJY29uKTtcbiAgICBsaXN0SWNvbnMuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG5cbiAgICBjb25zdCBsaXN0SW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxpc3RJbi5jbGFzc0xpc3QuYWRkKFwibGlzdEluXCIpO1xuICAgIGxpc3RJbi5zcmMgPSBcImltZy9zdGFjay9saS5wbmdcIjtcbiAgICBsaXN0SW4uYWx0ID0gXCJsaW5rZWRJbiBsb2dvXCI7XG5cbiAgICBjb25zdCBpbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBpbkxvZ28uaHJlZiA9IFwiaHR0cHM6Ly9yby5saW5rZWRpbi5jb20vaW4vYW5kcmVpLWNpZ21haWFuL3JvXCI7XG4gICAgaW5Mb2dvLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICBpbkxvZ28uYXBwZW5kQ2hpbGQobGlzdEluKTtcbiAgICBsaXN0SWNvbnMuYXBwZW5kQ2hpbGQoaW5Mb2dvKTtcblxuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoaW5Mb2dvKTtcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RTZWN0aW9uOyIsIlxuZnVuY3Rpb24gY3JlYXRlSW50cm8oKXtcbiAgIFxuICAgIGNvbnN0IGludHJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGludHJvQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnRyb0NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlSW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlSW50cm8uY2xhc3NMaXN0LmFkZCgndGl0bGVJbnRybycpO1xuICAgIHRpdGxlSW50cm8udGV4dENvbnRlbnQgPSBcIkhlbGxvLFwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUludHJvKTtcblxuXG4gICAgY29uc3QgbmFtZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5hbWVJbnRyby5jbGFzc0xpc3QuYWRkKCduYW1lSW50cm8nKTtcbiAgICBuYW1lSW50cm8udGV4dENvbnRlbnQgPSBcIkknbSBDaWdtYWlhbiBBbmRyZWkuXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnRybyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0MScpO1xuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJJIGJ1aWxkIGRpZ2l0YWwgZXhwZXJpZW5jZXMuXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgIC8qXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgndGV4dDInKTtcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiSSdtIGEgRnJvbnQtZW5kIGRldmVsb3BlciB3aG8gY2FycmllcyBhIGtlZW4gZXllIGZvciBkZXNpZ24gaW4gYW4gdXNlci1maXJzdCBhcHByb2FjaC4gTXkgY3VycmVudCBmb2N1cyBpcyBpbiBjcmVhdGluZyByZXNwb25zaXZlIGxheW91dHMgb24gdGhlIEphdmFTY3JpcHQgc3RhY2sgb2YgUmVhY3QgYW5kIE5vZGVKUyB3aGljaCBJIGhhdmUgYmVlbiBleHBsb3JpbmcgcmVjZW50bHksIGFuZCBmcm9tIG15IGJhY2tncm91bmQgYXMgYW4gcGh5c2ljaXN0IEknbSB3ZWxsIGFjcXVhaW50ZWQgdG8gYnJpbmdpbmcgb3V0IHNvbHV0aW9ucyB0byBjb21wbGV4IHByb2JsZW1zLlwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Mik7XG4gICAgKi9cbiAgICByZXR1cm4gaW50cm9Db250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbnRybztcblxuXG5cblxuLypcbmZ1bmN0aW9uIGNyZWF0ZUludHJvKCl7XG5cbiAgICBjb25zdCBpbnRyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW50cm9Db250ZW50Jyk7XG5cbiAgICBjb25zdCB0aXRsZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUludHJvLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSW50cm8nKTtcbiAgICB0aXRsZUludHJvLnRleHRDb250ZW50ID0gXCJIaSBJIGFtIEFuZHJlaVwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUludHJvKTtcblxuXG4gICAgY29uc3QgbmFtZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5hbWVJbnRyby5jbGFzc0xpc3QuYWRkKCduYW1lSW50cm8nKTtcbiAgICBuYW1lSW50cm8udGV4dENvbnRlbnQgPSBcIkNpZ21haWFuIEFuZHJlaS5cIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUludHJvKTtcblxuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ3RleHQxJyk7XG4gICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dDEpO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDIuY2xhc3NMaXN0LmFkZCgndGV4dDInKTtcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Mik7XG5cbiAgICByZXR1cm4gaW50cm9Db250ZW50O1xufVxuXG5mdW5jdGlvbiBsb2FkSW50cm8oKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW50cm8oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRJbnRybztcblxuKi9cblxuIiwiXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9tYWluLmNzcyc7XG5pbXBvcnQgYWJvdXRTZWN0aW9uIGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgY3JlYXRlSW50cm8gZnJvbSBcIi4vbWFpbi5qc1wiO1xuaW1wb3J0IHdvcmtTZWN0aW9uIGZyb20gXCIuL3dvcmsuanNcIjtcbmltcG9ydCBjb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cblxuIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZChcImhlYWRlckxvZ29cIik7XG4gIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcIltDQV1cIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIFxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgY29uc3QgYWJvdXRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFib3V0TWVudS5jbGFzc0xpc3QuYWRkKFwibmF2TGlua1wiKTtcbiAgYWJvdXRNZW51LnRleHRDb250ZW50ID0gXCJbMF1hYm91dE1lXCI7XG4gIGFib3V0TWVudS5ocmVmPVwiI2Fib3V0XCI7XG4gIFxuICBjb25zdCB3b3JrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICB3b3JrTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2TGlua1wiKTtcbiAgd29ya01lbnUudGV4dENvbnRlbnQgPSBcIlsxXW15V29ya1wiO1xuICB3b3JrTWVudS5ocmVmPVwiI215d29ya1wiO1xuXG4gIGNvbnN0IGNvbnRhY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnRhY3RNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZMaW5rXCIpO1xuICBjb250YWN0TWVudS50ZXh0Q29udGVudCA9IFwiWzJdY29udGFjdFwiO1xuICBjb250YWN0TWVudS5ocmVmPVwiI2NvbnRhY3RcIjtcblxuICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRNZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKHdvcmtNZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RNZW51KTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVJbnRybygpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24oKSk7ICBcbiAgIFxuICBtYWluLmFwcGVuZENoaWxkKHdvcmtTZWN0aW9uKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKCkpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG4vKlxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBEZXNpZ25lZCAmIEJ1aWx0IGJ5IENpZ21haWFuIEFuZHJlaSDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIFxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuXCI7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGdpdGh1Ykljb24uc3JjPSBgaW1nL3N0YWNrL2dpdGh1Yi5wbmdgO1xuICBnaXRodWJJY29uLmFsdCA9IFwiZ2l0LWltZ1wiO1xuICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoJ2dpdCcpOyAgICBcblxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIFxuICBcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiovXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIC8qXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsImZ1bmN0aW9uIHdvcmtTZWN0aW9uKCl7XG5cbiAgICBjb25zdCBjcmVhdGVXb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY3JlYXRlV29yay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15d29ya1wiKTtcbiAgICBjcmVhdGVXb3JrLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVXb3JrXCIpO1xuXG4gICAgY29uc3QgbXlXb3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBteVdvcmsuY2xhc3NMaXN0LmFkZChcIm15V29ya1wiKTtcbiAgICBteVdvcmsudGV4dENvbnRlbnQgPSBcIlsxXW15V29ya1wiO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChteVdvcmspO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIlJlc3RhdXJhbnQgUGFnZVwiLFxuICAgICAgICAgICAgXCJSZXN0YXVyYW50IFdlYiBQYWdlIGJ1aWxkIHdpdGggSFRNTDUsIENTUzMsIEphdmFTY3JpcCwgV2ViUGFjayAmIEdpdC4gVGhlIHNpdGUgY29uc2lzdCBvZiBob21lIHBhZ2UsIG1lbnUgcGFnZSwgY29udGFjdCBwYWdlIFRoZSBhaW0gb2YgdGhlIHByb2plY3Qgd2FzIHRvIG1ha2UgYSBmdW5jdGlvbmFsIG11bHRpIHBhZ2UgUmVzdGF1cmFudCB3ZWJzaXRlIHVzaW5nIFdlYlBhY2sgdG8gYnVuZGxlIGZpbGVzIGFuZCBKYXZzY3JpcHQgRE9NIG1hbmlwdWxhdGlvbi5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmVcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlLW9ubGluZS9cIlxuICAgICAgICApXG4gICAgKTtcbiAgICBcbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiRXRjaC1hLVNrZXRjaFwiLFxuICAgICAgICAgICAgXCIgVGhlIHByb2plY3Qgd2FzIGJ1aWxkIHdpdGggSFRNTDUsIENTUzMsIEphdmFTY3JpcC4gVGhlIGlkZWEgYmVoaW5kIHRoZSBhcHAgd2FzIHRvIHJlY3JlYXRlIHRoZSBnb29kIG9sZCBjaGlsZGhvb2QgZHJhdyBib2FyZC4gQXBwIGZlYXVyZXM6IFNlbGVjdCBncmlkIHNpemUsIFJhbmRvbSBjb2xvciBidXR0b24gb3B0aW9uLCBDdXN0b20gY29sb3IgU2VsZWN0b3IsIENhbnZhcyBvcHRpb24uXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9FdGNoLWEtU2tldGNoXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL0V0Y2gtYS1Ta2V0Y2gvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiTGlicmFyeSBBcHBcIixcbiAgICAgICAgICAgIFwiQSBzbWFsbCBMaWJyYXJ5IGFwcCwgY3JlYXRlZCB3aXRoIEhUTUw1LCBDU1MzIGFuZCBKYXZhU2NyaXB0LiBUaGUgZGF0YSBpcyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlLiBGZWF0dXJlczogU2VhcmNoIGJhciBpbXBsZW1lbnRhdGlvbiwgWW91IGNhbiBkZWxldGUgYW55IG9mIHlvdXIgYm9va3MsIENhbiB1cGRhdGUgd2hldGhlciB5b3UndmUgcmVhZCBhbnkgb2YgdGhlIGJvb2tzIGluIHlvdXIgbGlicmFyeVwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vUHJvamVjdC1MaWJyYXJ5XCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL1Byb2plY3QtTGlicmFyeS9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJPbmxpbmUgQ2FsY3VsYXRvclwiLFxuICAgICAgICAgICAgXCJBbiBvbmxpbmUgY2FsY3VsYXRvciB3aXRoIGJhc2ljIGFyaXRobWV0aWMgb3BlcmF0aW9ucywgYXBwbGljYXRpb24gZGV2ZWxvcGVkIHVzaW5nIEhUTUw1LCBDU1MzLCBKYXZhU2NyaXAuIEZlYXR1cmVzOiBLZXlib2FyZCBpbnB1dHMgYXJlIHN1cHBvcnRlZCBmb3IgbnVtYmVycywgb3BlcnRhb3JzIGFuZCBvdGhlciBvcHRpb25zLCBDb21lcyB3aXRoIG9wdGlvbnMgdG8gY2xlYXIvZGVsZXRlIGEgc2luZ2xlIGlucHV0IE9SIGNsZWFyIHRoZSB3aG9sZSBkaXNwbGF5LlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vQ2FsY3VsYXRvclwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9DYWxjdWxhdG9yL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIlNpZ24tdXAtRm9ybVwiLFxuICAgICAgICAgICAgXCJBIHNpbmctdXAgZm9ybSBidWlsdCB1c2luZyBIVE1MNSwgQ1NTMyBhbmQgSmF2YVNjcmlwdC4gRmVhdHVyZXM6IERhcmsgbW9kZSwgSG92ZXIgZWZmZWN0IG9uIGxvZ28sIGJ1dHRvbnMgYW5kIGxvZyBpbi5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL1NpZ24tdXAtRm9ybVwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9TaWduLXVwLUZvcm0vXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiR3VuLUZhcm1lci1CZWFyXCIsXG4gICAgICAgICAgICBcIlRoaXMgaXMgbXkgZmlyc3QgZ2FtZSBkZXZlbG9wZWQgdXNpbmcgSFRNTDUsIENTUzMgYW5kIEphdmFTY3JpcHQuIENoZWNrIEdpdEh1YiBmb3IgbW9yZSBpbiBkZXB0aCBkZXRhaWxzIG9mIHRoZSBkZXZlbG9wbWVudCBzdGFnZXMuXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9HVU4tRkFSTUVSLUJFQVJcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vR1VOLUZBUk1FUi1CRUFSL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIlRpYy1UYWMtVG9lXCIsXG4gICAgICAgICAgICBcIlRoZSBmYW1vdXNlIFRpYyBUYWMgVG9lIGdhbWUgbWFkZSB3aXRoIEhUTUw1LCBDU1MzIGFuZCBKYXZhU2NyaXB0ISBJIHVzZWQgdGhpcyBwcm9qZWN0IHRvIHByYWN0aWNlIHNpbXBsZSBhbGdvcml0aG1zIGFuZCB1c2luZyBldmVudCBsaXN0ZW5lcnMuIEZlYXR1cmVzOiBUd28gcGxheWVyIG1vZGUsIENoZWNrcyBmb3IgYSB3aW5uZXIgb3IgaWYgdGhlcmUgaXMgYSB0aWUuXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9UaWMtVGFjLVRvZVwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9UaWMtVGFjLVRvZS9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIHJldHVybiBjcmVhdGVXb3JrICAgICAgIFxuICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlV29ya0l0ZW0obmFtZSwgZGVzY3JpcHRpb24sIGxpbmtDb2RlLCBsaW5rTGl2ZSkge1xuICAgIGNvbnN0IHByb2plY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTsgLy9wcm9kdWN0IGxhbmRpbmcgcGFnZSA0OCBodG1sXG5cbiAgICBjb25zdCBwcm9qZWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SW1nXCIpO1xuICAgIHByb2plY3RJbWcuc3JjID1gLi9pbWcvcHJvamVjdHMvJHtuYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG4gICAgcHJvamVjdEltZy5hbHQgPSBgJHtuYW1lfWA7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3REZXNjcmlwdGlvblwiKTsgXG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGV4dFwiKTtcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QnV0dG9uc1wiKTtcbiAgICBcbiAgICBjb25zdCByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICByZXZpZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcInJldmlld0J1dHRvblwiKTtcbiAgICByZXZpZXdCdXR0b24uaHJlZiA9IGxpbmtDb2RlO1xuICAgIHJldmlld0J1dHRvbi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIHJldmlld0J1dHRvbi50ZXh0Q29udGVudCA9IFwie1JFVklFVyBUSEUgQ09ERX1cIjtcbiAgIFxuICAgIGNvbnN0IGxpdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXZlQnV0dG9uXCIpO1xuICAgIGxpdmVCdXR0b24uaHJlZiA9IGxpbmtMaXZlO1xuICAgIGxpdmVCdXR0b24udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBsaXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJbU0VFIElUIExJVkVdXCI7XG5cbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChsaXZlQnV0dG9uKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChyZXZpZXdCdXR0b24pO1xuXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgIFxuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9ucyk7XG4gICAgXG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcbiAgLypcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9ucyk7XG4qL1xuICAgIHJldHVybiBwcm9qZWN0R3JpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd29ya1NlY3Rpb247XG5cblxuLypcblxuXG4gY29uc3QgcHJvamVjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpOyAvL3Byb2R1Y3QgbGFuZGluZyBwYWdlIDQ4IGh0bWxcbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKHByb2plY3RHcmlkKTtcblxuICAgIGNvbnN0IHByb2plY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2plY3RJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3RJbWdcIik7XG4gICAgcHJvamVjdEltZy5zcmMgPSBcIi4vaW1nL3Byb2plY3RzL3Jlc3RhdXJhbnQucG5nXCI7XG4gICAgcHJvamVjdEltZy5hbHQgPSBcInJlc3RhdXJhbnQgcGFnZVwiO1xuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3RJbWcpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJUVFRUVFRUVFwiO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRleHRcIik7XG4gICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBcImdnZ2dnZ2dnZ2dnZ2dcIjtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0QnV0dG9uc1wiKTtcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9ucyk7XG5cbiAgICBjb25zdCByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICByZXZpZXdCdXR0b24uY2xhc3NMaXN0LmFkZChcInJldmlld0J1dHRvblwiKTtcbiAgICByZXZpZXdCdXR0b24uaHJlZiA9IFwiXCI7XG4gICAgcmV2aWV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJSRVZJRVcgVEhFIENPREVcIjtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChyZXZpZXdCdXR0b24pO1xuXG4gICAgY29uc3QgbGl2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpdmVCdXR0b25cIik7XG4gICAgbGl2ZUJ1dHRvbi5ocmVmID1cIiBcIjtcbiAgICBsaXZlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTRUUgSVQgTElWRVwiO1xuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGxpdmVCdXR0b24pO1xuXG4gICAgIFxuXG5cbiBcbiovIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXJkbzp3Z2h0QDcwMCZmYW1pbHk9TGVhZ3VlK0dvdGhpYyZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmZhbWlseT1TcGVjaWFsK0VsaXRlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNhcmRvOndnaHRANzAwJmZhbWlseT1MZWFndWUrR290aGljJmZhbWlseT1TcGVjaWFsK0VsaXRlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLWZvbnQtY29sb3Itb3JhbmdlOiByZ2IoMjU1LCAxNTIsIDApO1xcbiAgLS1mb250LWNvbG9yLWJsdWU6ICMzMmMwZjQ7XFxuICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIC0tZm9udC1mYW1pbHktaGVhZGVyOiBmb250LWZhbWlseTogJ0xlYWd1ZSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LWZhbWlseS1ib2R5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tYmxhY2s6ICMwMDA7XFxuICAtLXdoaXRlOiAjZmZmZmZmO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYm9keSk7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDEuOHJlbTsgXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJMb2dve1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAyLjV2dyk7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG59XFxuXFxuLmhlYWRlckxvZ286aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5uYXZ7XFxuICB3b3JkLXNwYWNpbmc6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IC00dmg7XFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICBcXG59XFxuXFxubmF2IGF7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTsgXFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5pbnRyb0NvbnRlbnR7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIG1hcmdpbi10b3A6IDE1dmg7XFxufVxcblxcbmgxLFxcbmgyLCBcXG4ubmFtZUludHJvIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGVhZ3VlIEdvdGhpYycsIHNhbnMtc2VyaWY7O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRpdGxlSW50cm97XFxuICBmb250LXNpemU6IGNhbGMoMTAwcHggKyAxdncpO1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG4gXFxufVxcblxcbi5uYW1lSW50cm97XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogY2FsYyg3MHB4ICsgMXZ3KTtcXG4gIG1hcmdpbi10b3A6IDM1cHg7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLnRleHQxe1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiBjYWxjKDNweCArIDJ2dyk7IFxcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogMjhjaDtcXG4gIGFuaW1hdGlvbjogdHlwaW5nIDJzIHN0ZXBzKDIyKSwgYmxpbmsgLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQ7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDBcXG4gIH1cXG59XFxuICAgIFxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgNTAlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudFxcbiAgfVxcbn1cXG5cXG4uY3JlYXRlQWJvdXRNZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uYWJvdXRNZURpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYWJvdXRNZURpdiAubGVmdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7IFxcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgd2lkdGg6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDQwdnc7XFxufVxcblxcbi5hYm91dE1lVGl0bGU6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5za2lsbHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG59XFxuXFxuLnNraWxsQ29udGFpbmVye1xcbiAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmxldmVse1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpOyBcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuXFxuLmZyb250TG9nb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7ICBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvZHVjdCBpbWd7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMzVweCArIDF2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBcXG59XFxuXFxuLnN0YWNrLWl0ZW17XFxuICBwYWRkaW5nOiA0MHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnN0YWNrLWl0ZW0gaDR7XFxuICBjb2xvcjp2YXIoLS13aGl0ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5za2lsbHNUaXRsZXtcXG4gIHdpZHRoOiA0NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAxdncpOyBcXG59XFxuXFxuLmZyb250TG9nbyAuc3RhY2staXRlbTpudGgtY2hpbGQoNCkgaW1ne1xcbiBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuIFxcbn1cXG5cXG4uZnJvbnRMb2dvIC5zdGFjay1pdGVtOm50aC1jaGlsZCg1KSBpbWd7XFxuICBib3JkZXItcmFkaXVzOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5zcGVha3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnNwZWFrIC5jb3VudHJ5e1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4OyAgXFxufVxcblxcbi5jb3VudHJ5IGltZ3tcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNyZWF0ZVdvcmt7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm15V29ya3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG4gIC5teVdvcms6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICAgIG9wYWNpdHk6IC45O1xcbn1cXG5cXG4uZ3JpZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA0MHB4OyAgXFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0SW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDsgXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0RGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGV7XFxuICBmb250LXNpemU6IGNhbGMoMzBweCArIC42dncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25zIC5yZXZpZXdCdXR0b257XFxuICBwYWRkaW5nOiAxMnB4IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXZpZXdCdXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLmxpdmVCdXR0b257XFxuICBwYWRkaW5nOiAxMnB4IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4OyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpdmVCdXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25zIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcbn1cXG5cXG4uY29udGFjdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAzMHB4IDMwcHggMCAzMHB4O1xcbn1cXG5cXG4uY29udGFjdCBoMntcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG5cXG4uY29udGFjdCBoMjpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBvcGFjaXR5OiAuOTtcXG59XFxuXFxuLmNvbnRhY3RDb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdFRleHR7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAuMXZ3KTtcXG59XFxuXFxuLmNvbnRhY3RMaXN0e1xcbiAgd2lkdGg6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4gIC5saXN0VGl0bGV7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubGlzdFNlY1RpdGxle1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5saXN0SWNvbnNUaXRsZXtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdEljb25ze1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3RJY29ucyBhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJY29ucyBhIGltZ3tcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoNDVweCArIDF2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDI1cHggMTVweCAxMHB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xcbiBcXG59XFxuXFxuLmxpc3RJY29ucyBhIGltZzpob3ZlcntcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmltZ0RpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLndhdmUge1xcbiBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ud2F2ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAgYXV0bztcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsIHJnYmEoODQsNTgsMTgzLDEpIDAlLCByZ2JhKDAsMTcyLDE5MywxKSAxMDAlKTtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ud2F2ZXMge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDoxNXZoO1xcbiAgbWFyZ2luLWJvdHRvbTotOHB4OyAvKkZpeCBmb3Igc2FmYXJpIGdhcCovXFxuICBtaW4taGVpZ2h0OjEwMHB4O1xcbiAgbWF4LWhlaWdodDoxNTBweDtcXG59XFxuXFxuLyogQW5pbWF0aW9uICovXFxuXFxuLnBhcmFsbGF4ID4gdXNlIHtcXG4gIGFuaW1hdGlvbjogbW92ZS1mb3JldmVyIDI1cyBjdWJpYy1iZXppZXIoLjU1LC41LC40NSwuNSkgICAgIGluZmluaXRlO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDEpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTJzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA3cztcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0zcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDMpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTRzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxM3M7XFxufVxcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoNCkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcXG59XFxuQGtleWZyYW1lcyBtb3ZlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTkwcHgsMCwwKTtcXG4gIH1cXG4gIDEwMCUgeyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg4NXB4LDAsMCk7XFxuICB9XFxufVxcbi8qU2hyaW5raW5nIGZvciBtb2JpbGUqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLndhdmVzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6NDBweDtcXG4gICAgbWluLWhlaWdodDo0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjAlO1xcbiAgfVxcbn1cXG5cXG4vKiA5ODBweCAvIDE2cHggPSA2MS4yNWVtICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYxLjI1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU4JTtcXG4gIH1cXG59XFxuXFxuLyogNDYwcHggLyAxNnB4ID0gMjguNzVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAyOC43NWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1NSU7XFxufVxcbiAgI2NvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4gIC5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAuaGVhZGVyTG9nb3tcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy10b3A6IDFweDtcXG59XFxuXFxuICBuYXZ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG4gIC5mcm9udExvZ297XFxuICAgIGdhcDoxcmVtO1xcbn1cXG5cXG4gIC5saXN0SWNvbnMgYSBpbWd7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgfVxcbiAgLmNvcHlyaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSl7XFxuICAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5hYm91dE1lVGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCl7XFxuICAuYWJvdXRNZURpdiAubGVmdCxcXG4gIC5hYm91dE1lRGl2IC5yaWdodHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCl7XFxuICAucHJvamVjdEJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMTBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcblxcbiAgLnNraWxsc1RpdGxle1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICAuZnJvbnRMb2dve1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgfVxcblxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7ICBcXG4gIH1cXG5cXG4gIC5hYm91dE1lVGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuXFxuICAuc3BlYWt7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgI2NvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxuICAuc3BlYWt7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDM1cHg7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDUwcHgpe1xcbiAgLmNvbnRhY3RDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFjdFRleHR7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RMaXN0e1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5jb250YWN0VGV4dHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArIC4xdncpO1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xcbiAgLnByb2plY3RCdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTU1MHB4KXtcXG4gIC5ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gIH1cXG4gIC5teVdvcmt7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZGlzcGxheTogIGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLnByb2plY3RJbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gIH1cXG4gIC5wcm9qZWN0RGVzY3JpcHRpb257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnByb2plY3RCdXR0b25ze1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3R7XFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxuICB9XFxuXFxuICAuY29udGFjdCBoMntcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsOERBQThEO0VBQzlELDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7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Zm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PUxlYWd1ZStHb3RoaWMmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZmYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXJkbzp3Z2h0QDcwMCZmYW1pbHk9TGVhZ3VlK0dvdGhpYyZmYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgLS1mb250LWNvbG9yLW9yYW5nZTogcmdiKDI1NSwgMTUyLCAwKTtcXG4gIC0tZm9udC1jb2xvci1ibHVlOiAjMzJjMGY0O1xcbiAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICAtLWZvbnQtZmFtaWx5LWhlYWRlcjogZm9udC1mYW1pbHk6ICdMZWFndWUgR290aGljJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC1mYW1pbHktYm9keTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAtLWJsYWNrOiAjMDAwO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJvZHkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07IFxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbiNjb250ZW50e1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyTG9nb3tcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMi41dncpO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBwYWRkaW5nLXRvcDogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxufVxcblxcbi5oZWFkZXJMb2dvOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxubmF2e1xcbiAgd29yZC1zcGFjaW5nOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtNHZoO1xcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4OyAgXFxufVxcblxcbm5hdiBhe1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7IFxcbn1cXG5cXG5uYXYgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uaW50cm9Db250ZW50e1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBtYXJnaW4tdG9wOiAxNXZoO1xcbn1cXG5cXG5oMSxcXG5oMiwgXFxuLm5hbWVJbnRybyB7XFxuICBmb250LWZhbWlseTogJ0xlYWd1ZSBHb3RoaWMnLCBzYW5zLXNlcmlmOztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50aXRsZUludHJve1xcbiAgZm9udC1zaXplOiBjYWxjKDEwMHB4ICsgMXZ3KTtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxuIFxcbn1cXG5cXG4ubmFtZUludHJve1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItYmx1ZSk7XFxuICBmb250LXNpemU6IGNhbGMoNzBweCArIDF2dyk7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi50ZXh0MXtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygzcHggKyAydncpOyBcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDI4Y2g7XFxuICBhbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyMiksIGJsaW5rIC41cyBzdGVwLWVuZCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuQGtleWZyYW1lcyB0eXBpbmcge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwXFxuICB9XFxufVxcbiAgICBcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDUwJSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcXG4gIH1cXG59XFxuXFxuLmNyZWF0ZUFib3V0TWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmFib3V0TWVEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmFib3V0TWVEaXYgLmxlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpOyBcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5hYm91dE1lRGl2IC5yaWdodHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4uYWJvdXRNZVRpdGxlOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIG9wYWNpdHk6IC45O1xcbn1cXG5cXG4uc2tpbGxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxufVxcblxcbi5za2lsbENvbnRhaW5lcntcXG4gIHdpZHRoOiA1NSU7XFxufVxcblxcbi5sZXZlbHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTsgXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5mcm9udExvZ297XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsOyAgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2R1Y3QgaW1ne1xcbiAgei1pbmRleDogMTA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDM1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgXFxufVxcblxcbi5zdGFjay1pdGVte1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zdGFjay1pdGVtIGg0e1xcbiAgY29sb3I6dmFyKC0td2hpdGUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxzVGl0bGV7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgMXZ3KTsgXFxufVxcblxcbi5mcm9udExvZ28gLnN0YWNrLWl0ZW06bnRoLWNoaWxkKDQpIGltZ3tcXG4gYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiBcXG59XFxuXFxuLmZyb250TG9nbyAuc3RhY2staXRlbTpudGgtY2hpbGQoNSkgaW1ne1xcbiAgYm9yZGVyLXJhZGl1czogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uc3BlYWt7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5zcGVhayAuY291bnRyeXtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDsgIFxcbn1cXG5cXG4uY291bnRyeSBpbWd7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGNhbGMoMzVweCArIDF2dyk7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jcmVhdGVXb3Jre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5teVdvcmt7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuICAubXlXb3JrOmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgICBvcGFjaXR5OiAuOTtcXG59XFxuXFxuLmdyaWR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNDBweDsgIFxcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4ucHJvamVjdEltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAuNnZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyAucmV2aWV3QnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmV2aWV3QnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5saXZlQnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXZlQnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuLmNvbnRhY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMzBweCAzMHB4IDAgMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgaDJ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuXFxuLmNvbnRhY3QgaDI6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5jb250YWN0Q29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3RUZXh0e1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgLjF2dyk7XFxufVxcblxcbi5jb250YWN0TGlzdHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuICAubGlzdFRpdGxle1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3RTZWNUaXRsZXtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEljb25zVGl0bGV7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJY29uc3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5saXN0SWNvbnMgYXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWd7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDQ1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAyNXB4IDE1cHggMTBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gXFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWc6aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5pbWdEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi53YXZlIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG59XFxuXFxuLndhdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgIGF1dG87XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2JhKDg0LDU4LDE4MywxKSAwJSwgcmdiYSgwLDE3MiwxOTMsMSkgMTAwJSk7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLndhdmVzIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MTV2aDtcXG4gIG1hcmdpbi1ib3R0b206LThweDsgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xcbiAgbWluLWhlaWdodDoxMDBweDtcXG4gIG1heC1oZWlnaHQ6MTUwcHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbiAqL1xcblxcbi5wYXJhbGxheCA+IHVzZSB7XFxuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAyNXMgY3ViaWMtYmV6aWVyKC41NSwuNSwuNDUsLjUpICAgICBpbmZpbml0ZTtcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0ycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XFxufVxcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC00cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDQpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XFxufVxcbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LDAsMCk7XFxuICB9XFxuICAxMDAlIHsgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwwLDApO1xcbiAgfVxcbn1cXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YXZlcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6NDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDYwJTtcXG4gIH1cXG59XFxuXFxuLyogOTgwcHggLyAxNnB4ID0gNjEuMjVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA2MS4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1OCU7XFxuICB9XFxufVxcblxcbi8qIDQ2MHB4IC8gMTZweCA9IDI4Ljc1ZW0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbn1cXG4gICNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiAgLmhlYWRlckxvZ297XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbiAgbmF2e1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxuICAuZnJvbnRMb2dve1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuICAubGlzdEljb25zIGEgaW1ne1xcbiAgICB3aWR0aDogMTV2dztcXG4gIH1cXG4gIC5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4Ljc1ZW0pe1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNraWxsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBcXG4gIH1cXG4gIC5hYm91dE1lRGl2IC5sZWZ0LFxcbiAgLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpe1xcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpe1xcbiAgLnByb2plY3RCdXR0b25ze1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzEwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5za2lsbHNUaXRsZXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLmZyb250TG9nb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5zcGVha3tcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAgXFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gICNjb250ZW50e1xcbiAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcbiAgLnNwZWFre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAzNXB4O1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KXtcXG4gIC5jb250YWN0Q29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RUZXh0e1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWN0TGlzdHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY29udGFjdFRleHR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAuMXZ3KTtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KXtcXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE1NTBweCl7XFxuICAuZ3JpZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICB9XFxuICAubXlXb3Jre1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5wcm9qZWN0SW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0e1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDJ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGUuanNcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOlsiYWJvdXRTZWN0aW9uIiwiY3JlYXRlQWJvdXRNZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImFib3V0TWVEaXYiLCJhcHBlbmRDaGlsZCIsImxlZnQiLCJyaWdodCIsImFib3V0TWVUaXRsZSIsInRleHRDb250ZW50IiwiYWJvdXRNZURlc2NyaXB0aW9uIiwic2tpbGxzRGl2Iiwic2tpbGxDb250YWluZXIiLCJzdGFja0Zyb250Iiwic3RhY2tGcm9udFRpdGxlIiwiZnJvbnRMb2dvIiwiY3JlYXRlU3RhY2tJdGVtIiwic3RhY2tUZWNobm9sb2d5Iiwic3RhY2tUZWNobm9sb2d5VGl0bGUiLCJ0ZWNoTG9nbyIsInNraWxsc1RpdGxlIiwic3BlYWtEaXYiLCJlbmdsaXNoRGl2IiwiZW5nbGlzaEltZyIsInNyYyIsImFsdCIsInJvbWFuaWFuRGl2Iiwicm9tYW5pYW5JbWciLCJkZURpdiIsImRlSW1nIiwibmFtZSIsInN0YWNrSXRlbSIsInN0YWNrTmFtZSIsInN0YWNrSW1hZ2UiLCJ0b0xvd2VyQ2FzZSIsImNvbnRhY3RTZWN0aW9uIiwiY29udGFjdCIsImNvbnRhY3RUaXRsZSIsImNvbnRhY3RDb250ZW50IiwiY29udGFjdFRleHQiLCJjb250YWN0TGlzdCIsImxpc3RUaWxlIiwibGlzdFNlY1RpdGxlIiwibGlzdEljb25zIiwibGlzdEljb25zVGl0bGUiLCJpbWdEaXYiLCJsaXN0R2l0SWNvbiIsImdpdExpbmsiLCJocmVmIiwidGFyZ2V0IiwibGlzdEluIiwiaW5Mb2dvIiwiY3JlYXRlSW50cm8iLCJpbnRyb0NvbnRlbnQiLCJ0aXRsZUludHJvIiwibmFtZUludHJvIiwidGV4dDEiLCJzdHlsZSIsIndvcmtTZWN0aW9uIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyTG9nbyIsImNyZWF0ZU5hdiIsIm5hdiIsImFib3V0TWVudSIsIndvcmtNZW51IiwiY29udGFjdE1lbnUiLCJjcmVhdGVNYWluIiwibWFpbiIsImluaXRpYWxpemVXZWJzaXRlIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlV29yayIsIm15V29yayIsImNyZWF0ZVdvcmtJdGVtIiwiZGVzY3JpcHRpb24iLCJsaW5rQ29kZSIsImxpbmtMaXZlIiwicHJvamVjdEdyaWQiLCJwcm9qZWN0SW1nIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdFRpdGxlIiwicHJvamVjdFRleHQiLCJwcm9qZWN0QnV0dG9ucyIsInJldmlld0J1dHRvbiIsImxpdmVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9