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
            "vvvvvvvvvvvvvvvvvvv",
            "https://github.com/cigmaian/restaurant-page-online",
            "https://cigmaian.github.io/restaurant-page-online/"
        )
    );
    
    createWork.appendChild(
        createWorkItem(
            "Etch-a-Sketch",
            " ",
            "https://github.com/cigmaian/Etch-a-Sketch",
            "https://cigmaian.github.io/Etch-a-Sketch/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Library App",
            "",
            "https://github.com/cigmaian/Project-Library",
            "https://cigmaian.github.io/Project-Library/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Online Calculator",
            "",
            "https://github.com/cigmaian/Calculator",
            "https://cigmaian.github.io/Calculator/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Sign-up-Form",
            "",
            "https://github.com/cigmaian/Sign-up-Form",
            "https://cigmaian.github.io/Sign-up-Form/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Gun-Farmer-Bear",
            "",
            "https://github.com/cigmaian/GUN-FARMER-BEAR",
            "https://cigmaian.github.io/GUN-FARMER-BEAR/"
        )
    );

    createWork.appendChild(
        createWorkItem(
            "Tic-Tac-Toe",
            "",
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
    reviewButton.textContent = "{REVIEW THE CODE}";
   
    const liveButton = document.createElement("a");
    liveButton.classList.add("liveButton");
    liveButton.href = linkLive;
    liveButton.textContent = "[SEE IT LIVE]";

    projectButtons.appendChild(liveButton);
    projectButtons.appendChild(reviewButton);


    projectDescription.appendChild(projectText);
    projectDescription.appendChild(projectTitle);
    
    projectGrid.appendChild(projectImg);
    projectGrid.appendChild(projectDescription);
    projectGrid.appendChild(projectButtons);

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