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
  stackTechnologyTitle.textContent = "Technology";
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
  englishImg.src = "/img/language/uk.svg";
  englishImg.alt = "english";
  englishDiv.appendChild(englishImg);
  var romanianDiv = document.createElement('div');
  romanianDiv.classList.add("country");
  romanianDiv.textContent = "Eu vorbesc românește";
  speakDiv.appendChild(romanianDiv);
  var romanianImg = document.createElement('img');
  romanianImg.classList.add('language');
  romanianImg.src = "/img/language/ro.png";
  romanianImg.alt = "ro";
  romanianDiv.appendChild(romanianImg);
  var deDiv = document.createElement('div');
  deDiv.classList.add("country");
  deDiv.textContent = "Ich spreche deutsch";
  speakDiv.appendChild(deDiv);
  var deImg = document.createElement('img');
  deImg.classList.add('language');
  deImg.src = "/img/language/de.png";
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
  stackImage.src = "/img/stack/".concat(name.toLowerCase(), ".png");
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
  contactText.textContent = "I'm currently looking for work as a full-stack developer. Please do not hesitate to contact me if you have any questions about additional credentials or the design of this website. Please contact me if you are a recruiter looking for a hardworking individual.";
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

function createFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  var copyright = document.createElement("p");
  copyright.textContent = "Created by cigmaian \xA9 ".concat(new Date().getFullYear());
  var githubLink = document.createElement("a");
  githubLink.href = "https://github.com/cigmaian";
  var githubIcon = document.createElement("img");
  githubIcon.src = "img/stack/github.png";
  githubIcon.alt = "git-img";
  githubIcon.classList.add('git');
  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  return footer;
}

function initializeWebsite() {
  var content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\n\n\nbody {\n  color: var(--font-color);\n  /*       calc(10px + 2vmin)*/ \n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 100%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 3vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: #000;\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color:#000; \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: #000;\n  margin-top: 20vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n  \n  /* text-align: center; */\n}\n\n.titleIntro{\n  font-size: calc(100px + 2vw);\n  margin-top: 80px;\n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(40px + 2vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.aboutMeDescription{\n\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.product{\n  \n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n  \n}\n\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: #000;\n  border-radius: 20px; \n  position: relative;\n}\n\n*/\n.frontLogo:nth-child(2){\n  \n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: 100px;\n  height: auto;\n  \n}\n.stack-item{\n  padding: 40px 0;\n  position: relative;\n}\n.stack-item h4{\n  color:white;\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n.frontLogo .stack-item:nth-child(4) img{\n background: white;\n border-radius: 10px;\n \n}\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: white;\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  \n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: #000;\n}\n\n.speak .country{\n  color: white;\n  align-items: center;\n  display: flex;\n  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: black;\n  border-radius: 50%;\n  display: block;\n  width: 50px;\n  height: auto;\n}\n\n \n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 85%;\n}\n\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n}\n\n  \n\n\n.projectImg {\n   display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height:auto;\n  width: 55%;\n  margin: 10px 0;\n  border-radius: 30px;\n  min-height: 550px;\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  \n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n  \n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\nwidth: 100%;\nborder: 0;\nborder-radius: 5px;\nborder: 1px solid var(--black);\nbackground-color: var(--white);\ncolor: var(--black);\nfont-size: 18px;\nfont-family: ;\ntext-transform: uppercase;\ntransition: all .4s;\ncursor: pointer;\nposition: relative;\nz-index: 10;\noverflow: hidden;\nmax-width: 350px;\nmin-width: 250px;\ntext-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  font-family: ;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n\n}\n\n.liveButton:hover{\n  background-color: var(--black);\ncolor: var(--white);\nletter-spacing: 4px;\n}\n\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n@media (max-width: 650px){\n  .projectButtons{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n  }\n}\n\n@media (max-width: 1450px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n}\n\n/* Content \n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\nHeader */\n\n\n\n\n/* Main */\n\n.main {\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nfont-size: larger;\n\n\n}\n\n\n/*\n\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\npadding: 30px;\nwidth: 100%;\nssssss\n\n\n.projectTitle{\n    font-size: 100px;\n}\n\n.projectText{\n    font-size: 40px;\n}\n\nimg{\n    display: block;\n    width: 50px;\n    height: auto;\n}\n\n*/\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.git {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n  }\n}\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n  .frontLogo{\n    width: 100%;\n    padding: 0 20px;\n  }\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n  .speak{\n    width: auto;\n  }\n\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n/*\n\n@media (max-width: 530px){\n .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n  .aboutMeTitle{\n    margin-bottom: 20px;\n  }\n}\n\n*/", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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;;;;;;;;;;;;;;;;CAwBC;;AAED,WAAW;;AAEX;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,aAAa;EACb,yCAAyC;EACzC,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;AACpB;;;AAGA;EACE;IACE,cAAc;EAChB;AACF;;AAEA,2BAA2B;AAC3B;EACE;IACE,cAAc;EAChB;AACF;;AAEA,2BAA2B;AAC3B;EACE;IACE,cAAc;EAChB;AACF;AACA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;EACb;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,mBAAmB;;EAErB;EACA;;IAEE,UAAU;EACZ;AACF;;AAEA;EACE;;IAEE,UAAU;EACZ;AACF;;AAEA;IACI;IACA,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;EACb;EACA;IACE,gBAAgB;IAChB,6CAA6C;IAC7C,UAAU;EACZ;EACA;IACE,WAAW;IACX,eAAe;EACjB;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;EACb;EACA;IACE,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;;AAEF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;EACX;AACF;;AAEA;;;;;;;;;;;;;;CAcC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Open+Sans:wght@300&family=Special+Elite&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cardo:wght@700&family=League+Gothic&family=Special+Elite&display=swap');\n\n:root {\n  --font-color: black;\n  --font-color-orange: rgb(255, 152, 0);\n  --font-color-blue: #32c0f4;\n  --border-color: #222;\n  --background: #fafafa;\n  --font-family-header: font-family: 'League Gothic', sans-serif;\n  --font-family-body: 'Open Sans', sans-serif;\n  --black: #000;\n  --white: #ffffff;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth;\n  font-family: var(--font-family-body);\n}\n\n\n\nbody {\n  color: var(--font-color);\n  /*       calc(10px + 2vmin)*/ \n  background-color: var(--background);\n  font-size: 1.8rem; \n  font-weight: 400;\n  line-height: 1.6;\n}\n\n#content{\n  width: 100%;\n  margin-left: auto;\n  box-sizing: border-box;\n  margin-right: auto;\n  display: block;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.headerLogo{\n  font-size: calc(20px + 3vw);\n  margin-left: 40px;\n  padding-top: 18px;\n  color: var(--font-color-orange);\n}\n\n.headerLogo:hover{\n  color: #000;\n}\n\nnav{\n  word-spacing: 0px;\n  margin-bottom: -4vh;\n  margin-right: 40px;  \n}\n\nnav a{\n  padding: 0 10px;\n  font-weight: 700;\n  color:#000; \n}\n\nnav a:hover {\n  color: var(--font-color-orange);\n  font-size: 1.7rem;\n  font-weight: 900;\n}\n\n.introContent{\n  min-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: #000;\n  margin-top: 20vh;\n}\n\nh1,\nh2, \n.nameIntro {\n  font-family: 'League Gothic', sans-serif;;\n  font-weight: 500;\n  \n  /* text-align: center; */\n}\n\n.titleIntro{\n  font-size: calc(100px + 2vw);\n  margin-top: 80px;\n}\n\n.nameIntro{\n  color: var(--font-color-blue);\n  font-size: calc(40px + 2vw);\n  margin-top: 35px;\n  margin-left: 50px;\n}\n\n.text1{\n  color: var(--font-color-orange);\n  text-decoration: underline;\n  font-size: calc(3px + 2vw); \n  margin-top: 30px;\n  margin-left: 100px;\n  font-weight: 600;\n}\n\n.createAboutMe{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 50px;\n  align-items: center;\n  padding: 30px;\n  margin-bottom: 50px;\n}\n\n\n\n.aboutMeDiv{\n  display: flex;\n  width: 90%;\n}\n\n.aboutMeDiv .left{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(20px + 1vw); \n  width: 45%;\n}\n\n.aboutMeDiv .right{\n  width: 55%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n  padding-bottom: 8px;\n  width: 40vw;\n}\n\n.aboutMeTitle:hover{\n  color: var(--font-color-orange);\n  opacity: .9;\n}\n\n.aboutMeDescription{\n\n}\n\n.skills{\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  margin: 80px auto;\n}\n\n.skillContainer{\n  width: 55%;\n}\n\n.product{\n  \n}\n\n.level{\n  text-align: center;\n  font-size: calc(20px + 1vw); \n  padding: 20px 0;\n  \n}\n\n\n.frontLogo{\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;  \n  justify-content: center;\n  align-items: center;\n  gap: 6rem;\n  background-color: #000;\n  border-radius: 20px; \n  position: relative;\n}\n\n*/\n.frontLogo:nth-child(2){\n  \n}\n\n.product img{\n  z-index: 10;\n  display: block;\n  width: 100px;\n  height: auto;\n  \n}\n.stack-item{\n  padding: 40px 0;\n  position: relative;\n}\n.stack-item h4{\n  color:white;\n  text-align: center;\n}\n\n.skillsTitle{\n  width: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: calc(30px + 1vw); \n}\n.frontLogo .stack-item:nth-child(4) img{\n background: white;\n border-radius: 10px;\n \n}\n.frontLogo .stack-item:nth-child(5) img{\n  border-radius: 60%;\n  background-color: white;\n}\n\n.speak{\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  \n  align-items: center;\n  border-radius: 20px;\n  min-width: 300px;\n  padding: 20px 30px;\n  background-color: #000;\n}\n\n.speak .country{\n  color: white;\n  align-items: center;\n  display: flex;\n  \n}\n\n.country img{\n  margin-left: 10px;\n  background-color: black;\n  border-radius: 50%;\n  display: block;\n  width: 50px;\n  height: auto;\n}\n\n \n\n.createWork{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 30px;\n  width: 85%;\n}\n\n\n.myWork{\n  width: 100%;\n  display: flex;\n  font-size: calc(35px + 1vw);\n}\n\n.grid{\n  display: flex;\n  flex-direction: row;\n  gap: 40px;  \n}\n\n  \n\n\n.projectImg {\n   display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height:auto;\n  width: 55%;\n  margin: 10px 0;\n  border-radius: 30px;\n  min-height: 550px;\n}\n\n.projectDescription{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  \n  width: 45%;\n}\n\n.projectTitle{\n  font-size: calc(30px + .6vw);\n  font-weight: 500;\n  text-align: center;\n  margin: 10px 0;\n}\n\n.projectButtons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n  \n}\n\n.projectButtons .reviewButton{\n  padding: 12px 2px;\nwidth: 100%;\nborder: 0;\nborder-radius: 5px;\nborder: 1px solid var(--black);\nbackground-color: var(--white);\ncolor: var(--black);\nfont-size: 18px;\nfont-family: ;\ntext-transform: uppercase;\ntransition: all .4s;\ncursor: pointer;\nposition: relative;\nz-index: 10;\noverflow: hidden;\nmax-width: 350px;\nmin-width: 250px;\ntext-align: center;\n}\n\n.reviewButton:hover{\n  background-color: var(--black);\n  color: var(--white);\n  letter-spacing: 4px;\n}\n\n.liveButton{\n  padding: 12px 22px;\n  width: 100%;\n  border: 0;\n  border-radius: 5px;\n  border: 1px solid var(--black);\n  background-color: var(--white);\n  color: var(--black);\n  font-size: 18px;\n  font-family: ;\n  text-transform: uppercase;\n  transition: all .4s;\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  overflow: hidden;\n  max-width: 350px;\n  min-width: 250px; \n  text-align: center;\n\n}\n\n.liveButton:hover{\n  background-color: var(--black);\ncolor: var(--white);\nletter-spacing: 4px;\n}\n\n\n.projectButtons a {\n  text-decoration: none;\n\n}\n\n@media (max-width: 650px){\n  .projectButtons{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin-top: 40px;\n  }\n}\n\n@media (max-width: 1450px){\n  .grid{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n  .myWork{\n    margin-bottom: 30px;\n    border-bottom: 2px dashed rgba(0, 0, 0, 0.651);\n    text-align: center;\n    width: 70%;\n    display:  flex;\n    justify-content: center;\n  }\n  .projectImg{\n    width: 100%;\n    \n  }\n  .projectDescription{\n    width: 100%;\n  }\n  .projectButtons{\n    margin-bottom: 60px;\n  }\n}\n\n/* Content \n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n}\n\nHeader */\n\n\n\n\n/* Main */\n\n.main {\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nfont-size: larger;\n\n\n}\n\n\n/*\n\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\npadding: 30px;\nwidth: 100%;\nssssss\n\n\n.projectTitle{\n    font-size: 100px;\n}\n\n.projectText{\n    font-size: 40px;\n}\n\nimg{\n    display: block;\n    width: 50px;\n    height: auto;\n}\n\n*/\n\n/* Footer */\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  background-color: var(--background-light);\n}\n\n.git {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n@media (max-width: 75em) {\n  html {\n    font-size: 60%;\n  }\n}\n\n/* 980px / 16px = 61.25em */\n@media (max-width: 61.25em) {\n  html {\n    font-size: 58%;\n  }\n}\n\n/* 460px / 16px = 28.75em */\n@media (max-width: 28.75em) {\n  html {\n    font-size: 55%;\n  }\n}\n@media (max-width: 28.75em){\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n  .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .aboutMeTitle{\n    margin-bottom: 20px;\n    \n  }\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 50%;\n  }\n}\n\n@media (max-width: 750px){\n  .aboutMeDiv .left,\n  .aboutMeDiv .right{\n    width: 70%;\n  }\n}\n\n@media (max-width: 1310px){\n    .skills{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .skillsTitle{\n    margin-top: 40px;\n    border-bottom:2px dashed rgba(0, 0, 0, 0.651);\n    width: 60%;\n  }\n  .frontLogo{\n    width: 100%;\n    padding: 0 20px;\n  }\n  .speak{\n    width: auto;\n  }\n}\n\n@media (max-width: 800px) {\n  .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;  \n  }\n  .aboutMeTitle{\n    margin-bottom: 30px;\n  }\n  .speak{\n    width: auto;\n  }\n\n}\n\n@media (max-width: 580px) {\n  .speak{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 35px;\n  }\n}\n\n/*\n\n@media (max-width: 530px){\n .aboutMeDiv{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n  }\n  .aboutMeTitle{\n    margin-bottom: 20px;\n  }\n}\n\n*/"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sY0FBYyxTQUFTLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGVBQWUsUUFBUSw0QkFBNEIsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZ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QUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQWtCLHVEQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vc3JjL3dvcmsuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2VicGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhYm91dFNlY3Rpb24oKXtcblxuICAgIGNvbnN0IGNyZWF0ZUFib3V0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY3JlYXRlQWJvdXRNZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICAgIGNyZWF0ZUFib3V0TWUuY2xhc3NMaXN0LmFkZChcImNyZWF0ZUFib3V0TWVcIik7XG5cbiAgICBjb25zdCBhYm91dE1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRNZURpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRNZURpdlwiKTtcbiAgICBcbiAgICBjcmVhdGVBYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVEaXYpO1xuXG4gICAgXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgICBhYm91dE1lRGl2LmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gICAgY29uc3QgYWJvdXRNZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dE1lVGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0TWVUaXRsZVwiKTtcbiAgICBhYm91dE1lVGl0bGUudGV4dENvbnRlbnQgPSBcIlswXWFib3V0TWVcIjtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGFib3V0TWVUaXRsZSk7XG5cbiAgICBjb25zdCBhYm91dE1lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRNZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dE1lRGVzY3JpcHRpb25cIik7XG4gICAgYWJvdXRNZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJJJ20gYSBGcm9udC1lbmQgZGV2ZWxvcGVyIHdobyBjYXJyaWVzIGEga2VlbiBleWUgZm9yIGRlc2lnbiBpbiBhbiB1c2VyLWZpcnN0IGFwcHJvYWNoLiBNeSBjdXJyZW50IGZvY3VzIGlzIGluIGNyZWF0aW5nIHJlc3BvbnNpdmUgbGF5b3V0cyBvbiB0aGUgSmF2YVNjcmlwdCBzdGFjayBvZiBSZWFjdCBhbmQgTm9kZUpTIHdoaWNoIEkgaGF2ZSBiZWVuIGV4cGxvcmluZyByZWNlbnRseSwgYW5kIGZyb20gbXkgYmFja2dyb3VuZCBhcyBhbiBwaHlzaWNpc3QgSSdtIHdlbGwgYWNxdWFpbnRlZCB0byBicmluZ2luZyBvdXQgc29sdXRpb25zIHRvIGNvbXBsZXggcHJvYmxlbXMuXCI7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoYWJvdXRNZURlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHNraWxsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNraWxsc0Rpdi5jbGFzc0xpc3QuYWRkKFwic2tpbGxzXCIpO1xuICAgIGNyZWF0ZUFib3V0TWUuYXBwZW5kQ2hpbGQoc2tpbGxzRGl2KTtcblxuICAgIFxuXG4gICAgY29uc3Qgc2tpbGxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvLyBwcmljaW5nXG4gICAgc2tpbGxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNraWxsQ29udGFpbmVyXCIpOyBcbiAgICBza2lsbHNEaXYuYXBwZW5kQ2hpbGQoc2tpbGxDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3RhY2tGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhY2tGcm9udC5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdFwiKTtcbiAgICBza2lsbENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFja0Zyb250KTsgICAgXG5cbiAgICBjb25zdCBzdGFja0Zyb250VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgc3RhY2tGcm9udFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsZXZlbFwiKTtcbiAgICBzdGFja0Zyb250VGl0bGUudGV4dENvbnRlbnQgPSBcIkZyb250LWVuZFwiO1xuICAgIHN0YWNrRnJvbnQuYXBwZW5kQ2hpbGQoc3RhY2tGcm9udFRpdGxlKTtcblxuICAgIGNvbnN0IGZyb250TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnRMb2dvLmNsYXNzTGlzdC5hZGQoXCJmcm9udExvZ29cIik7XG4gICAgZnJvbnRMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkhUTUw1XCIpKTtcbiAgICBmcm9udExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiQ1NTM1wiKSk7XG4gICAgZnJvbnRMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkphdmFTY3JpcHRcIikpO1xuICAgIFxuICAgIHN0YWNrRnJvbnQuYXBwZW5kQ2hpbGQoZnJvbnRMb2dvKTtcblxuICAgIGNvbnN0IHN0YWNrVGVjaG5vbG9neSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhY2tUZWNobm9sb2d5LmNsYXNzTGlzdC5hZGQoXCJwcm9kdWN0XCIpO1xuICAgIHNraWxsQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YWNrVGVjaG5vbG9neSk7XG5cbiAgICBjb25zdCBzdGFja1RlY2hub2xvZ3lUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBzdGFja1RlY2hub2xvZ3lUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGV2ZWxcIik7XG4gICAgc3RhY2tUZWNobm9sb2d5VGl0bGUudGV4dENvbnRlbnQgPSBcIlRlY2hub2xvZ3lcIjtcbiAgICBzdGFja0Zyb250LmFwcGVuZENoaWxkKHN0YWNrVGVjaG5vbG9neVRpdGxlKTtcblxuICAgIGNvbnN0IHRlY2hMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZWNoTG9nby5jbGFzc0xpc3QuYWRkKFwiZnJvbnRMb2dvXCIpO1xuICAgIHRlY2hMb2dvLmFwcGVuZENoaWxkKGNyZWF0ZVN0YWNrSXRlbShcIkdpdFwiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiV2ViUGFja1wiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwibnBtXCIpKTtcbiAgICB0ZWNoTG9nby5hcHBlbmRDaGlsZChjcmVhdGVTdGFja0l0ZW0oXCJMaW51eFwiKSk7XG4gICAgdGVjaExvZ28uYXBwZW5kQ2hpbGQoY3JlYXRlU3RhY2tJdGVtKFwiR2l0SHViXCIpKTtcbiAgIFxuXG4gICAgc3RhY2tGcm9udC5hcHBlbmRDaGlsZCh0ZWNoTG9nbyk7XG5cbiAgICBjb25zdCBza2lsbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc2tpbGxzVGl0bGUuY2xhc3NMaXN0LmFkZChcInNraWxsc1RpdGxlXCIpO1xuICAgIHNraWxsc1RpdGxlLnRleHRDb250ZW50ID0gXCJUb29scyBhbmQgU2tpbGxzXCI7XG4gICAgc2tpbGxzRGl2LmFwcGVuZENoaWxkKHNraWxsc1RpdGxlKTtcblxuICAgIGNvbnN0IHNwZWFrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BlYWtEaXYuY2xhc3NMaXN0LmFkZChcInNwZWFrXCIpO1xuICAgIGNyZWF0ZUFib3V0TWUuYXBwZW5kQ2hpbGQoc3BlYWtEaXYpO1xuXG4gICAgY29uc3QgZW5nbGlzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVuZ2xpc2hEaXYuY2xhc3NMaXN0LmFkZChcImNvdW50cnlcIik7XG4gICAgZW5nbGlzaERpdi50ZXh0Q29udGVudCA9IFwiSSBzcGVhayBFbmdsaXNoXCI7XG4gICAgc3BlYWtEaXYuYXBwZW5kQ2hpbGQoZW5nbGlzaERpdik7XG5cbiAgICBjb25zdCBlbmdsaXNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZW5nbGlzaEltZy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgIGVuZ2xpc2hJbWcuc3JjID0gYC9pbWcvbGFuZ3VhZ2UvdWsuc3ZnYDtcbiAgICBlbmdsaXNoSW1nLmFsdCA9IFwiZW5nbGlzaFwiO1xuICAgIGVuZ2xpc2hEaXYuYXBwZW5kQ2hpbGQoZW5nbGlzaEltZyk7XG5cbiAgICBjb25zdCByb21hbmlhbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvbWFuaWFuRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuICAgIHJvbWFuaWFuRGl2LnRleHRDb250ZW50ID0gXCJFdSB2b3JiZXNjIHJvbcOibmXImXRlXCI7XG4gICAgc3BlYWtEaXYuYXBwZW5kQ2hpbGQocm9tYW5pYW5EaXYpO1xuXG4gICAgY29uc3Qgcm9tYW5pYW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICByb21hbmlhbkltZy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgIHJvbWFuaWFuSW1nLnNyYyA9ICAgYC9pbWcvbGFuZ3VhZ2Uvcm8ucG5nYDtcbiAgICByb21hbmlhbkltZy5hbHQgPSBcInJvXCI7XG4gICAgcm9tYW5pYW5EaXYuYXBwZW5kQ2hpbGQocm9tYW5pYW5JbWcpO1xuXG5cbiAgICBjb25zdCBkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudHJ5XCIpO1xuICAgIGRlRGl2LnRleHRDb250ZW50ID0gXCJJY2ggc3ByZWNoZSBkZXV0c2NoXCI7XG4gICAgc3BlYWtEaXYuYXBwZW5kQ2hpbGQoZGVEaXYpO1xuXG4gICAgY29uc3QgZGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZUltZy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZScpO1xuICAgIGRlSW1nLnNyYyA9IGAvaW1nL2xhbmd1YWdlL2RlLnBuZ2A7XG4gICAgZGVJbWcuYWx0ID0gXCJkZVwiO1xuICAgIGRlRGl2LmFwcGVuZENoaWxkKGRlSW1nKTtcblxuICAgIHJldHVybiBjcmVhdGVBYm91dE1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFja0l0ZW0obmFtZSl7XG4gICAgY29uc3Qgc3RhY2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFja0l0ZW0uY2xhc3NMaXN0LmFkZChcInN0YWNrLWl0ZW1cIik7XG4gICAgXG4gICAgY29uc3Qgc3RhY2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHN0YWNrTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBzdGFja0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzdGFja0ltYWdlLnNyYyA9IGAvaW1nL3N0YWNrLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgIHN0YWNrSW1hZ2UuYWx0ID0gYCR7bmFtZX1gO1xuICAgIHN0YWNrSW1hZ2UuY2xhc3NMaXN0LmFkZChcInN0YWNrXCIpO1xuXG4gICAgc3RhY2tJdGVtLmFwcGVuZENoaWxkKHN0YWNrSW1hZ2UpO1xuICAgIHN0YWNrSXRlbS5hcHBlbmRDaGlsZChzdGFja05hbWUpO1xuICAgIFxuICAgIHJldHVybiBzdGFja0l0ZW07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRTZWN0aW9uO1xuXG4vKlxuXG5cbiAgIFxuXG4gICBcbiBcbiovIiwiZnVuY3Rpb24gY29udGFjdFNlY3Rpb24oKXtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJbMl1jb250YWN0XCI7XG4gICAgXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGVudFwiKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcblxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29udGFjdFRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RUZXh0XCIpO1xuICAgIGNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gXCJJJ20gY3VycmVudGx5IGxvb2tpbmcgZm9yIHdvcmsgYXMgYSBmdWxsLXN0YWNrIGRldmVsb3Blci4gUGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IG1lIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgYWRkaXRpb25hbCBjcmVkZW50aWFscyBvciB0aGUgZGVzaWduIG9mIHRoaXMgd2Vic2l0ZS4gUGxlYXNlIGNvbnRhY3QgbWUgaWYgeW91IGFyZSBhIHJlY3J1aXRlciBsb29raW5nIGZvciBhIGhhcmR3b3JraW5nIGluZGl2aWR1YWwuXCJcblxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcblxuICAgIGNvbnN0IGNvbnRhY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdExpc3RcIik7XG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdExpc3QpO1xuICAgIFxuICAgIGNvbnN0IGxpc3RUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGlzdFRpbGUuY2xhc3NMaXN0LmFkZChcImxpc3RUaXRsZVwiKTtcbiAgICBsaXN0VGlsZS50ZXh0Q29udGVudCA9IFwiWW91IGNhbiB3cml0ZSBtZSBhbiBlLW1haWwgYXQ6IGNpZ21haWFuMUBnbWFpbC5jb21cIjtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0VGlsZSk7XG5cbiAgICBjb25zdCBsaXN0U2VjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsaXN0U2VjVGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3RTZWNUaXRsZVwiKTtcbiAgICBsaXN0U2VjVGl0bGUudGV4dENvbnRlbnQgPSBcIk9SXCI7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQobGlzdFNlY1RpdGxlKTtcblxuICAgIGNvbnN0IGxpc3RJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdEljb25zLmNsYXNzTGlzdC5hZGQoXCJsaXN0SWNvbnNcIik7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEljb25zKTtcblxuICAgIGNvbnN0IGxpc3RJY29uc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGlzdEljb25zVGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3RJY29uc1RpdGxlXCIpO1xuICAgIGxpc3RJY29uc1RpdGxlLnRleHRDb250ZW50ID0gXCJSZWFjaCBtZSB0aHJvdWdoIHNvY2lhbCBtZWRpYVwiO1xuICAgIGxpc3RJY29ucy5hcHBlbmRDaGlsZChsaXN0SWNvbnNUaXRsZSk7XG5cbiAgICBjb25zdCBsaXN0R2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGlzdEdpdEljb24uY2xhc3NMaXN0LmFkZChcImxpc3RHaXRJY29uXCIpO1xuICAgIGxpc3RHaXRJY29uLnNyYyA9IFwiaW1nL3N0YWNrL2dpdGh1Yi5wbmdcIjtcbiAgICBsaXN0R2l0SWNvbi5hbHQgPSBcImdpdCBsb2dcIjtcbiAgICBcblxuICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhblwiO1xuICAgIGdpdExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQobGlzdEdpdEljb24pO1xuICAgIGxpc3RJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuXG4gICAgY29uc3QgbGlzdEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBsaXN0SW4uY2xhc3NMaXN0LmFkZChcImxpc3RJblwiKTtcbiAgICBsaXN0SW4uc3JjID0gXCJpbWcvc3RhY2svbGkucG5nXCI7XG4gICAgbGlzdEluLmFsdCA9IFwibGlua2VkSW4gbG9nb1wiO1xuXG4gICAgY29uc3QgaW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgaW5Mb2dvLmhyZWYgPSBcImh0dHBzOi8vcm8ubGlua2VkaW4uY29tL2luL2FuZHJlaS1jaWdtYWlhbi9yb1wiO1xuICAgIGluTG9nby50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgaW5Mb2dvLmFwcGVuZENoaWxkKGxpc3RJbik7XG4gICAgbGlzdEljb25zLmFwcGVuZENoaWxkKGluTG9nbyk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0U2VjdGlvbjsiLCJcbmZ1bmN0aW9uIGNyZWF0ZUludHJvKCl7XG4gICBcbiAgICBjb25zdCBpbnRyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnRyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW50cm9Db250ZW50Jyk7XG5cbiAgICBjb25zdCB0aXRsZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUludHJvLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSW50cm8nKTtcbiAgICB0aXRsZUludHJvLnRleHRDb250ZW50ID0gXCJIZWxsbyxcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnRybyk7XG5cblxuICAgIGNvbnN0IG5hbWVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lSW50cm8uY2xhc3NMaXN0LmFkZCgnbmFtZUludHJvJyk7XG4gICAgbmFtZUludHJvLnRleHRDb250ZW50ID0gXCJJJ20gQ2lnbWFpYW4gQW5kcmVpLlwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZChuYW1lSW50cm8pO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgndGV4dDEnKTtcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiSSBidWlsZCBkaWdpdGFsIGV4cGVyaWVuY2VzLlwiO1xuICAgIGludHJvQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0MSk7XG5cbiAgICAvKlxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHQyJyk7XG4gICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIkknbSBhIEZyb250LWVuZCBkZXZlbG9wZXIgd2hvIGNhcnJpZXMgYSBrZWVuIGV5ZSBmb3IgZGVzaWduIGluIGFuIHVzZXItZmlyc3QgYXBwcm9hY2guIE15IGN1cnJlbnQgZm9jdXMgaXMgaW4gY3JlYXRpbmcgcmVzcG9uc2l2ZSBsYXlvdXRzIG9uIHRoZSBKYXZhU2NyaXB0IHN0YWNrIG9mIFJlYWN0IGFuZCBOb2RlSlMgd2hpY2ggSSBoYXZlIGJlZW4gZXhwbG9yaW5nIHJlY2VudGx5LCBhbmQgZnJvbSBteSBiYWNrZ3JvdW5kIGFzIGFuIHBoeXNpY2lzdCBJJ20gd2VsbCBhY3F1YWludGVkIHRvIGJyaW5naW5nIG91dCBzb2x1dGlvbnMgdG8gY29tcGxleCBwcm9ibGVtcy5cIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dDIpO1xuICAgICovXG4gICAgcmV0dXJuIGludHJvQ29udGVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW50cm87XG5cblxuXG5cbi8qXG5mdW5jdGlvbiBjcmVhdGVJbnRybygpe1xuXG4gICAgY29uc3QgaW50cm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW50cm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2ludHJvQ29udGVudCcpO1xuXG4gICAgY29uc3QgdGl0bGVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVJbnRyby5jbGFzc0xpc3QuYWRkKCd0aXRsZUludHJvJyk7XG4gICAgdGl0bGVJbnRyby50ZXh0Q29udGVudCA9IFwiSGkgSSBhbSBBbmRyZWlcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnRybyk7XG5cblxuICAgIGNvbnN0IG5hbWVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lSW50cm8uY2xhc3NMaXN0LmFkZCgnbmFtZUludHJvJyk7XG4gICAgbmFtZUludHJvLnRleHRDb250ZW50ID0gXCJDaWdtYWlhbiBBbmRyZWkuXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnRybyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCd0ZXh0MScpO1xuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCIgXCI7XG4gICAgaW50cm9Db250ZW50LmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRleHQyLmNsYXNzTGlzdC5hZGQoJ3RleHQyJyk7XG4gICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIiBcIjtcbiAgICBpbnRyb0NvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dDIpO1xuXG4gICAgcmV0dXJuIGludHJvQ29udGVudDtcbn1cblxuZnVuY3Rpb24gbG9hZEludHJvKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUludHJvKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSW50cm87XG5cbiovXG5cbiIsIlxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbWFpbi5jc3MnO1xuXG5pbXBvcnQgYWJvdXRTZWN0aW9uIGZyb20gXCIuL2Fib3V0LmpzXCI7XG5pbXBvcnQgY3JlYXRlSW50cm8gZnJvbSBcIi4vbWFpbi5qc1wiO1xuaW1wb3J0IHdvcmtTZWN0aW9uIGZyb20gXCIuL3dvcmsuanNcIjtcbmltcG9ydCBjb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cblxuIGNvbnN0IGhlYWRlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZChcImhlYWRlckxvZ29cIik7XG4gIGhlYWRlckxvZ28udGV4dENvbnRlbnQgPSBcIltDQV1cIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIFxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgY29uc3QgYWJvdXRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGFib3V0TWVudS5jbGFzc0xpc3QuYWRkKFwibmF2TGlua1wiKTtcbiAgYWJvdXRNZW51LnRleHRDb250ZW50ID0gXCJbMF1hYm91dE1lXCI7XG4gIGFib3V0TWVudS5ocmVmPVwiI2Fib3V0XCI7XG4gIFxuICBjb25zdCB3b3JrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICB3b3JrTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2TGlua1wiKTtcbiAgd29ya01lbnUudGV4dENvbnRlbnQgPSBcIlsxXW15V29ya1wiO1xuICB3b3JrTWVudS5ocmVmPVwiI215d29ya1wiO1xuXG4gIGNvbnN0IGNvbnRhY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnRhY3RNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZMaW5rXCIpO1xuICBjb250YWN0TWVudS50ZXh0Q29udGVudCA9IFwiWzJdY29udGFjdFwiO1xuICBjb250YWN0TWVudS5ocmVmPVwiI2NvbnRhY3RcIjtcblxuICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRNZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKHdvcmtNZW51KTtcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RNZW51KTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVJbnRybygpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24oKSk7ICBcbiAgIFxuICBtYWluLmFwcGVuZENoaWxkKHdvcmtTZWN0aW9uKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKCkpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDcmVhdGVkIGJ5IGNpZ21haWFuIMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWA7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhblwiO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBnaXRodWJJY29uLnNyYz0gYGltZy9zdGFjay9naXRodWIucG5nYDtcbiAgZ2l0aHViSWNvbi5hbHQgPSBcImdpdC1pbWdcIjtcbiAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKCdnaXQnKTtcblxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCJmdW5jdGlvbiB3b3JrU2VjdGlvbigpe1xuXG4gICAgY29uc3QgY3JlYXRlV29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGNyZWF0ZVdvcmsuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteXdvcmtcIik7XG4gICAgY3JlYXRlV29yay5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlV29ya1wiKTtcblxuICAgIGNvbnN0IG15V29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbXlXb3JrLmNsYXNzTGlzdC5hZGQoXCJteVdvcmtcIik7XG4gICAgbXlXb3JrLnRleHRDb250ZW50ID0gXCJbMV1teVdvcmtcIjtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQobXlXb3JrKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJSZXN0YXVyYW50IFBhZ2VcIixcbiAgICAgICAgICAgIFwiUmVzdGF1cmFudCBXZWIgUGFnZSBidWlsZCB3aXRoIEhUTUw1LCBDU1MzLCBKYXZhU2NyaXAsIFdlYlBhY2sgJiBHaXQuIFRoZSBzaXRlIGNvbnNpc3Qgb2YgaG9tZSBwYWdlLCBtZW51IHBhZ2UsIGNvbnRhY3QgcGFnZSBUaGUgYWltIG9mIHRoZSBwcm9qZWN0IHdhcyB0byBtYWtlIGEgZnVuY3Rpb25hbCBtdWx0aSBwYWdlIFJlc3RhdXJhbnQgd2Vic2l0ZSB1c2luZyBXZWJQYWNrIHRvIGJ1bmRsZSBmaWxlcyBhbmQgSmF2c2NyaXB0IERPTSBtYW5pcHVsYXRpb24uXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9yZXN0YXVyYW50LXBhZ2Utb25saW5lXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS1vbmxpbmUvXCJcbiAgICAgICAgKVxuICAgICk7XG4gICAgXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIkV0Y2gtYS1Ta2V0Y2hcIixcbiAgICAgICAgICAgIFwiIFRoZSBwcm9qZWN0IHdhcyBidWlsZCB3aXRoIEhUTUw1LCBDU1MzLCBKYXZhU2NyaXAuIFRoZSBpZGVhIGJlaGluZCB0aGUgYXBwIHdhcyB0byByZWNyZWF0ZSB0aGUgZ29vZCBvbGQgY2hpbGRob29kIGRyYXcgYm9hcmQuIEFwcCBmZWF1cmVzOiBTZWxlY3QgZ3JpZCBzaXplLCBSYW5kb20gY29sb3IgYnV0dG9uIG9wdGlvbiwgQ3VzdG9tIGNvbG9yIFNlbGVjdG9yLCBDYW52YXMgb3B0aW9uLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vRXRjaC1hLVNrZXRjaFwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9FdGNoLWEtU2tldGNoL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIkxpYnJhcnkgQXBwXCIsXG4gICAgICAgICAgICBcIkEgc21hbGwgTGlicmFyeSBhcHAsIGNyZWF0ZWQgd2l0aCBIVE1MNSwgQ1NTMyBhbmQgSmF2YVNjcmlwdC4gVGhlIGRhdGEgaXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZS4gRmVhdHVyZXM6IFNlYXJjaCBiYXIgaW1wbGVtZW50YXRpb24sIFlvdSBjYW4gZGVsZXRlIGFueSBvZiB5b3VyIGJvb2tzLCBDYW4gdXBkYXRlIHdoZXRoZXIgeW91J3ZlIHJlYWQgYW55IG9mIHRoZSBib29rcyBpbiB5b3VyIGxpYnJhcnlcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL1Byb2plY3QtTGlicmFyeVwiLFxuICAgICAgICAgICAgXCJodHRwczovL2NpZ21haWFuLmdpdGh1Yi5pby9Qcm9qZWN0LUxpYnJhcnkvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjcmVhdGVXb3JrLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVXb3JrSXRlbShcbiAgICAgICAgICAgIFwiT25saW5lIENhbGN1bGF0b3JcIixcbiAgICAgICAgICAgIFwiQW4gb25saW5lIGNhbGN1bGF0b3Igd2l0aCBiYXNpYyBhcml0aG1ldGljIG9wZXJhdGlvbnMsIGFwcGxpY2F0aW9uIGRldmVsb3BlZCB1c2luZyBIVE1MNSwgQ1NTMywgSmF2YVNjcmlwLiBGZWF0dXJlczogS2V5Ym9hcmQgaW5wdXRzIGFyZSBzdXBwb3J0ZWQgZm9yIG51bWJlcnMsIG9wZXJ0YW9ycyBhbmQgb3RoZXIgb3B0aW9ucywgQ29tZXMgd2l0aCBvcHRpb25zIHRvIGNsZWFyL2RlbGV0ZSBhIHNpbmdsZSBpbnB1dCBPUiBjbGVhciB0aGUgd2hvbGUgZGlzcGxheS5cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2NpZ21haWFuL0NhbGN1bGF0b3JcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vQ2FsY3VsYXRvci9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJTaWduLXVwLUZvcm1cIixcbiAgICAgICAgICAgIFwiQSBzaW5nLXVwIGZvcm0gYnVpbHQgdXNpbmcgSFRNTDUsIENTUzMgYW5kIEphdmFTY3JpcHQuIEZlYXR1cmVzOiBEYXJrIG1vZGUsIEhvdmVyIGVmZmVjdCBvbiBsb2dvLCBidXR0b25zIGFuZCBsb2cgaW4uXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9jaWdtYWlhbi9TaWduLXVwLUZvcm1cIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vU2lnbi11cC1Gb3JtL1wiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlV29ya0l0ZW0oXG4gICAgICAgICAgICBcIkd1bi1GYXJtZXItQmVhclwiLFxuICAgICAgICAgICAgXCJUaGlzIGlzIG15IGZpcnN0IGdhbWUgZGV2ZWxvcGVkIHVzaW5nIEhUTUw1LCBDU1MzIGFuZCBKYXZhU2NyaXB0LiBDaGVjayBHaXRIdWIgZm9yIG1vcmUgaW4gZGVwdGggZGV0YWlscyBvZiB0aGUgZGV2ZWxvcG1lbnQgc3RhZ2VzLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vR1VOLUZBUk1FUi1CRUFSXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2lnbWFpYW4uZ2l0aHViLmlvL0dVTi1GQVJNRVItQkVBUi9cIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIGNyZWF0ZVdvcmsuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZVdvcmtJdGVtKFxuICAgICAgICAgICAgXCJUaWMtVGFjLVRvZVwiLFxuICAgICAgICAgICAgXCJUaGUgZmFtb3VzZSBUaWMgVGFjIFRvZSBnYW1lIG1hZGUgd2l0aCBIVE1MNSwgQ1NTMyBhbmQgSmF2YVNjcmlwdCEgSSB1c2VkIHRoaXMgcHJvamVjdCB0byBwcmFjdGljZSBzaW1wbGUgYWxnb3JpdGhtcyBhbmQgdXNpbmcgZXZlbnQgbGlzdGVuZXJzLiBGZWF0dXJlczogVHdvIHBsYXllciBtb2RlLCBDaGVja3MgZm9yIGEgd2lubmVyIG9yIGlmIHRoZXJlIGlzIGEgdGllLlwiLFxuICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vY2lnbWFpYW4vVGljLVRhYy1Ub2VcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jaWdtYWlhbi5naXRodWIuaW8vVGljLVRhYy1Ub2UvXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gY3JlYXRlV29yayAgICAgICBcbiAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmtJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBsaW5rQ29kZSwgbGlua0xpdmUpIHtcbiAgICBjb25zdCBwcm9qZWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEdyaWQuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7IC8vcHJvZHVjdCBsYW5kaW5nIHBhZ2UgNDggaHRtbFxuXG4gICAgY29uc3QgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLnNyYyA9YC4vaW1nL3Byb2plY3RzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgIHByb2plY3RJbWcuYWx0ID0gYCR7bmFtZX1gO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7IFxuICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RUaXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRleHRcIik7XG4gICAgcHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbnNcIik7XG4gICAgXG4gICAgY29uc3QgcmV2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcmV2aWV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdCdXR0b25cIik7XG4gICAgcmV2aWV3QnV0dG9uLmhyZWYgPSBsaW5rQ29kZTtcbiAgICByZXZpZXdCdXR0b24udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICByZXZpZXdCdXR0b24udGV4dENvbnRlbnQgPSBcIntSRVZJRVcgVEhFIENPREV9XCI7XG4gICBcbiAgICBjb25zdCBsaXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGl2ZUJ1dHRvblwiKTtcbiAgICBsaXZlQnV0dG9uLmhyZWYgPSBsaW5rTGl2ZTtcbiAgICBsaXZlQnV0dG9uLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgbGl2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiW1NFRSBJVCBMSVZFXVwiO1xuXG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQobGl2ZUJ1dHRvbik7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQocmV2aWV3QnV0dG9uKTtcblxuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICBcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuICAgIFxuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEltZyk7XG4gIC8qXG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuKi9cbiAgICByZXR1cm4gcHJvamVjdEdyaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdvcmtTZWN0aW9uO1xuXG5cbi8qXG5cblxuIGNvbnN0IHByb2plY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0R3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTsgLy9wcm9kdWN0IGxhbmRpbmcgcGFnZSA0OCBodG1sXG4gICAgY3JlYXRlV29yay5hcHBlbmRDaGlsZChwcm9qZWN0R3JpZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0SW1nXCIpO1xuICAgIHByb2plY3RJbWcuc3JjID0gXCIuL2ltZy9wcm9qZWN0cy9yZXN0YXVyYW50LnBuZ1wiO1xuICAgIHByb2plY3RJbWcuYWx0ID0gXCJyZXN0YXVyYW50IHBhZ2VcIjtcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiVFRUVFRUVFRcIjtcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdFRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RUZXh0XCIpO1xuICAgIHByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJnZ2dnZ2dnZ2dnZ2dnXCI7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvbnNcIik7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbnMpO1xuXG4gICAgY29uc3QgcmV2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcmV2aWV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdCdXR0b25cIik7XG4gICAgcmV2aWV3QnV0dG9uLmhyZWYgPSBcIlwiO1xuICAgIHJldmlld0J1dHRvbi50ZXh0Q29udGVudCA9IFwiUkVWSUVXIFRIRSBDT0RFXCI7XG4gICAgcHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQocmV2aWV3QnV0dG9uKTtcblxuICAgIGNvbnN0IGxpdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXZlQnV0dG9uXCIpO1xuICAgIGxpdmVCdXR0b24uaHJlZiA9XCIgXCI7XG4gICAgbGl2ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0VFIElUIExJVkVcIjtcbiAgICBwcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChsaXZlQnV0dG9uKTtcblxuICAgICBcblxuXG4gXG4qLyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlciZmYW1pbHk9Q2FyZG86d2dodEA3MDAmZmFtaWx5PUxlYWd1ZStHb3RoaWMmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZmYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXJkbzp3Z2h0QDcwMCZmYW1pbHk9TGVhZ3VlK0dvdGhpYyZmYW1pbHk9U3BlY2lhbCtFbGl0ZSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcbiAgLS1mb250LWNvbG9yLW9yYW5nZTogcmdiKDI1NSwgMTUyLCAwKTtcXG4gIC0tZm9udC1jb2xvci1ibHVlOiAjMzJjMGY0O1xcbiAgLS1ib3JkZXItY29sb3I6ICMyMjI7XFxuICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICAtLWZvbnQtZmFtaWx5LWhlYWRlcjogZm9udC1mYW1pbHk6ICdMZWFndWUgR290aGljJywgc2Fucy1zZXJpZjtcXG4gIC0tZm9udC1mYW1pbHktYm9keTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAtLWJsYWNrOiAjMDAwO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJvZHkpO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIC8qICAgICAgIGNhbGMoMTBweCArIDJ2bWluKSovIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDEuOHJlbTsgXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyTG9nb3tcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgM3Z3KTtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgcGFkZGluZy10b3A6IDE4cHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbn1cXG5cXG4uaGVhZGVyTG9nbzpob3ZlcntcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5uYXZ7XFxuICB3b3JkLXNwYWNpbmc6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IC00dmg7XFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7ICBcXG59XFxuXFxubmF2IGF7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IzAwMDsgXFxufVxcblxcbm5hdiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5pbnRyb0NvbnRlbnR7XFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xcbiAgY29sb3I6ICMwMDA7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbn1cXG5cXG5oMSxcXG5oMiwgXFxuLm5hbWVJbnRybyB7XFxuICBmb250LWZhbWlseTogJ0xlYWd1ZSBHb3RoaWMnLCBzYW5zLXNlcmlmOztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLnRpdGxlSW50cm97XFxuICBmb250LXNpemU6IGNhbGMoMTAwcHggKyAydncpO1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLm5hbWVJbnRyb3tcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWJsdWUpO1xcbiAgZm9udC1zaXplOiBjYWxjKDQwcHggKyAydncpO1xcbiAgbWFyZ2luLXRvcDogMzVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4udGV4dDF7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IGNhbGMoM3B4ICsgMnZ3KTsgXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNyZWF0ZUFib3V0TWV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuXFxuXFxuLmFib3V0TWVEaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLmFib3V0TWVEaXYgLmxlZnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpOyBcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5hYm91dE1lRGl2IC5yaWdodHtcXG4gIHdpZHRoOiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIHdpZHRoOiA0MHZ3O1xcbn1cXG5cXG4uYWJvdXRNZVRpdGxlOmhvdmVye1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIG9wYWNpdHk6IC45O1xcbn1cXG5cXG4uYWJvdXRNZURlc2NyaXB0aW9ue1xcblxcbn1cXG5cXG4uc2tpbGxze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxufVxcblxcbi5za2lsbENvbnRhaW5lcntcXG4gIHdpZHRoOiA1NSU7XFxufVxcblxcbi5wcm9kdWN0e1xcbiAgXFxufVxcblxcbi5sZXZlbHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMXZ3KTsgXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBcXG59XFxuXFxuXFxuLmZyb250TG9nb3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7ICBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuKi9cXG4uZnJvbnRMb2dvOm50aC1jaGlsZCgyKXtcXG4gIFxcbn1cXG5cXG4ucHJvZHVjdCBpbWd7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgXFxufVxcbi5zdGFjay1pdGVte1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3RhY2staXRlbSBoNHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2tpbGxzVGl0bGV7XFxuICB3aWR0aDogNDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgMXZ3KTsgXFxufVxcbi5mcm9udExvZ28gLnN0YWNrLWl0ZW06bnRoLWNoaWxkKDQpIGltZ3tcXG4gYmFja2dyb3VuZDogd2hpdGU7XFxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuIFxcbn1cXG4uZnJvbnRMb2dvIC5zdGFjay1pdGVtOm50aC1jaGlsZCg1KSBpbWd7XFxuICBib3JkZXItcmFkaXVzOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNwZWFre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uc3BlYWsgLmNvdW50cnl7XFxuICBjb2xvcjogd2hpdGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIFxcbn1cXG5cXG4uY291bnRyeSBpbWd7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuIFxcblxcbi5jcmVhdGVXb3Jre1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiA4NSU7XFxufVxcblxcblxcbi5teVdvcmt7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IGNhbGMoMzVweCArIDF2dyk7XFxufVxcblxcbi5ncmlke1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDQwcHg7ICBcXG59XFxuXFxuICBcXG5cXG5cXG4ucHJvamVjdEltZyB7XFxuICAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDphdXRvO1xcbiAgd2lkdGg6IDU1JTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDU1MHB4O1xcbn1cXG5cXG4ucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGV7XFxuICBmb250LXNpemU6IGNhbGMoMzBweCArIC42dncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnMgLnJldmlld0J1dHRvbntcXG4gIHBhZGRpbmc6IDEycHggMnB4O1xcbndpZHRoOiAxMDAlO1xcbmJvcmRlcjogMDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbmZvbnQtc2l6ZTogMThweDtcXG5mb250LWZhbWlseTogO1xcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxudHJhbnNpdGlvbjogYWxsIC40cztcXG5jdXJzb3I6IHBvaW50ZXI7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbnotaW5kZXg6IDEwO1xcbm92ZXJmbG93OiBoaWRkZW47XFxubWF4LXdpZHRoOiAzNTBweDtcXG5taW4td2lkdGg6IDI1MHB4O1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJldmlld0J1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcbn1cXG5cXG4ubGl2ZUJ1dHRvbntcXG4gIHBhZGRpbmc6IDEycHggMjJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtaW4td2lkdGg6IDI1MHB4OyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmxpdmVCdXR0b246aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5sZXR0ZXItc3BhY2luZzogNHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdEJ1dHRvbnMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCl7XFxuICAucHJvamVjdEJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDUwcHgpe1xcbiAgLmdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm15V29ya3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNjUxKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBkaXNwbGF5OiAgZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAucHJvamVjdEltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgfVxcbiAgLnByb2plY3REZXNjcmlwdGlvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAucHJvamVjdEJ1dHRvbnN7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICB9XFxufVxcblxcbi8qIENvbnRlbnQgXFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuSGVhZGVyICovXFxuXFxuXFxuXFxuXFxuLyogTWFpbiAqL1xcblxcbi5tYWluIHtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5mb250LXNpemU6IGxhcmdlcjtcXG5cXG5cXG59XFxuXFxuXFxuLypcXG5cXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5wYWRkaW5nOiAzMHB4O1xcbndpZHRoOiAxMDAlO1xcbnNzc3Nzc1xcblxcblxcbi5wcm9qZWN0VGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxufVxcblxcbi5wcm9qZWN0VGV4dHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG5pbWd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4qL1xcblxcbi8qIEZvb3RlciAqL1xcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5naXQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA2MCU7XFxuICB9XFxufVxcblxcbi8qIDk4MHB4IC8gMTZweCA9IDYxLjI1ZW0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNjEuMjVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTglO1xcbiAgfVxcbn1cXG5cXG4vKiA0NjBweCAvIDE2cHggPSAyOC43NWVtICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4Ljc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDU1JTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDI4Ljc1ZW0pe1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnNraWxsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5hYm91dE1lVGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiAgfVxcbiAgLmFib3V0TWVEaXYgLmxlZnQsXFxuICAuYWJvdXRNZURpdiAucmlnaHR7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCl7XFxuICAuYWJvdXRNZURpdiAubGVmdCxcXG4gIC5hYm91dE1lRGl2IC5yaWdodHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMTBweCl7XFxuICAgIC5za2lsbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5za2lsbHNUaXRsZXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbToycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbiAgLmZyb250TG9nb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG4gIC5zcGVha3tcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAgXFxuICB9XFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgfVxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxuICAuc3BlYWt7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDM1cHg7XFxuICB9XFxufVxcblxcbi8qXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KXtcXG4gLmFib3V0TWVEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmFib3V0TWVUaXRsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuXFxuKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDBCQUEwQjtF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aHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJmZhbWlseT1DYXJkbzp3Z2h0QDcwMCZmYW1pbHk9TGVhZ3VlK0dvdGhpYyZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmZhbWlseT1TcGVjaWFsK0VsaXRlJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdGVjdHMrRGF1Z2h0ZXImZmFtaWx5PUNhcmRvOndnaHRANzAwJmZhbWlseT1MZWFndWUrR290aGljJmZhbWlseT1TcGVjaWFsK0VsaXRlJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLWZvbnQtY29sb3Itb3JhbmdlOiByZ2IoMjU1LCAxNTIsIDApO1xcbiAgLS1mb250LWNvbG9yLWJsdWU6ICMzMmMwZjQ7XFxuICAtLWJvcmRlci1jb2xvcjogIzIyMjtcXG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIC0tZm9udC1mYW1pbHktaGVhZGVyOiBmb250LWZhbWlseTogJ0xlYWd1ZSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LWZhbWlseS1ib2R5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIC0tYmxhY2s6ICMwMDA7XFxuICAtLXdoaXRlOiAjZmZmZmZmO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYm9keSk7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgLyogICAgICAgY2FsYygxMHB4ICsgMnZtaW4pKi8gXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtOyBcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbn1cXG5cXG4jY29udGVudHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJMb2dve1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAzdncpO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBwYWRkaW5nLXRvcDogMThweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxufVxcblxcbi5oZWFkZXJMb2dvOmhvdmVye1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbm5hdntcXG4gIHdvcmQtc3BhY2luZzogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTR2aDtcXG4gIG1hcmdpbi1yaWdodDogNDBweDsgIFxcbn1cXG5cXG5uYXYgYXtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjojMDAwOyBcXG59XFxuXFxubmF2IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3Itb3JhbmdlKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmludHJvQ29udGVudHtcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XFxuICBjb2xvcjogIzAwMDtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxufVxcblxcbmgxLFxcbmgyLCBcXG4ubmFtZUludHJvIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGVhZ3VlIEdvdGhpYycsIHNhbnMtc2VyaWY7O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIFxcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4udGl0bGVJbnRyb3tcXG4gIGZvbnQtc2l6ZTogY2FsYygxMDBweCArIDJ2dyk7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4ubmFtZUludHJve1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItYmx1ZSk7XFxuICBmb250LXNpemU6IGNhbGMoNDBweCArIDJ2dyk7XFxuICBtYXJnaW4tdG9wOiAzNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi50ZXh0MXtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLW9yYW5nZSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygzcHggKyAydncpOyBcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY3JlYXRlQWJvdXRNZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG5cXG5cXG4uYWJvdXRNZURpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uYWJvdXRNZURpdiAubGVmdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDF2dyk7IFxcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgd2lkdGg6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgd2lkdGg6IDQwdnc7XFxufVxcblxcbi5hYm91dE1lVGl0bGU6aG92ZXJ7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1vcmFuZ2UpO1xcbiAgb3BhY2l0eTogLjk7XFxufVxcblxcbi5hYm91dE1lRGVzY3JpcHRpb257XFxuXFxufVxcblxcbi5za2lsbHN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG59XFxuXFxuLnNraWxsQ29udGFpbmVye1xcbiAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLnByb2R1Y3R7XFxuICBcXG59XFxuXFxuLmxldmVse1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAxdncpOyBcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIFxcbn1cXG5cXG5cXG4uZnJvbnRMb2dve1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgIFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4qL1xcbi5mcm9udExvZ286bnRoLWNoaWxkKDIpe1xcbiAgXFxufVxcblxcbi5wcm9kdWN0IGltZ3tcXG4gIHotaW5kZXg6IDEwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBcXG59XFxuLnN0YWNrLWl0ZW17XFxuICBwYWRkaW5nOiA0MHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zdGFjay1pdGVtIGg0e1xcbiAgY29sb3I6d2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5za2lsbHNUaXRsZXtcXG4gIHdpZHRoOiA0NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBjYWxjKDMwcHggKyAxdncpOyBcXG59XFxuLmZyb250TG9nbyAuc3RhY2staXRlbTpudGgtY2hpbGQoNCkgaW1ne1xcbiBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gYm9yZGVyLXJhZGl1czogMTBweDtcXG4gXFxufVxcbi5mcm9udExvZ28gLnN0YWNrLWl0ZW06bnRoLWNoaWxkKDUpIGltZ3tcXG4gIGJvcmRlci1yYWRpdXM6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3BlYWt7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5zcGVhayAuY291bnRyeXtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgXFxufVxcblxcbi5jb3VudHJ5IGltZ3tcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4gXFxuXFxuLmNyZWF0ZVdvcmt7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDg1JTtcXG59XFxuXFxuXFxuLm15V29ya3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogY2FsYygzNXB4ICsgMXZ3KTtcXG59XFxuXFxuLmdyaWR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogNDBweDsgIFxcbn1cXG5cXG4gIFxcblxcblxcbi5wcm9qZWN0SW1nIHtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OmF1dG87XFxuICB3aWR0aDogNTUlO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWluLWhlaWdodDogNTUwcHg7XFxufVxcblxcbi5wcm9qZWN0RGVzY3JpcHRpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIFxcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLnByb2plY3RUaXRsZXtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMHB4ICsgLjZ2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgXFxufVxcblxcbi5wcm9qZWN0QnV0dG9ucyAucmV2aWV3QnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAycHg7XFxud2lkdGg6IDEwMCU7XFxuYm9yZGVyOiAwO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxuZm9udC1zaXplOiAxOHB4O1xcbmZvbnQtZmFtaWx5OiA7XFxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG50cmFuc2l0aW9uOiBhbGwgLjRzO1xcbmN1cnNvcjogcG9pbnRlcjtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxuei1pbmRleDogMTA7XFxub3ZlcmZsb3c6IGhpZGRlbjtcXG5tYXgtd2lkdGg6IDM1MHB4O1xcbm1pbi13aWR0aDogMjUwcHg7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmV2aWV3QnV0dG9uOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcbi5saXZlQnV0dG9ue1xcbiAgcGFkZGluZzogMTJweCAyMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMjUwcHg7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4ubGl2ZUJ1dHRvbjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5jb2xvcjogdmFyKC0td2hpdGUpO1xcbmxldHRlci1zcGFjaW5nOiA0cHg7XFxufVxcblxcblxcbi5wcm9qZWN0QnV0dG9ucyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KXtcXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NTBweCl7XFxuICAuZ3JpZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAubXlXb3Jre1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC42NTEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5wcm9qZWN0SW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICB9XFxuICAucHJvamVjdERlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5wcm9qZWN0QnV0dG9uc3tcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG4gIH1cXG59XFxuXFxuLyogQ29udGVudCBcXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5IZWFkZXIgKi9cXG5cXG5cXG5cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbmZvbnQtc2l6ZTogbGFyZ2VyO1xcblxcblxcbn1cXG5cXG5cXG4vKlxcblxcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbnBhZGRpbmc6IDMwcHg7XFxud2lkdGg6IDEwMCU7XFxuc3Nzc3NzXFxuXFxuXFxuLnByb2plY3RUaXRsZXtcXG4gICAgZm9udC1zaXplOiAxMDBweDtcXG59XFxuXFxuLnByb2plY3RUZXh0e1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbmltZ3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiovXFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLmdpdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDYwJTtcXG4gIH1cXG59XFxuXFxuLyogOTgwcHggLyAxNnB4ID0gNjEuMjVlbSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA2MS4yNWVtKSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiA1OCU7XFxuICB9XFxufVxcblxcbi8qIDQ2MHB4IC8gMTZweCA9IDI4Ljc1ZW0gKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNTUlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMjguNzVlbSl7XFxuICAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuc2tpbGxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmFib3V0TWVUaXRsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxuICB9XFxuICAuYWJvdXRNZURpdiAubGVmdCxcXG4gIC5hYm91dE1lRGl2IC5yaWdodHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KXtcXG4gIC5hYm91dE1lRGl2IC5sZWZ0LFxcbiAgLmFib3V0TWVEaXYgLnJpZ2h0e1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTMxMHB4KXtcXG4gICAgLnNraWxsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLnNraWxsc1RpdGxle1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItYm90dG9tOjJweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjY1MSk7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuICAuZnJvbnRMb2dve1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbiAgLnNwZWFre1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7ICBcXG4gIH1cXG4gIC5hYm91dE1lVGl0bGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuICAuc3BlYWt7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcXG4gIC5zcGVha3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMzVweDtcXG4gIH1cXG59XFxuXFxuLypcXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTMwcHgpe1xcbiAuYWJvdXRNZURpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuYWJvdXRNZVRpdGxle1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4qL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZS5qc1wiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6WyJhYm91dFNlY3Rpb24iLCJjcmVhdGVBYm91dE1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWJvdXRNZURpdiIsImFwcGVuZENoaWxkIiwibGVmdCIsInJpZ2h0IiwiYWJvdXRNZVRpdGxlIiwidGV4dENvbnRlbnQiLCJhYm91dE1lRGVzY3JpcHRpb24iLCJza2lsbHNEaXYiLCJza2lsbENvbnRhaW5lciIsInN0YWNrRnJvbnQiLCJzdGFja0Zyb250VGl0bGUiLCJmcm9udExvZ28iLCJjcmVhdGVTdGFja0l0ZW0iLCJzdGFja1RlY2hub2xvZ3kiLCJzdGFja1RlY2hub2xvZ3lUaXRsZSIsInRlY2hMb2dvIiwic2tpbGxzVGl0bGUiLCJzcGVha0RpdiIsImVuZ2xpc2hEaXYiLCJlbmdsaXNoSW1nIiwic3JjIiwiYWx0Iiwicm9tYW5pYW5EaXYiLCJyb21hbmlhbkltZyIsImRlRGl2IiwiZGVJbWciLCJuYW1lIiwic3RhY2tJdGVtIiwic3RhY2tOYW1lIiwic3RhY2tJbWFnZSIsInRvTG93ZXJDYXNlIiwiY29udGFjdFNlY3Rpb24iLCJjb250YWN0IiwiY29udGFjdFRpdGxlIiwiY29udGFjdENvbnRlbnQiLCJjb250YWN0VGV4dCIsImNvbnRhY3RMaXN0IiwibGlzdFRpbGUiLCJsaXN0U2VjVGl0bGUiLCJsaXN0SWNvbnMiLCJsaXN0SWNvbnNUaXRsZSIsImxpc3RHaXRJY29uIiwiZ2l0TGluayIsImhyZWYiLCJ0YXJnZXQiLCJsaXN0SW4iLCJpbkxvZ28iLCJjcmVhdGVJbnRybyIsImludHJvQ29udGVudCIsInRpdGxlSW50cm8iLCJuYW1lSW50cm8iLCJ0ZXh0MSIsInN0eWxlIiwid29ya1NlY3Rpb24iLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJoZWFkZXJMb2dvIiwiY3JlYXRlTmF2IiwibmF2IiwiYWJvdXRNZW51Iiwid29ya01lbnUiLCJjb250YWN0TWVudSIsImNyZWF0ZU1haW4iLCJtYWluIiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViTGluayIsImdpdGh1Ykljb24iLCJpbml0aWFsaXplV2Vic2l0ZSIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZVdvcmsiLCJteVdvcmsiLCJjcmVhdGVXb3JrSXRlbSIsImRlc2NyaXB0aW9uIiwibGlua0NvZGUiLCJsaW5rTGl2ZSIsInByb2plY3RHcmlkIiwicHJvamVjdEltZyIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RUaXRsZSIsInByb2plY3RUZXh0IiwicHJvamVjdEJ1dHRvbnMiLCJyZXZpZXdCdXR0b24iLCJsaXZlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==