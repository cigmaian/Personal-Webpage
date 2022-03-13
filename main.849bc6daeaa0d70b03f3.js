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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 80%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 2.5vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: var(--black);\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color: var(--black); \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: var(--black);\n  margin-top: 15vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n}\n\n.titleIntro{\n  font-size: calc(100px + 1vw);\n  margin-top: 80px;\n \n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(70px + 1vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n  width: 28ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n}\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: var(--black);\n  border-radius: 20px; \n  position: relative;\n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n  \n}\n\n.stack-item{\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.stack-item h4{\n  color:var(--white);\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n\n.frontLogo .stack-item:nth-child(4) img{\n background: var(--white);\n border-radius: 10px;\n \n}\n\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: var(--white);\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: var(--black);\n}\n\n.speak .country{\n  color: var(--white);\n  align-items: center;\n  display: flex;  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: var(--black);\n  border-radius: 50%;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n}\n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 80%;\n}\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.myWork:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n  padding: 0px;\n  width: 100%;\n}\n\n.projectImg {\n  display: block;\n  height: auto;\n  width: 65%;\n  margin: 10px 0;\n  border-radius: 30px; \n  border: 1px solid var(--black);\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px;\n  text-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n}\n\n.liveButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  padding: 30px 30px 0 30px;\n}\n\n.contact h2{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.contact h2:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.contactContent{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.contactText{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  font-size: calc(24px + .1vw);\n}\n\n.contactList{\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n  .listTitle{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listSecTitle{\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n\n.listIconsTitle{\n  width: 100%;\n  text-align: center;\n}\n\n.listIcons{\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listIcons a{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listIcons a img{\n  display: block;\n  width: calc(45px + 1vw);\n  height: auto;\n  margin: 25px 15px 10px 10px;\n  transition: transform .3s ease-in-out;\n \n}\n\n.listIcons a img:hover{\n  transform: scale(1.2);\n}\n\n.imgDiv{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: larger;\n}\n\n/* Footer */\n\n.wave {\n position: relative;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  color: var(--black);\n  background-color:var(--white);\n}\n\n.wave {\n  width: 100%;\n  margin: 0  auto;\n  position:relative;\n  text-align:center;\n  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);\n  color:white;\n}\n\n.waves {\n  position:relative;\n  width: 100%;\n  height:15vh;\n  margin-bottom:-8px; /*Fix for safari gap*/\n  min-height:100px;\n  max-height:150px;\n}\n\n/* Animation */\n\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n   transform: translate3d(-90px,0,0);\n  }\n  100% { \n    transform: translate3d(85px,0,0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waves {\n    text-align: center;\n    height:40px;\n    min-height:40px;\n  }\n}\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n}\n  #content{\n    width: 100%;\n}\n\n  .header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n  .headerLogo{\n    margin-left: 0px;\n    padding-top: 1px;\n}\n\n  nav{\n    margin-top: 15px;\n    margin-right: 0px;\n}\n\n  .frontLogo{\n    gap:1rem;\n}\n\n  .listIcons a img{\n    width: 15vw;\n  }\n  .copyright {\n  display: flex;\n  flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n\n  .frontLogo{\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n\n  .speak{\n    width: auto;\n  }\n\n  #content{\n  width: 100%;\n  }\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n\n@media (max-width: 1450px){\n  .contactContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contactText{\n    width: 85%;\n    display: flex;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactList{\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactText{\n    text-align: center;\n    font-size: calc(20px + .1vw);\n  }\n}\n\n\n@media (max-width: 650px){\n  .projectButtons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    margin-top: 40px;\n  }\n}\n\n@media (max-width: 1750px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n\n  .contact{\n    margin-top: -5px;\n  }\n\n  .contact h2{\n  margin-bottom: 30px;\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  text-align: center;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  };\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Open+Sans:wght@300&family=Special+Elite&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Special+Elite&display=swap');\n\n:root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\nbody {\n  color: var(--font-color);\n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 80%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 2.5vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: var(--black);\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color: var(--black); \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: var(--black);\n  margin-top: 15vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n}\n\n.titleIntro{\n  font-size: calc(100px + 1vw);\n  margin-top: 80px;\n \n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(70px + 1vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n  width: 28ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n}\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: var(--black);\n  border-radius: 20px; \n  position: relative;\n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n  \n}\n\n.stack-item{\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.stack-item h4{\n  color:var(--white);\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n\n.frontLogo .stack-item:nth-child(4) img{\n background: var(--white);\n border-radius: 10px;\n \n}\n\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: var(--white);\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: var(--black);\n}\n\n.speak .country{\n  color: var(--white);\n  align-items: center;\n  display: flex;  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: var(--black);\n  border-radius: 50%;\n  display: block;\n  width: calc(35px + 1vw);\n  height: auto;\n}\n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 80%;\n}\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.myWork:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n  padding: 0px;\n  width: 100%;\n}\n\n.projectImg {\n  display: block;\n  height: auto;\n  width: 65%;\n  margin: 10px 0;\n  border-radius: 30px; \n  border: 1px solid var(--black);\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px;\n  text-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n}\n\n.liveButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n.contact{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 85%;\n  padding: 30px 30px 0 30px;\n}\n\n.contact h2{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  margin-bottom: 35px;\n}\n\n.contact h2:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.contactContent{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.contactText{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  font-size: calc(24px + .1vw);\n}\n\n.contactList{\n  width: 55%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n  .listTitle{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listSecTitle{\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n\n.listIconsTitle{\n  width: 100%;\n  text-align: center;\n}\n\n.listIcons{\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.listIcons a{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.listIcons a img{\n  display: block;\n  width: calc(45px + 1vw);\n  height: auto;\n  margin: 25px 15px 10px 10px;\n  transition: transform .3s ease-in-out;\n \n}\n\n.listIcons a img:hover{\n  transform: scale(1.2);\n}\n\n.imgDiv{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Main */\n\n.main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: larger;\n}\n\n/* Footer */\n\n.wave {\n position: relative;\n}\n\n.copyright {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: absolute;\n  z-index: 10;\n  width: 100%;\n  color: var(--black);\n  background-color:var(--white);\n}\n\n.wave {\n  width: 100%;\n  margin: 0  auto;\n  position:relative;\n  text-align:center;\n  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);\n  color:white;\n}\n\n.waves {\n  position:relative;\n  width: 100%;\n  height:15vh;\n  margin-bottom:-8px; /*Fix for safari gap*/\n  min-height:100px;\n  max-height:150px;\n}\n\n/* Animation */\n\n.parallax > use {\n  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;\n}\n.parallax > use:nth-child(1) {\n  animation-delay: -2s;\n  animation-duration: 7s;\n}\n.parallax > use:nth-child(2) {\n  animation-delay: -3s;\n  animation-duration: 10s;\n}\n.parallax > use:nth-child(3) {\n  animation-delay: -4s;\n  animation-duration: 13s;\n}\n.parallax > use:nth-child(4) {\n  animation-delay: -5s;\n  animation-duration: 20s;\n}\n@keyframes move-forever {\n  0% {\n   transform: translate3d(-90px,0,0);\n  }\n  100% { \n    transform: translate3d(85px,0,0);\n  }\n}\n/*Shrinking for mobile*/\n@media (max-width: 768px) {\n  .waves {\n    text-align: center;\n    height:40px;\n    min-height:40px;\n  }\n}\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n}\n  #content{\n    width: 100%;\n}\n\n  .header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\n  .headerLogo{\n    margin-left: 0px;\n    padding-top: 1px;\n}\n\n  nav{\n    margin-top: 15px;\n    margin-right: 0px;\n}\n\n  .frontLogo{\n    gap:1rem;\n}\n\n  .listIcons a img{\n    width: 15vw;\n  }\n  .copyright {\n  display: flex;\n  flex-wrap: wrap;\n  }\n}\n\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n\n  .frontLogo{\n    width: 100%;\n    padding: 0 10px;\n  }\n\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n\n  .speak{\n    width: auto;\n  }\n\n  #content{\n  width: 100%;\n  }\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n\n@media (max-width: 1450px){\n  .contactContent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .contactText{\n    width: 85%;\n    display: flex;\n    margin-bottom: 30px;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .contactList{\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .contactText{\n    text-align: center;\n    font-size: calc(20px + .1vw);\n  }\n}\n\n\n@media (max-width: 650px){\n  .projectButtons{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    margin-top: 40px;\n  }\n}\n\n@media (max-width: 1750px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n\n  .contact{\n    margin-top: -5px;\n  }\n\n  .contact h2{\n  margin-bottom: 30px;\n  border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n  text-align: center;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  };\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSx3QkFBd0IsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLDRNQUE0TSwySkFBMkosV0FBVyx3QkFBd0IsMENBQTBDLCtCQUErQix5QkFBeUIsMEJBQTBCLG1FQUFtRSxnREFBZ0Qsa0JBQWtCLHFCQUFxQixHQUFHLDhCQUE4QiwyQkFBMkIsZUFBZSxjQUFjLEdBQUcsVUFBVSxxQkFBcUIsNEJBQTRCLHlDQUF5QyxHQUFHLFVBQVUsNkJBQTZCLHdDQUF3Qyx1QkFBdUIscUJBQXFCLHFCQUFxQixHQUFHLGFBQWEsZUFBZSxzQkFBc0IsMkJBQTJCLHVCQUF1QixtQkFBbUIsdUJBQXVCLHdCQUF3QixHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyxnQkFBZ0Isa0NBQWtDLHNCQUFzQixzQkFBc0Isb0NBQW9DLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLFFBQVEsc0JBQXNCLHdCQUF3Qix5QkFBeUIsR0FBRyxVQUFVLG9CQUFvQixxQkFBcUIseUJBQXlCLEdBQUcsaUJBQWlCLG9DQUFvQyxzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQixrQkFBa0IsMkJBQTJCLGdDQUFnQyw0QkFBNEIsa0NBQWtDLHdCQUF3QixxQkFBcUIsR0FBRywyQkFBMkIsOENBQThDLHFCQUFxQixHQUFHLGdCQUFnQixpQ0FBaUMscUJBQXFCLE1BQU0sZUFBZSxrQ0FBa0MsZ0NBQWdDLHFCQUFxQixzQkFBc0IsR0FBRyxXQUFXLG9DQUFvQywrQkFBK0IsZ0NBQWdDLHFCQUFxQix1QkFBdUIscUJBQXFCLGdCQUFnQiwwRUFBMEUsd0JBQXdCLHFCQUFxQiw0QkFBNEIsMkJBQTJCLEdBQUcsdUJBQXVCLFVBQVUsbUJBQW1CLEdBQUcsMEJBQTBCLFNBQVMsb0NBQW9DLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQix3QkFBd0Isa0JBQWtCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IsZUFBZSxHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLDRCQUE0QixpQ0FBaUMsZUFBZSxHQUFHLHVCQUF1QixlQUFlLGtCQUFrQix3QkFBd0IsNEJBQTRCLGtEQUFrRCx3QkFBd0IsZ0JBQWdCLEdBQUcsd0JBQXdCLG9DQUFvQyxnQkFBZ0IsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsZUFBZSxzQkFBc0IsR0FBRyxvQkFBb0IsZUFBZSxHQUFHLFdBQVcsdUJBQXVCLGlDQUFpQyxvQkFBb0IsR0FBRyxlQUFlLGtCQUFrQixvQkFBb0IsNEJBQTRCLDRCQUE0Qix3QkFBd0IsY0FBYyxtQ0FBbUMseUJBQXlCLHVCQUF1QixHQUFHLGlCQUFpQixnQkFBZ0IsbUJBQW1CLDRCQUE0QixpQkFBaUIsT0FBTyxnQkFBZ0Isb0JBQW9CLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLG1CQUFtQix1QkFBdUIsdUJBQXVCLEdBQUcsaUJBQWlCLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUNBQWlDLEdBQUcsNENBQTRDLDRCQUE0Qix1QkFBdUIsTUFBTSw0Q0FBNEMsdUJBQXVCLG1DQUFtQyxHQUFHLFdBQVcsa0JBQWtCLDRCQUE0QixjQUFjLHdCQUF3Qix3QkFBd0IscUJBQXFCLHVCQUF1QixtQ0FBbUMsR0FBRyxvQkFBb0Isd0JBQXdCLHdCQUF3QixvQkFBb0IsR0FBRyxpQkFBaUIsc0JBQXNCLG1DQUFtQyx1QkFBdUIsbUJBQW1CLDRCQUE0QixpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isa0JBQWtCLGVBQWUsR0FBRyxZQUFZLGdCQUFnQixrQkFBa0IsZ0NBQWdDLG1EQUFtRCx3QkFBd0IsR0FBRyxrQkFBa0Isb0NBQW9DLGdCQUFnQixHQUFHLFVBQVUsa0JBQWtCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLGdCQUFnQixHQUFHLGlCQUFpQixtQkFBbUIsaUJBQWlCLGVBQWUsbUJBQW1CLHlCQUF5QixtQ0FBbUMsR0FBRyx3QkFBd0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLGVBQWUsR0FBRyxrQkFBa0IsaUNBQWlDLHFCQUFxQix1QkFBdUIsbUJBQW1CLEdBQUcsb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMscUJBQXFCLEdBQUcsa0NBQWtDLHNCQUFzQixnQkFBZ0IsY0FBYyx1QkFBdUIsbUNBQW1DLG1DQUFtQyx3QkFBd0Isb0JBQW9CLDhCQUE4Qix3QkFBd0Isb0JBQW9CLHVCQUF1QixnQkFBZ0IscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLEdBQUcsd0JBQXdCLG1DQUFtQyx3QkFBd0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsY0FBYyx1QkFBdUIsbUNBQW1DLG1DQUFtQyx3QkFBd0Isb0JBQW9CLDhCQUE4Qix3QkFBd0Isb0JBQW9CLHVCQUF1QixnQkFBZ0IscUJBQXFCLHFCQUFxQixzQkFBc0IsdUJBQXVCLEdBQUcsc0JBQXNCLG1DQUFtQyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLDBCQUEwQixLQUFLLGFBQWEsa0JBQWtCLDJCQUEyQix3QkFBd0IsZUFBZSw4QkFBOEIsR0FBRyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0MsbURBQW1ELHdCQUF3QixHQUFHLHNCQUFzQixvQ0FBb0MsZ0JBQWdCLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixHQUFHLGlCQUFpQixlQUFlLGtCQUFrQiw0QkFBNEIsaUNBQWlDLEdBQUcsaUJBQWlCLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsaUJBQWlCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGtCQUFrQixxQkFBcUIsd0JBQXdCLEdBQUcsb0JBQW9CLGdCQUFnQix1QkFBdUIsR0FBRyxlQUFlLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLEdBQUcsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLG1CQUFtQiw0QkFBNEIsaUJBQWlCLGdDQUFnQywwQ0FBMEMsTUFBTSwyQkFBMkIsMEJBQTBCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLHdCQUF3Qiw0QkFBNEIsR0FBRyx5QkFBeUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHNCQUFzQixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLGdCQUFnQixnQkFBZ0Isd0JBQXdCLGtDQUFrQyxHQUFHLFdBQVcsZ0JBQWdCLG9CQUFvQixzQkFBc0Isc0JBQXNCLHFGQUFxRixnQkFBZ0IsR0FBRyxZQUFZLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLHdCQUF3QiwyQ0FBMkMscUJBQXFCLEdBQUcsd0NBQXdDLHlFQUF5RSxHQUFHLGdDQUFnQyx5QkFBeUIsMkJBQTJCLEdBQUcsZ0NBQWdDLHlCQUF5Qiw0QkFBNEIsR0FBRyxnQ0FBZ0MseUJBQXlCLDRCQUE0QixHQUFHLGdDQUFnQyx5QkFBeUIsNEJBQTRCLEdBQUcsMkJBQTJCLFFBQVEsdUNBQXVDLEtBQUssV0FBVyx1Q0FBdUMsS0FBSyxHQUFHLHVEQUF1RCxZQUFZLHlCQUF5QixrQkFBa0Isc0JBQXNCLEtBQUssR0FBRyw4QkFBOEIsVUFBVSxxQkFBcUIsS0FBSyxHQUFHLCtEQUErRCxVQUFVLHFCQUFxQixLQUFLLEdBQUcsK0RBQStELFVBQVUscUJBQXFCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixrQkFBa0IsR0FBRyxrQkFBa0IsdUJBQXVCLHVCQUF1QixHQUFHLFVBQVUsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQixlQUFlLEdBQUcsdUJBQXVCLGtCQUFrQixLQUFLLGdCQUFnQixrQkFBa0Isb0JBQW9CLEtBQUssR0FBRyxnQ0FBZ0MsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixLQUFLLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsa0JBQWtCLEtBQUssb0JBQW9CLDBCQUEwQixXQUFXLDZDQUE2QyxpQkFBaUIsS0FBSyxHQUFHLDhCQUE4Qiw2Q0FBNkMsaUJBQWlCLEtBQUssR0FBRyxpQ0FBaUMsY0FBYyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLG1CQUFtQixLQUFLLG1CQUFtQix1QkFBdUIsb0RBQW9ELGlCQUFpQixLQUFLLGlCQUFpQixrQkFBa0Isc0JBQXNCLEtBQUssYUFBYSxrQkFBa0IsS0FBSyxHQUFHLCtCQUErQixnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0JBQW9CLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLGFBQWEsa0JBQWtCLEtBQUssZUFBZSxnQkFBZ0IsS0FBSyxHQUFHLCtCQUErQixXQUFXLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGdCQUFnQixLQUFLLEdBQUcsaUNBQWlDLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLEtBQUssbUJBQW1CLGlCQUFpQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsS0FBSyxtQkFBbUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixLQUFLLGlCQUFpQix5QkFBeUIsbUNBQW1DLEtBQUssR0FBRyxnQ0FBZ0Msb0JBQW9CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsdUJBQXVCLEtBQUssR0FBRywrQkFBK0IsVUFBVSxvQkFBb0IsNkJBQTZCLGtCQUFrQixPQUFPLFlBQVksMEJBQTBCLHFEQUFxRCx5QkFBeUIsaUJBQWlCLHFCQUFxQiw4QkFBOEIsS0FBSyxnQkFBZ0Isa0JBQWtCLFdBQVcsd0JBQXdCLGtCQUFrQixLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyxlQUFlLHVCQUF1QixLQUFLLGtCQUFrQix3QkFBd0IsbURBQW1ELHVCQUF1QixlQUFlLGtCQUFrQiw0QkFBNEIsTUFBTSxHQUFHLHFCQUFxQjtBQUM3MGdDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBVyx1REFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy93b3JrLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWJvdXRTZWN0aW9uKCl7XG5cbiAgICBjb25zdCBjcmVhdGVBYm91dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNyZWF0ZUFib3V0TWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcbiAgICBjcmVhdGVBYm91dE1lLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVBYm91dE1lXCIpO1xuXG4gICAgY29uc3QgYWJvdXRNZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0TWVEaXYuY2xhc3NMaXN0LmFkZChcImFib3V0TWVEaXZcIik7XG4gICAgXG4gICAgY3JlYXRlQWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lRGl2KTtcblxuICAgIFxuICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgYWJvdXRNZURpdi5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICBhYm91dE1lRGl2LmFwcGVuZENoaWxkKHJpZ2h0KTtcblxuICAgIGNvbnN0IGFib3V0TWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWJvdXRNZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lVGl0bGVcIik7XG4gICAgYWJvdXRNZVRpdGxlLnRleHRDb250ZW50ID0gXCJbMF1hYm91dE1lXCI7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChhYm91dE1lVGl0bGUpO1xuXG4gICAgY29uc3QgYWJvdXRNZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0TWVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZURlc2NyaXB0aW9uXCIpO1xuICAgIGFib3V0TWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiSSdtIGEgRnJvbnQtZW5kIGRldmVsb3BlciB3aG8gY2FycmllcyBhIGtlZW4gZXllIGZvciBkZXNpZ24gaW4gYW4gdXNlci1maXJzdCBhcHByb2FjaC4gTXkgY3VycmVudCBmb2N1cyBpcyBpbiBjcmVhdGluZyByZXNwb25zaXZlIGxheW91dHMgb24gdGhlIEphdmFTY3JpcHQgc3RhY2sgb2YgUmVhY3QgYW5kIE5vZGVKUyB3aGljaCBJIGhhdmUgYmVlbiBleHBsb3JpbmcgcmVjZW50bHksIGFuZCBmcm9tIG15IGJhY2tncm91bmQgYXMgYW4gcGh5c2ljaXN0IEknbSB3ZWxsIGFjcXVhaW50ZWQgdG8gYnJpbmdpbmcgb3V0IHNvbHV0aW9ucyB0byBjb21wbGV4IHByb2JsZW1zLlwiO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGFib3V0TWVEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBza2lsbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBza2lsbHNEaXYuY2xhc3NMaXN0LmFkZChcInNraWxsc1wiKTtcbiAgICBjcmVhdGVBYm91dE1lLmFwcGVuZENoaWxkKHNraWxsc0Rpdik7XG5cbiAgICBcblxuICAgIGNvbnN0IHNraWxsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8gcHJpY2luZ1xuICAgIHNraWxsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJza2lsbENvbnRhaW5lclwiKTsgXG4gICAgc2tpbGxzRGl2LmFwcGVuZENoaWxkKHNraWxsQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHN0YWNrRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YWNrRnJvbnQuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RcIik7XG4gICAgc2tpbGxDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhY2tGcm9udCk7ICAgIFxuXG4gICAgY29uc3Qgc3RhY2tGcm9udFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHN0YWNrRnJvbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGV2ZWxcIik7XG4gICAgc3RhY2tGcm9udFRpdGxlLnRleHRDb250ZW50ID0gXCJGcm9udC1lbmRcIjtcbiAgICBzdGFja0Zyb250LmFwcGVuZENoaWxkKHN0YWNrRnJvbnRUaXRsZSk7XG5cbiAgICBjb25zdCBmcm9udExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyb250TG9nby5jbGFzc0xpc3QuYWRkKFwiZnJvbnRMb2dvXCIpO1xuICAgIGZyb250TG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJIVE1MNVwiKSk7XG4gICAgZnJvbnRMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkNTUzNcIikpO1xuICAgIGZyb250TG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJKYXZhU2NyaXB0XCIpKTtcbiAgICBcbiAgICBzdGFja0Zyb250LmFwcGVuZENoaWxkKGZyb250TG9nbyk7XG5cbiAgICBjb25zdCBzdGFja1RlY2hub2xvZ3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YWNrVGVjaG5vbG9neS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdFwiKTtcbiAgICBza2lsbENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFja1RlY2hub2xvZ3kpO1xuXG4gICAgY29uc3Qgc3RhY2tUZWNobm9sb2d5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgc3RhY2tUZWNobm9sb2d5VGl0bGUuY2xhc3NMaXN0LmFkZChcImxldmVsXCIpO1xuICAgIHN0YWNrVGVjaG5vbG9neVRpdGxlLnRleHRDb250ZW50ID0gXCJUZWNobm9sb2d5c1wiO1xuICAgIHN0YWNrRnJvbnQuYXBwZW5kQ2hpbGQoc3RhY2tUZWNobm9sb2d5VGl0bGUpO1xuXG4gICAgY29uc3QgdGVjaExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRlY2hMb2dvLmNsYXNzTGlzdC5hZGQoXCJmcm9udExvZ29cIik7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiR2l0XCIpKTtcbiAgICB0ZWNoTG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJXZWJQYWNrXCIpKTtcbiAgICB0ZWNoTG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJucG1cIikpO1xuICAgIHRlY2hMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkxpbnV4XCIpKTtcbiAgICB0ZWNoTG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJHaXRIdWJcIikpO1xuICAgXG5cbiAgICBzdGFja0Zyb250LmFwcGVuZENoaWxkKHRlY2hMb2dvKTtcblxuICAgIGNvbnN0IHNraWxsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBza2lsbHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2tpbGxzVGl0bGVcIik7XG4gICAgc2tpbGxzVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvb2xzIGFuZCBTa2lsbHNcIjtcbiAgICBza2lsbHNEaXYuYXBwZW5kQ2hpbGQoc2tpbGxzVGl0bGUpO1xuXG4gICAgY29uc3Qgc3BlYWtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGVha0Rpdi5jbGFzc0xpc3QuYWRkKFwic3BlYWtcIik7XG4gICAgY3JlYXRlQWJvdXRNZS5hcHBlbmRDaGlsZChzcGVha0Rpdik7XG5cbiAgICBjb25zdCBlbmdsaXNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW5nbGlzaERpdi5jbGFzc0xpc3QuYWRkKFwiY291bnRyeVwiKTtcbiAgICBlbmdsaXNoRGl2LnRleHRDb250ZW50ID0gXCJJIHNwZWFrIEVuZ2xpc2hcIjtcbiAgICBzcGVha0Rpdi5hcHBlbmRDaGlsZChlbmdsaXNoRGl2KTtcblxuICAgIGNvbnN0IGVuZ2xpc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlbmdsaXNoSW1nLmNsYXNzTGlzdC5hZGQoJ2xhbmd1YWdlJyk7XG4gICAgZW5nbGlzaEltZy5zcmMgPSBcIi4vaW1nL2xhbmd1YWdlL3VrLnN2Z1wiO1xuICAgIGVuZ2xpc2hJbWcuYWx0ID0gXCJlbmdsaXNoXCI7XG4gICAgZW5nbGlzaERpdi5hcHBlbmRDaGlsZChlbmdsaXNoSW1nKTtcblxuICAgIGNvbnN0IHJvbWFuaWFuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm9tYW5pYW5EaXYuY2xhc3NMaXN0LmFkZChcImNvdW50cnlcIik7XG4gICAgcm9tYW5pYW5EaXYudGV4dENvbnRlbnQgPSBcIlZvcmJlc2Mgcm9tw6JuZciZdGVcIjtcbiAgICBzcGVha0Rpdi5hcHBlbmRDaGlsZChyb21hbmlhbkRpdik7XG5cbiAgICBjb25zdCByb21hbmlhbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJvbWFuaWFuSW1nLmNsYXNzTGlzdC5hZGQoJ2xhbmd1YWdlJyk7XG4gICAgcm9tYW5pYW5JbWcuc3JjID0gXCIuL2ltZy9sYW5ndWFnZS9yby5wbmdcIjtcbiAgICByb21hbmlhbkltZy5hbHQgPSBcInJvXCI7XG4gICAgcm9tYW5pYW5EaXYuYXBwZW5kQ2hpbGQocm9tYW5pYW5JbWcpO1xuXG5cbiAgICBjb25zdCBkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuICAgIGRlRGl2LnRleHRDb250ZW50ID0gXCJJY2ggc3ByZWNoZSBkZXV0c2NoXCI7XG4gICAgc3BlYWtEaXYuYXBwZW5kQ2hpbGQoZGVEaXYpO1xuXG4gICAgY29uc3QgZGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZUltZy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgIGRlSW1nLnNyYyA9IFwiLi9pbWcvbGFuZ3VhZ2UvZGUucG5nXCI7XG4gICAgZGVJbWcuYWx0ID0gXCJkZVwiO1xuICAgIGRlRGl2LmFwcGVuZENoaWxkKGRlSW1nKTtcblxuICAgIHJldHVybiBjcmVhdGVBYm91dE1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFja0l0ZW0obmFtZSl7XG4gICAgY29uc3Qgc3RhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFja0l0ZW0uY2xhc3NMaXN0LmFkZChcInN0YWNrLWl0ZW1cIik7XG4gICAgXG4gICAgY29uc3Qgc3RhY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHN0YWNrTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBzdGFja0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzdGFja0ltYWdlLnNyYyA9IGAuL2ltZy9zdGFjay8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgICBzdGFja0ltYWdlLmFsdCA9IGAke25hbWV9YDtcbiAgICBzdGFja0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJzdGFja1wiKTtcblxuICAgIHN0YWNrSXRlbS5hcHBlbmRDaGlsZChzdGFja0ltYWdlKTtcbiAgICBzdGFja0l0ZW0uYXBwZW5kQ2hpbGQoc3RhY2tOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gc3RhY2tJdGVtO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0U2VjdGlvbjtcblxuLypcblxuXG4gICBcblxuICAgXG4gXG4qLyIsImZ1bmN0aW9uIGNvbnRhY3RTZWN0aW9uKCl7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RcIik7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICBcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiWzJdY29udGFjdFwiO1xuICAgIFxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRlbnRcIik7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCk7XG5cbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VGV4dFwiKTtcbiAgICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9IFwiSSdtIGN1cnJlbnRseSBpbnRlcmVzdGVkIGluIGEgRnJvbnQtZW5kIGRldmVsb3Blci4gUGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IG1lIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgYWRkaXRpb25hbCBjcmVkZW50aWFscyBvciB0aGUgZGVzaWduIG9mIHRoaXMgd2Vic2l0ZS5cIlxuXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4gICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0TGlzdFwiKTtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG4gICAgXG4gICAgY29uc3QgbGlzdFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaXN0VGlsZS5jbGFzc0xpc3QuYWRkKFwibGlzdFRpdGxlXCIpO1xuICAgIGxpc3RUaWxlLnRleHRDb250ZW50ID0gXCJZb3UgY2FuIHdyaXRlIG1lIGFuIGUtbWFpbCBhdDogY2lnbWFpYW4xQGdtYWlsLmNvbVwiO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RUaWxlKTtcblxuICAgIGNvbnN0IGxpc3RTZWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxpc3RTZWNUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdFNlY1RpdGxlXCIpO1xuICAgIGxpc3RTZWNUaXRsZS50ZXh0Q29udGVudCA9IFwiT1JcIjtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0U2VjVGl0bGUpO1xuXG4gICAgY29uc3QgbGlzdEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0SWNvbnMuY2xhc3NMaXN0LmFkZChcImxpc3RJY29uc1wiKTtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SWNvbnMpO1xuXG4gICAgY29uc3QgbGlzdEljb25zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaXN0SWNvbnNUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdEljb25zVGl0bGVcIik7XG4gICAgbGlzdEljb25zVGl0bGUudGV4dENvbnRlbnQgPSBcIlJlYWNoIG1lIHRocm91Z2ggc29jaWFsIG1lZGlhXCI7XG4gICAgbGlzdEljb25zLmFwcGVuZENoaWxkKGxpc3RJY29uc1RpdGxlKTtcblxuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1nRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWdEaXZcIik7XG4gICAgbGlzdEljb25zLmFwcGVuZENoaWxkKGltZ0Rpdik7XG5cbiAgICBjb25zdCBsaXN0R2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGlzdEdpdEljb24uY2xhc3NMaXN0LmFkZChcImxpc3RHaXRJY29uXCIpO1xuICAgIGxpc3RHaXRJY29uLnNyYyA9IFwiaW1nL3N0YWNrL2dpdGh1Yi5wbmdcIjtcbiAgICBsaXN0R2l0SWNvbi5hbHQgPSBcImdpdCBsb2dcIjtcbiAgICBcblxuICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhblwiO1xuICAgIGdpdExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQobGlzdEdpdEljb24pO1xuICAgIGxpc3RJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuICAgIGNvbnN0IGxpc3RJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGlzdEluLmNsYXNzTGlzdC5hZGQoXCJsaXN0SW5cIik7XG4gICAgbGlzdEluLnNyYyA9IFwiaW1nL3N0YWNrL2xpLnBuZ1wiO1xuICAgIGxpc3RJbi5hbHQgPSBcImxpbmtlZEluIGxvZ29cIjtcblxuICAgIGNvbnN0IGluTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGluTG9nby5ocmVmID0gXCJodHRwczovL3JvLmxpbmtlZGluLmNvbS9pbi9hbmRyZWktY2lnbWFpYW4vcm9cIjtcbiAgICBpbkxvZ28udGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgIGluTG9nby5hcHBlbmRDaGlsZChsaXN0SW4pO1xuICAgIGxpc3RJY29ucy5hcHBlbmRDaGlsZChpbkxvZ28pO1xuXG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpbkxvZ28pO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFNlY3Rpb247IiwiXG5mdW5jdGlvbiBjcmVhdGVJbnRybygpe1xuICAgXG4gICAgY29uc3QgaW50cm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2ludHJvQ29udGVudCcpO1xuXG4gICAgY29uc3QgdGl0bGVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVJbnRyby5jbGFzc0xpc3QuYWRkKCd0aXRsZUludHJvJyk7XG4gICAgdGl0bGVJbnRyby50ZXh0Q29udGVudCA9IFwiSGVsbG8sXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlSW50cm8pO1xuXG5cbiAgICBjb25zdCBuYW1lSW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZUludHJvLmNsYXNzTGlzdC5hZGQoJ25hbWVJbnRybycpO1xuICAgIG5hbWVJbnRyby50ZXh0Q29udGVudCA9IFwiSSdtIENpZ21haWFuIEFuZHJlaS5cIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUludHJvKTtcblxuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoJ3RleHQxJyk7XG4gICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIkkgYnVpbGQgZGlnaXRhbCBleHBlcmllbmNlcy5cIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dDEpO1xuXG4gICAgLypcbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCd0ZXh0MicpO1xuICAgIHRleHQyLnRleHRDb250ZW50ID0gXCJJJ20gYSBGcm9udC1lbmQgZGV2ZWxvcGVyIHdobyBjYXJyaWVzIGEga2VlbiBleWUgZm9yIGRlc2lnbiBpbiBhbiB1c2VyLWZpcnN0IGFwcHJvYWNoLiBNeSBjdXJyZW50IGZvY3VzIGlzIGluIGNyZWF0aW5nIHJlc3BvbnNpdmUgbGF5b3V0cyBvbiB0aGUgSmF2YVNjcmlwdCBzdGFjayBvZiBSZWFjdCBhbmQgTm9kZUpTIHdoaWNoIEkgaGF2ZSBiZWVuIGV4cGxvcmluZyByZWNlbnRseSwgYW5kIGZyb20gbXkgYmFja2dyb3VuZCBhcyBhbiBwaHlzaWNpc3QgSSdtIHdlbGwgYWNxdWFpbnRlZCB0byBicmluZ2luZyBvdXQgc29sdXRpb25zIHRvIGNvbXBsZXggcHJvYmxlbXMuXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRleHQyKTtcbiAgICAqL1xuICAgIHJldHVybiBpbnRyb0NvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUludHJvO1xuXG5cblxuXG4vKlxuZnVuY3Rpb24gY3JlYXRlSW50cm8oKXtcblxuICAgIGNvbnN0IGludHJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGludHJvQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpbnRyb0NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRpdGxlSW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlSW50cm8uY2xhc3NMaXN0LmFkZCgndGl0bGVJbnRybycpO1xuICAgIHRpdGxlSW50cm8udGV4dENvbnRlbnQgPSBcIkhpIEkgYW0gQW5kcmVpXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRpdGxlSW50cm8pO1xuXG5cbiAgICBjb25zdCBuYW1lSW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZUludHJvLmNsYXNzTGlzdC5hZGQoJ25hbWVJbnRybycpO1xuICAgIG5hbWVJbnRyby50ZXh0Q29udGVudCA9IFwiQ2lnbWFpYW4gQW5kcmVpLlwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZChuYW1lSW50cm8pO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgndGV4dDEnKTtcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiIFwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKCd0ZXh0MicpO1xuICAgIHRleHQyLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRleHQyKTtcblxuICAgIHJldHVybiBpbnRyb0NvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbnRybygpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVJbnRybygpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEludHJvO1xuXG4qL1xuXG4iLCJcbmltcG9ydCBzdHlsZSBmcm9tICcuL21haW4uY3NzJztcbmltcG9ydCBhYm91dFNlY3Rpb24gZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCBjcmVhdGVJbnRybyBmcm9tIFwiLi9tYWluLmpzXCI7XG5pbXBvcnQgd29ya1NlY3Rpb24gZnJvbSBcIi4vd29yay5qc1wiO1xuaW1wb3J0IGNvbnRhY3RTZWN0aW9uIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuXG4gY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyTG9nb1wiKTtcbiAgaGVhZGVyTG9nby50ZXh0Q29udGVudCA9IFwiW0NBXVwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcbiAgXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuICBjb25zdCBhYm91dE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYWJvdXRNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZMaW5rXCIpO1xuICBhYm91dE1lbnUudGV4dENvbnRlbnQgPSBcIlswXWFib3V0TWVcIjtcbiAgYWJvdXRNZW51LmhyZWY9XCIjYWJvdXRcIjtcbiAgXG4gIGNvbnN0IHdvcmtNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHdvcmtNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZMaW5rXCIpO1xuICB3b3JrTWVudS50ZXh0Q29udGVudCA9IFwiWzFdbXlXb3JrXCI7XG4gIHdvcmtNZW51LmhyZWY9XCIjbXl3b3JrXCI7XG5cbiAgY29uc3QgY29udGFjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29udGFjdE1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdkxpbmtcIik7XG4gIGNvbnRhY3RNZW51LnRleHRDb250ZW50ID0gXCJbMl1jb250YWN0XCI7XG4gIGNvbnRhY3RNZW51LmhyZWY9XCIjY29udGFjdFwiO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChhYm91dE1lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQod29ya01lbnUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdE1lbnUpO1xuXG4gIHJldHVybiBuYXY7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUludHJvKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbigpKTsgIFxuICAgXG4gIG1haW4uYXBwZW5kQ2hpbGQod29ya1NlY3Rpb24oKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24oKSk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbi8qXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIFxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYERlc2lnbmVkICYgQnVpbHQgYnkgQ2lnbWFpYW4gQW5kcmVpIMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWA7XG5cbiAgXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW5cIjtcblxuICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZ2l0aHViSWNvbi5zcmM9IGBpbWcvc3RhY2svZ2l0aHViLnBuZ2A7XG4gIGdpdGh1Ykljb24uYWx0ID0gXCJnaXQtaW1nXCI7XG4gIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZCgnZ2l0Jyk7ICAgIFxuXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgXG4gIFxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuKi9cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgLypcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gKi9cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiZnVuY3Rpb24gd29ya1NlY3Rpb24oKXtcblxuICAgIGNvbnN0IGNyZWF0ZVdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjcmVhdGVXb3JrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXl3b3JrXCIpO1xuICAgIGNyZWF0ZVdvcmsuY2xhc3NMaXN0LmFkZChcImNyZWF0ZVdvcmtcIik7XG5cbiAgICBjb25zdCBteVdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG15V29yay5jbGFzc0xpc3QuYWRkKFwibXlXb3JrXCIpO1xuICAgIG15V29yay50ZXh0Q29udGVudCA9IFwiWzFdbXlXb3JrXCI7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKG15V29yayk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiUmVzdGF1cmFudCBQYWdlXCIsXG4gICAgICAgICAgICBcIlJlc3RhdXJhbnQgV2ViIFBhZ2UgYnVpbGQgd2l0aCBIVE1MNSwgQ1NTMywgSmF2YVNjcmlwLCBXZWJQYWNrICYgR2l0LiBUaGUgc2l0ZSBjb25zaXN0IG9mIGhvbWUgcGFnZSwgbWVudSBwYWdlLCBjb250YWN0IHBhZ2UgVGhlIGFpbSBvZiB0aGUgcHJvamVjdCB3YXMgdG8gbWFrZSBhIGZ1bmN0aW9uYWwgbXVsdGkgcGFnZSBSZXN0YXVyYW50IHdlYnNpdGUgdXNpbmcgV2ViUGFjayB0byBidW5kbGUgZmlsZXMgYW5kIEphdnNjcmlwdCBET00gbWFuaXB1bGF0aW9uLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vcmVzdGF1cmFudC1wYWdlLW9ubGluZVwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9yZXN0YXVyYW50LXBhZ2Utb25saW5lL1wiXG4gICAgICAgIClcbiAgICApO1xuICAgIFxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJFdGNoLWEtU2tldGNoXCIsXG4gICAgICAgICAgICBcIiBUaGUgcHJvamVjdCB3YXMgYnVpbGQgd2l0aCBIVE1MNSwgQ1NTMywgSmF2YVNjcmlwLiBUaGUgaWRlYSBiZWhpbmQgdGhlIGFwcCB3YXMgdG8gcmVjcmVhdGUgdGhlIGdvb2Qgb2xkIGNoaWxkaG9vZCBkcmF3IGJvYXJkLiBBcHAgZmVhdXJlczogU2VsZWN0IGdyaWQgc2l6ZSwgUmFuZG9tIGNvbG9yIGJ1dHRvbiBvcHRpb24sIEN1c3RvbSBjb2xvciBTZWxlY3RvciwgQ2FudmFzIG9wdGlvbi5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL0V0Y2gtYS1Ta2V0Y2hcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vRXRjaC1hLVNrZXRjaC9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJMaWJyYXJ5IEFwcFwiLFxuICAgICAgICAgICAgXCJBIHNtYWxsIExpYnJhcnkgYXBwLCBjcmVhdGVkIHdpdGggSFRNTDUsIENTUzMgYW5kIEphdmFTY3JpcHQuIFRoZSBkYXRhIGlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2UuIEZlYXR1cmVzOiBTZWFyY2ggYmFyIGltcGxlbWVudGF0aW9uLCBZb3UgY2FuIGRlbGV0ZSBhbnkgb2YgeW91ciBib29rcywgQ2FuIHVwZGF0ZSB3aGV0aGVyIHlvdSd2ZSByZWFkIGFueSBvZiB0aGUgYm9va3MgaW4geW91ciBsaWJyYXJ5XCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9Qcm9qZWN0LUxpYnJhcnlcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vUHJvamVjdC1MaWJyYXJ5L1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIk9ubGluZSBDYWxjdWxhdG9yXCIsXG4gICAgICAgICAgICBcIkFuIG9ubGluZSBjYWxjdWxhdG9yIHdpdGggYmFzaWMgYXJpdGhtZXRpYyBvcGVyYXRpb25zLCBhcHBsaWNhdGlvbiBkZXZlbG9wZWQgdXNpbmcgSFRNTDUsIENTUzMsIEphdmFTY3JpcC4gRmVhdHVyZXM6IEtleWJvYXJkIGlucHV0cyBhcmUgc3VwcG9ydGVkIGZvciBudW1iZXJzLCBvcGVydGFvcnMgYW5kIG90aGVyIG9wdGlvbnMsIENvbWVzIHdpdGggb3B0aW9ucyB0byBjbGVhci9kZWxldGUgYSBzaW5nbGUgaW5wdXQgT1IgY2xlYXIgdGhlIHdob2xlIGRpc3BsYXkuXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9DYWxjdWxhdG9yXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL0NhbGN1bGF0b3IvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiU2lnbi11cC1Gb3JtXCIsXG4gICAgICAgICAgICBcIkEgc2luZy11cCBmb3JtIGJ1aWx0IHVzaW5nIEhUTUw1LCBDU1MzIGFuZCBKYXZhU2NyaXB0LiBGZWF0dXJlczogRGFyayBtb2RlLCBIb3ZlciBlZmZlY3Qgb24gbG9nbywgYnV0dG9ucyBhbmQgbG9nIGluLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vU2lnbi11cC1Gb3JtXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL1NpZ24tdXAtRm9ybS9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJHdW4tRmFybWVyLUJlYXJcIixcbiAgICAgICAgICAgIFwiVGhpcyBpcyBteSBmaXJzdCBnYW1lIGRldmVsb3BlZCB1c2luZyBIVE1MNSwgQ1NTMyBhbmQgSmF2YVNjcmlwdC4gQ2hlY2sgR2l0SHViIGZvciBtb3JlIGluIGRlcHRoIGRldGFpbHMgb2YgdGhlIGRldmVsb3BtZW50IHN0YWdlcy5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL0dVTi1GQVJNRVItQkVBUlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9HVU4tRkFSTUVSLUJFQVIvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiVGljLVRhYy1Ub2VcIixcbiAgICAgICAgICAgIFwiVGhlIGZhbW91c2UgVGljIFRhYyBUb2UgZ2FtZSBtYWRlIHdpdGggSFRNTDUsIENTUzMgYW5kIEphdmFTY3JpcHQhIEkgdXNlZCB0aGlzIHByb2plY3QgdG8gcHJhY3RpY2Ugc2ltcGxlIGFsZ29yaXRobXMgYW5kIHVzaW5nIGV2ZW50IGxpc3RlbmVycy4gRmVhdHVyZXM6IFR3byBwbGF5ZXIgbW9kZSwgQ2hlY2tzIGZvciBhIHdpbm5lciBvciBpZiB0aGVyZSBpcyBhIHRpZS5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL1RpYy1UYWMtVG9lXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL1RpYy1UYWMtVG9lL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVdvcmsgICAgICAgXG4gIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVXb3JrSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgbGlua0NvZGUsIGxpbmtMaXZlKSB7XG4gICAgY29uc3QgcHJvamVjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpOyAvL3Byb2R1Y3QgbGFuZGluZyBwYWdlIDQ4IGh0bWxcblxuICAgIGNvbnN0IHByb2plY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2plY3RJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3RJbWdcIik7XG4gICAgcHJvamVjdEltZy5zcmMgPWAuL2ltZy9wcm9qZWN0cy8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgICBwcm9qZWN0SW1nLmFsdCA9IGAke25hbWV9YDtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlc2NyaXB0aW9uXCIpOyBcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RUZXh0XCIpO1xuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25zXCIpO1xuICAgIFxuICAgIGNvbnN0IHJldmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHJldmlld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmV2aWV3QnV0dG9uXCIpO1xuICAgIHJldmlld0J1dHRvbi5ocmVmID0gbGlua0NvZGU7XG4gICAgcmV2aWV3QnV0dG9uLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgcmV2aWV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJ7UkVWSUVXIFRIRSBDT0RFfVwiO1xuICAgXG4gICAgY29uc3QgbGl2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpdmVCdXR0b25cIik7XG4gICAgbGl2ZUJ1dHRvbi5ocmVmID0gbGlua0xpdmU7XG4gICAgbGl2ZUJ1dHRvbi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIGxpdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIltTRUUgSVQgTElWRV1cIjtcblxuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKGxpdmVCdXR0b24pO1xuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKHJldmlld0J1dHRvbik7XG5cbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRleHQpO1xuICAgXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbiAgICBcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3RJbWcpO1xuICAvKlxuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcbiovXG4gICAgcmV0dXJuIHByb2plY3RHcmlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3b3JrU2VjdGlvbjtcblxuXG4vKlxuXG5cbiBjb25zdCBwcm9qZWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7IC8vcHJvZHVjdCBsYW5kaW5nIHBhZ2UgNDggaHRtbFxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQocHJvamVjdEdyaWQpO1xuXG4gICAgY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLnNyYyA9IFwiLi9pbWcvcHJvamVjdHMvcmVzdGF1cmFudC5wbmdcIjtcbiAgICBwcm9qZWN0SW1nLmFsdCA9IFwicmVzdGF1cmFudCBwYWdlXCI7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEltZyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlRUVFRUVFRUXCI7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGV4dFwiKTtcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IFwiZ2dnZ2dnZ2dnZ2dnZ1wiO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25zXCIpO1xuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25zKTtcblxuICAgIGNvbnN0IHJldmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHJldmlld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmV2aWV3QnV0dG9uXCIpO1xuICAgIHJldmlld0J1dHRvbi5ocmVmID0gXCJcIjtcbiAgICByZXZpZXdCdXR0b24udGV4dENvbnRlbnQgPSBcIlJFVklFVyBUSEUgQ09ERVwiO1xuICAgIHByb2plY3RCdXR0b25zLmFwcGVuZENoaWxkKHJldmlld0J1dHRvbik7XG5cbiAgICBjb25zdCBsaXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGl2ZUJ1dHRvblwiKTtcbiAgICBsaXZlQnV0dG9uLmhyZWYgPVwiIFwiO1xuICAgIGxpdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIlNFRSBJVCBMSVZFXCI7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQobGl2ZUJ1dHRvbik7XG5cbiAgICAgXG5cblxuIFxuKi8iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNhcmRvOndnaHRANzAwJmZhbWlseT1MZWFndWUrR290aGljJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PUxlYWd1ZStHb3RoaWMmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXG4gIC0tZm9udC1jb2xvci1vcmFuZ2U6IHJnYigyNTUsIDE1MiwgMCk7XFxuICAtLWZvbnQtY29sb3ItYmx1ZTogIzMyYzBmNDtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgLS1mb250LWZhbWlseS1oZWFkZXI6IGZvbnQtZmFtaWx5OiAnTGVhZ3VlIEdvdGhpYycsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtZmFtaWx5LWJvZHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ib2R5KTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtOyBcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckxvZ297XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDIuNXZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbn1cXG5cXG4uaGVhZGVyTG9nbzpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbm5hdntcXG4gIHdvcmQtc3BhY2luZzogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTR2aDtcXG4gIG1hcmdpbi1yaWdodDogNDBweDsgIFxcbn1cXG5cXG5uYXYgYXtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spOyBcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmludHJvQ29udGVudHtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgbWFyZ2luLXRvcDogMTV2aDtcXG59XFxuXFxuaDEsXFxuaDIsIFxcbi5uYW1lSW50cm8ge1xcbiAgZm9udC1mYW1pbHk6ICdMZWFndWUgR290aGljJywgc2Fucy1zZXJpZjs7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGl0bGVJbnRyb3tcXG4gIGZvbnQtc2l6ZTogY2FsYygxMDBweCArIDF2dyk7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbiBcXG59XFxuXFxuLm5hbWVJbnRyb3tcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWJsdWUpO1xcbiAgZm9udC1zaXplOiBjYWxjKDcwcHggKyAxdncpO1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4udGV4dDF7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IGNhbGMoM3B4ICsgMnZ3KTsgXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHdpZHRoOiAyOGNoO1xcbiAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjIpLCBibGluayAuNXMgc3RlcC1lbmQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMFxcbiAgfVxcbn1cXG4gICAgXFxuQGtleWZyYW1lcyBibGluayB7XFxuICA1MCUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50XFxuICB9XFxufVxcblxcbi5jcmVhdGVBYm91dE1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5hYm91dE1lRGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5hYm91dE1lRGl2IC5sZWZ0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTsgXFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uYWJvdXRNZURpdiAucmlnaHR7XFxuICB3aWR0aDogNTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206MnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICB3aWR0aDogNDB2dztcXG59XFxuXFxuLmFib3V0TWVUaXRsZTpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBvcGFjaXR5OiAuOTtcXG59XFxuXFxuLnNraWxsc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogODBweCBhdXRvO1xcbn1cXG5cXG4uc2tpbGxDb250YWluZXJ7XFxuICB3aWR0aDogNTUlO1xcbn1cXG5cXG4ubGV2ZWx7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7IFxcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4uZnJvbnRMb2dve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgIFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9kdWN0IGltZ3tcXG4gIHotaW5kZXg6IDEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIFxcbn1cXG5cXG4uc3RhY2staXRlbXtcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3RhY2staXRlbSBoNHtcXG4gIGNvbG9yOnZhcigtLXdoaXRlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNraWxsc1RpdGxle1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMzBweCArIDF2dyk7IFxcbn1cXG5cXG4uZnJvbnRMb2dvIC5zdGFjay1pdGVtOm50aC1jaGlsZCg0KSBpbWd7XFxuIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gYm9yZGVyLXJhZGl1czogMTBweDtcXG4gXFxufVxcblxcbi5mcm9udExvZ28gLnN0YWNrLWl0ZW06bnRoLWNoaWxkKDUpIGltZ3tcXG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnNwZWFre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uc3BlYWsgLmNvdW50cnl7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXG59XFxuXFxuLmNvdW50cnkgaW1ne1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDM1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY3JlYXRlV29ya3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubXlXb3Jre1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiBjYWxjKDM1cHggKyAxdncpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxufVxcblxcbi5teVdvcms6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5ncmlke1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDQwcHg7ICBcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdEltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAuNnZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyAucmV2aWV3QnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmV2aWV3QnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5saXZlQnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXZlQnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuLmNvbnRhY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMzBweCAzMHB4IDAgMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgaDJ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuXFxuLmNvbnRhY3QgaDI6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5jb250YWN0Q29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3RUZXh0e1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgLjF2dyk7XFxufVxcblxcbi5jb250YWN0TGlzdHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuICAubGlzdFRpdGxle1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3RTZWNUaXRsZXtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEljb25zVGl0bGV7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJY29uc3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5saXN0SWNvbnMgYXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWd7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDQ1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAyNXB4IDE1cHggMTBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gXFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWc6aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5pbWdEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi53YXZlIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG59XFxuXFxuLndhdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgIGF1dG87XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2JhKDg0LDU4LDE4MywxKSAwJSwgcmdiYSgwLDE3MiwxOTMsMSkgMTAwJSk7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLndhdmVzIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MTV2aDtcXG4gIG1hcmdpbi1ib3R0b206LThweDsgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xcbiAgbWluLWhlaWdodDoxMDBweDtcXG4gIG1heC1oZWlnaHQ6MTUwcHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbiAqL1xcblxcbi5wYXJhbGxheCA+IHVzZSB7XFxuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAyNXMgY3ViaWMtYmV6aWVyKC41NSwuNSwuNDUsLjUpICAgICBpbmZpbml0ZTtcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0ycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XFxufVxcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC00cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDQpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XFxufVxcbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LDAsMCk7XFxuICB9XFxuICAxMDAlIHsgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwwLDApO1xcbiAgfVxcbn1cXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YXZlcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6NDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDYwJTtcXG4gIH1cXG59XFxuXFxuLyogOTgwcHggLyAxNnB4ID0gNjEuMjVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA2MS4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1OCU7XFxuICB9XFxufVxcblxcbi8qIDQ2MHB4IC8gMTZweCA9IDI4Ljc1ZW0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbn1cXG4gICNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiAgLmhlYWRlckxvZ297XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbiAgbmF2e1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxuICAuZnJvbnRMb2dve1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuICAubGlzdEljb25zIGEgaW1ne1xcbiAgICB3aWR0aDogMTV2dztcXG4gIH1cXG4gIC5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4Ljc1ZW0pe1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNraWxsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBcXG4gIH1cXG4gIC5hYm91dE1lRGl2IC5sZWZ0LFxcbiAgLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpe1xcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzEwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5za2lsbHNUaXRsZXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLmZyb250TG9nb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5zcGVha3tcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAgXFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gICNjb250ZW50e1xcbiAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcbiAgLnNwZWFre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAzNXB4O1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KXtcXG4gIC5jb250YWN0Q29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RUZXh0e1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWN0TGlzdHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY29udGFjdFRleHR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAuMXZ3KTtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KXtcXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCl7XFxuICAuZ3JpZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICB9XFxuICAubXlXb3Jre1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5wcm9qZWN0SW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0e1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDJ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDhEQUE4RDtFQUM5RCwyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFD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RSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDRCQUE0QjtFQUM5QjtBQUNGOzs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXOztFQUViO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0VBQ0EsbUJBQW1CO0VBQ25CLDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsQ0FBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNhcmRvOndnaHRANzAwJmZhbWlseT1MZWFndWUrR290aGljJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PUxlYWd1ZStHb3RoaWMmZmFtaWx5PVNwZWNpYWwrRWxpdGUmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXG4gIC0tZm9udC1jb2xvci1vcmFuZ2U6IHJnYigyNTUsIDE1MiwgMCk7XFxuICAtLWZvbnQtY29sb3ItYmx1ZTogIzMyYzBmNDtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjMjIyO1xcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgLS1mb250LWZhbWlseS1oZWFkZXI6IGZvbnQtZmFtaWx5OiAnTGVhZ3VlIEdvdGhpYycsIHNhbnMtc2VyaWY7XFxuICAtLWZvbnQtZmFtaWx5LWJvZHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgLS1ibGFjazogIzAwMDtcXG4gIC0td2hpdGU6ICNmZmZmZmY7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1ib2R5KTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtOyBcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckxvZ297XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDIuNXZ3KTtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbn1cXG5cXG4uaGVhZGVyTG9nbzpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbm5hdntcXG4gIHdvcmQtc3BhY2luZzogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTR2aDtcXG4gIG1hcmdpbi1yaWdodDogNDBweDsgIFxcbn1cXG5cXG5uYXYgYXtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spOyBcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmludHJvQ29udGVudHtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgbWFyZ2luLXRvcDogMTV2aDtcXG59XFxuXFxuaDEsXFxuaDIsIFxcbi5uYW1lSW50cm8ge1xcbiAgZm9udC1mYW1pbHk6ICdMZWFndWUgR290aGljJywgc2Fucy1zZXJpZjs7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udGl0bGVJbnRyb3tcXG4gIGZvbnQtc2l6ZTogY2FsYygxMDBweCArIDF2dyk7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbiBcXG59XFxuXFxuLm5hbWVJbnRyb3tcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWJsdWUpO1xcbiAgZm9udC1zaXplOiBjYWxjKDcwcHggKyAxdncpO1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4udGV4dDF7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IGNhbGMoM3B4ICsgMnZ3KTsgXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHdpZHRoOiAyOGNoO1xcbiAgYW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjIpLCBibGluayAuNXMgc3RlcC1lbmQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMFxcbiAgfVxcbn1cXG4gICAgXFxuQGtleWZyYW1lcyBibGluayB7XFxuICA1MCUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50XFxuICB9XFxufVxcblxcbi5jcmVhdGVBYm91dE1le1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5hYm91dE1lRGl2e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5hYm91dE1lRGl2IC5sZWZ0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTsgXFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uYWJvdXRNZURpdiAucmlnaHR7XFxuICB3aWR0aDogNTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206MnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICB3aWR0aDogNDB2dztcXG59XFxuXFxuLmFib3V0TWVUaXRsZTpob3ZlcntcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBvcGFjaXR5OiAuOTtcXG59XFxuXFxuLnNraWxsc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogODBweCBhdXRvO1xcbn1cXG5cXG4uc2tpbGxDb250YWluZXJ7XFxuICB3aWR0aDogNTUlO1xcbn1cXG5cXG4ubGV2ZWx7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7IFxcbiAgcGFkZGluZzogMjBweCAwO1xcbn1cXG5cXG4uZnJvbnRMb2dve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgIFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9kdWN0IGltZ3tcXG4gIHotaW5kZXg6IDEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogY2FsYygzNXB4ICsgMXZ3KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIFxcbn1cXG5cXG4uc3RhY2staXRlbXtcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc3RhY2staXRlbSBoNHtcXG4gIGNvbG9yOnZhcigtLXdoaXRlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNraWxsc1RpdGxle1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMzBweCArIDF2dyk7IFxcbn1cXG5cXG4uZnJvbnRMb2dvIC5zdGFjay1pdGVtOm50aC1jaGlsZCg0KSBpbWd7XFxuIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gYm9yZGVyLXJhZGl1czogMTBweDtcXG4gXFxufVxcblxcbi5mcm9udExvZ28gLnN0YWNrLWl0ZW06bnRoLWNoaWxkKDUpIGltZ3tcXG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnNwZWFre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uc3BlYWsgLmNvdW50cnl7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXG59XFxuXFxuLmNvdW50cnkgaW1ne1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDM1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY3JlYXRlV29ya3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubXlXb3Jre1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiBjYWxjKDM1cHggKyAxdncpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxufVxcblxcbi5teVdvcms6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5ncmlke1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDQwcHg7ICBcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdEltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxle1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAuNnZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3RCdXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyAucmV2aWV3QnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmV2aWV3QnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5saXZlQnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiAyNTBweDsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5saXZlQnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuLmNvbnRhY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMzBweCAzMHB4IDAgMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgaDJ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XFxuXFxuLmNvbnRhY3QgaDI6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5jb250YWN0Q29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3RUZXh0e1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgLjF2dyk7XFxufVxcblxcbi5jb250YWN0TGlzdHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuICAubGlzdFRpdGxle1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmxpc3RTZWNUaXRsZXtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEljb25zVGl0bGV7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxpc3RJY29uc3tcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5saXN0SWNvbnMgYXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWd7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiBjYWxjKDQ1cHggKyAxdncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAyNXB4IDE1cHggMTBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcXG4gXFxufVxcblxcbi5saXN0SWNvbnMgYSBpbWc6aG92ZXJ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5pbWdEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi53YXZlIHtcXG4gcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG59XFxuXFxuLndhdmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgIGF1dG87XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCByZ2JhKDg0LDU4LDE4MywxKSAwJSwgcmdiYSgwLDE3MiwxOTMsMSkgMTAwJSk7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLndhdmVzIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MTV2aDtcXG4gIG1hcmdpbi1ib3R0b206LThweDsgLypGaXggZm9yIHNhZmFyaSBnYXAqL1xcbiAgbWluLWhlaWdodDoxMDBweDtcXG4gIG1heC1oZWlnaHQ6MTUwcHg7XFxufVxcblxcbi8qIEFuaW1hdGlvbiAqL1xcblxcbi5wYXJhbGxheCA+IHVzZSB7XFxuICBhbmltYXRpb246IG1vdmUtZm9yZXZlciAyNXMgY3ViaWMtYmV6aWVyKC41NSwuNSwuNDUsLjUpICAgICBpbmZpbml0ZTtcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0ycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7XFxufVxcbi5wYXJhbGxheCA+IHVzZTpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcXG59XFxuLnBhcmFsbGF4ID4gdXNlOm50aC1jaGlsZCgzKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC00cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xcbn1cXG4ucGFyYWxsYXggPiB1c2U6bnRoLWNoaWxkKDQpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XFxufVxcbkBrZXlmcmFtZXMgbW92ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MHB4LDAsMCk7XFxuICB9XFxuICAxMDAlIHsgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoODVweCwwLDApO1xcbiAgfVxcbn1cXG4vKlNocmlua2luZyBmb3IgbW9iaWxlKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC53YXZlcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OjQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6NDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDYwJTtcXG4gIH1cXG59XFxuXFxuLyogOTgwcHggLyAxNnB4ID0gNjEuMjVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA2MS4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1OCU7XFxuICB9XFxufVxcblxcbi8qIDQ2MHB4IC8gMTZweCA9IDI4Ljc1ZW0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbn1cXG4gICNjb250ZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuICAuaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiAgLmhlYWRlckxvZ297XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcblxcbiAgbmF2e1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG59XFxuXFxuICAuZnJvbnRMb2dve1xcbiAgICBnYXA6MXJlbTtcXG59XFxuXFxuICAubGlzdEljb25zIGEgaW1ne1xcbiAgICB3aWR0aDogMTV2dztcXG4gIH1cXG4gIC5jb3B5cmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4Ljc1ZW0pe1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNraWxsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBcXG4gIH1cXG4gIC5hYm91dE1lRGl2IC5sZWZ0LFxcbiAgLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpe1xcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzEwcHgpe1xcbiAgICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG5cXG4gIC5za2lsbHNUaXRsZXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcblxcbiAgLmZyb250TG9nb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5zcGVha3tcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAgXFxuICB9XFxuXFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcblxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gICNjb250ZW50e1xcbiAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcbiAgLnNwZWFre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAzNXB4O1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KXtcXG4gIC5jb250YWN0Q29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3RUZXh0e1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb250YWN0TGlzdHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuY29udGFjdFRleHR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAuMXZ3KTtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KXtcXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCl7XFxuICAuZ3JpZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICB9XFxuICAubXlXb3Jre1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5wcm9qZWN0SW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0e1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QgaDJ7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGUuanNcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOlsiYWJvdXRTZWN0aW9uIiwiY3JlYXRlQWJvdXRNZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImFib3V0TWVEaXYiLCJhcHBlbmRDaGlsZCIsImxlZnQiLCJyaWdodCIsImFib3V0TWVUaXRsZSIsInRleHRDb250ZW50IiwiYWJvdXRNZURlc2NyaXB0aW9uIiwic2tpbGxzRGl2Iiwic2tpbGxDb250YWluZXIiLCJzdGFja0Zyb250Iiwic3RhY2tGcm9udFRpdGxlIiwiZnJvbnRMb2dvIiwiY3JlYXRlU3RhY2tJdGVtIiwic3RhY2tUZWNobm9sb2d5Iiwic3RhY2tUZWNobm9sb2d5VGl0bGUiLCJ0ZWNoTG9nbyIsInNraWxsc1RpdGxlIiwic3BlYWtEaXYiLCJlbmdsaXNoRGl2IiwiZW5nbGlzaEltZyIsInNyYyIsImFsdCIsInJvbWFuaWFuRGl2Iiwicm9tYW5pYW5JbWciLCJkZURpdiIsImRlSW1nIiwibmFtZSIsInN0YWNrSXRlbSIsInN0YWNrTmFtZSIsInN0YWNrSW1hZ2UiLCJ0b0xvd2VyQ2FzZSIsImNvbnRhY3RTZWN0aW9uIiwiY29udGFjdCIsImNvbnRhY3RUaXRsZSIsImNvbnRhY3RDb250ZW50IiwiY29udGFjdFRleHQiLCJjb250YWN0TGlzdCIsImxpc3RUaWxlIiwibGlzdFNlY1RpdGxlIiwibGlzdEljb25zIiwibGlzdEljb25zVGl0bGUiLCJpbWdEaXYiLCJsaXN0R2l0SWNvbiIsImdpdExpbmsiLCJocmVmIiwidGFyZ2V0IiwibGlzdEluIiwiaW5Mb2dvIiwiY3JlYXRlSW50cm8iLCJpbnRyb0NvbnRlbnQiLCJ0aXRsZUludHJvIiwibmFtZUludHJvIiwidGV4dDEiLCJzdHlsZSIsIndvcmtTZWN0aW9uIiwiY3JlYXRlSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGVyTG9nbyIsImNyZWF0ZU5hdiIsIm5hdiIsImFib3V0TWVudSIsIndvcmtNZW51IiwiY29udGFjdE1lbnUiLCJjcmVhdGVNYWluIiwibWFpbiIsImluaXRpYWxpemVXZWJzaXRlIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlV29yayIsIm15V29yayIsImNyZWF0ZVdvcmtJdGVtIiwiZGVzY3JpcHRpb24iLCJsaW5rQ29kZSIsImxpbmtMaXZlIiwicHJvamVjdEdyaWQiLCJwcm9qZWN0SW1nIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdFRpdGxlIiwicHJvamVjdFRleHQiLCJwcm9qZWN0QnV0dG9ucyIsInJldmlld0J1dHRvbiIsImxpdmVCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9