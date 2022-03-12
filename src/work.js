function workSection(){

    const createWork = document.createElement("section");
    createWork.setAttribute("id", "mywork");
    createWork.classList.add("createWork");

    const myWork = document.createElement('h2');
    myWork.classList.add("myWork");
    myWork.textContent = "[1]myWork";

    createWork.appendChild(myWork);

    createWork.appendChild(
        createWorkItem(
            "Restaurant Page",
            "Restaurant Web Page build with HTML5, CSS3, JavaScrip, WebPack & Git. The site consist of home page, menu page, contact page The aim of the project was to make a functional multi page Restaurant website using WebPack to bundle files and Javscript DOM manipulation.",
            "https://github.com/cigmaian/restaurant-page-online",
            "https://cigmaian.github.io/restaurant-page-online/"
        )
    );
    
    createWork.appendChild(
        createWorkItem(
            "Etch-a-Sketch",
            " The project was build with HTML5, CSS3, JavaScrip. The idea behind the app was to recreate the good old childhood draw board. App feaures: Select grid size, Random color button option, Custom color Selector, Canvas option.",
            "https://github.com/cigmaian/Etch-a-Sketch",
            "https://cigmaian.github.io/Etch-a-Sketch/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Library App",
            "A small Library app, created with HTML5, CSS3 and JavaScript. The data is stored in localStorage. Features: Search bar implementation, You can delete any of your books, Can update whether you've read any of the books in your library",
            "https://github.com/cigmaian/Project-Library",
            "https://cigmaian.github.io/Project-Library/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Online Calculator",
            "An online calculator with basic arithmetic operations, application developed using HTML5, CSS3, JavaScrip. Features: Keyboard inputs are supported for numbers, opertaors and other options, Comes with options to clear/delete a single input OR clear the whole display.",
            "https://github.com/cigmaian/Calculator",
            "https://cigmaian.github.io/Calculator/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Sign-up-Form",
            "A sing-up form built using HTML5, CSS3 and JavaScript. Features: Dark mode, Hover effect on logo, buttons and log in.",
            "https://github.com/cigmaian/Sign-up-Form",
            "https://cigmaian.github.io/Sign-up-Form/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Gun-Farmer-Bear",
            "This is my first game developed using HTML5, CSS3 and JavaScript. Check GitHub for more in depth details of the development stages.",
            "https://github.com/cigmaian/GUN-FARMER-BEAR",
            "https://cigmaian.github.io/GUN-FARMER-BEAR/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Tic-Tac-Toe",
            "The famouse Tic Tac Toe game made with HTML5, CSS3 and JavaScript! I used this project to practice simple algorithms and using event listeners. Features: Two player mode, Checks for a winner or if there is a tie.",
            "https://github.com/cigmaian/Tic-Tac-Toe",
            "https://cigmaian.github.io/Tic-Tac-Toe/"
        )
    );

    return createWork       
  
}

function createWorkItem(name, description, linkCode, linkLive) {
    const projectGrid = document.createElement("div");
    projectGrid.classList.add("grid"); //product landing page 48 html

    const projectImg = document.createElement("img");
    projectImg.classList.add("projectImg");
    projectImg.src =`./img/projects/${name.toLowerCase()}.png`;
    projectImg.alt = `${name}`;
    
    const projectDescription = document.createElement("div");
    projectDescription.classList.add("projectDescription"); 
    
    const projectTitle = document.createElement("h6");
    projectTitle.classList.add("projectTitle");
    projectTitle.textContent = name;

    const projectText = document.createElement("p");
    projectText.classList.add("projectText");
    projectText.textContent = description;

    const projectButtons = document.createElement("div");
    projectButtons.classList.add("projectButtons");
    
    const reviewButton = document.createElement("a");
    reviewButton.classList.add("reviewButton");
    reviewButton.href = linkCode;
    reviewButton.target = "_blank";
    reviewButton.textContent = "{REVIEW THE CODE}";
   
    const liveButton = document.createElement("a");
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

export default workSection;


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