function aboutSection(){

    const createAboutMe = document.createElement('section');
    createAboutMe.setAttribute("id", "about");
    createAboutMe.classList.add("createAboutMe");

    const aboutMeDiv = document.createElement('div');
    aboutMeDiv.classList.add("aboutMeDiv");
    
    createAboutMe.appendChild(aboutMeDiv);

    
    const left = document.createElement('div');
    left.classList.add('left');
    const right = document.createElement('div');
    right.classList.add('right');
    aboutMeDiv.appendChild(left);
    aboutMeDiv.appendChild(right);

    const aboutMeTitle = document.createElement('h2');
    aboutMeTitle.classList.add("aboutMeTitle");
    aboutMeTitle.textContent = "[0]aboutMe";
    left.appendChild(aboutMeTitle);

    const aboutMeDescription = document.createElement('p');
    aboutMeDescription.classList.add("aboutMeDescription");
    aboutMeDescription.textContent = "Hi there! My name is Luis, and I enjoy creating content for the internet. My interest in web programming began when I was 10 years old and created my first website. Fast forward to the present,"
    right.appendChild(aboutMeDescription);

    const skillsDiv = document.createElement('div');
    skillsDiv.classList.add("skills");
    createAboutMe.appendChild(skillsDiv);

    const skillsTitle = document.createElement('h2');
    skillsTitle.classList.add("skillsTitle");
    skillsTitle.textContent = "Tools and Skills";
    skillsDiv.appendChild(skillsTitle);

    const skillContainer = document.createElement("div"); // pricing
    skillContainer.classList.add("skillContainer"); 
    skillsDiv.appendChild(skillContainer);

    const stackFront = document.createElement("div");
    stackFront.classList.add("product");
    skillContainer.appendChild(stackFront);    

    const stackFrontTitle = document.createElement("h3");
    stackFrontTitle.classList.add("level");
    stackFrontTitle.textContent = "Front-end";
    stackFront.appendChild(stackFrontTitle);

    const frontLogo = document.createElement("div");
    frontLogo.classList.add("frontLogo");
    frontLogo.appendChild(createStackItem("HTML5"));
    frontLogo.appendChild(createStackItem("CSS3"));
    frontLogo.appendChild(createStackItem("JavaScript"));
    
    stackFront.appendChild(frontLogo);

    const stackTechnology = document.createElement("div");
    stackTechnology.classList.add("product");
    skillContainer.appendChild(stackTechnology);

    const stackTechnologyTitle = document.createElement("h3");
    stackTechnologyTitle.classList.add("level");
    stackTechnologyTitle.textContent = "Technology";
    stackFront.appendChild(stackTechnologyTitle);

    const techLogo = document.createElement("div");
    techLogo.classList.add("frontLogo");
    techLogo.appendChild(createStackItem("Git"));
    techLogo.appendChild(createStackItem("WebPack"));
    techLogo.appendChild(createStackItem("Linux"));
    techLogo.appendChild(createStackItem("GitHub"));
    techLogo.appendChild(createStackItem("npm"));

    stackFront.appendChild(techLogo);

    const speakDiv = document.createElement('div');
    speakDiv.classList.add("speak");
    createAboutMe.appendChild(speakDiv);

    const englishDiv = document.createElement('div');
    englishDiv.classList.add("country");
    englishDiv.textContent = "I speak English";
    speakDiv.appendChild(englishDiv);

    const englishImg = document.createElement('img');
    englishImg.classList.add('language');
    englishImg.src = `/img/language/uk.svg`;
    englishImg.alt = "english";
    englishDiv.appendChild(englishImg);

    const romanianDiv = document.createElement('div');
    romanianDiv.classList.add("country");
    romanianDiv.textContent = "Eu vorbesc românește";
    speakDiv.appendChild(romanianDiv);

    const romanianImg = document.createElement('img');
    romanianImg.classList.add('language');
    romanianImg.src =   `/img/language/ro.png`;
    romanianImg.alt = "ro";
    romanianDiv.appendChild(romanianImg);


    const deDiv = document.createElement('div');
    deDiv.classList.add("country");
    deDiv.textContent = "Ich spreche deutsch";
    speakDiv.appendChild(deDiv);

    const deImg = document.createElement('img');
    deImg.classList.add('language');
    deImg.src = `/img/language/de.png`;
    deImg.alt = "de";
    deDiv.appendChild(deImg);

    return createAboutMe;
}

function createStackItem(name){
    const stackItem = document.createElement("div");
    stackItem.classList.add("stack-item");
    
    const stackName = document.createElement("h4");
    stackName.textContent = name;

    const stackImage = document.createElement("img");
    stackImage.src = `/img/stack/${name.toLowerCase()}.png`;
    stackImage.alt = `${name}`;
    stackImage.classList.add("stack");

    stackItem.appendChild(stackImage);
    stackItem.appendChild(stackName);
    
    return stackItem;
}


export default aboutSection;

/*


   

   
 
*/