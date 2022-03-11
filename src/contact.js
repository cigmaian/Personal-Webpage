function contactSection(){

    const contact = document.createElement("section");
    contact.setAttribute("id", "contact");
    contact.classList.add("contact");
    
    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("contact");
    contactTitle.textContent = "[2]contact";
    
    contact.appendChild(contactTitle);

    const contactContent = document.createElement("div");
    contactContent.classList.add("contactContent");
    contact.appendChild(contactContent);

    const contactText = document.createElement("p");
    contactText.classList.add("contactText");
    contactText.textContent = "I'm currently looking for work as a full-stack developer. Please do not hesitate to contact me if you have any questions about additional credentials or the design of this website. Please contact me if you are a recruiter looking for a hardworking individual."

    contactContent.appendChild(contactText);



    const contactList = document.createElement("div");
    contactList.classList.add("contactList");
    contactContent.appendChild(contactList);
    
    const listTile = document.createElement("p");
    listTile.classList.add("listTitle");
    listTile.textContent = "You can write me an e-mail at: cigmaian1@gmail.com";
    contactList.appendChild(listTile);

    const listSecTitle = document.createElement("p");
    listSecTitle.classList.add("listSecTitle");
    listSecTitle.textContent = "OR";
    contactList.appendChild(listSecTitle);

    const listIcons = document.createElement("div");
    listIcons.classList.add("listIcons");
    contactList.appendChild(listIcons);

    const listIconsTitle = document.createElement("p");
    listIconsTitle.classList.add("listIconsTitle");
    listIconsTitle.textContent = "Reach me through social media";
    listIcons.appendChild(listIconsTitle);

    const listGitIcon = document.createElement("img");
    listGitIcon.classList.add("listGitIcon");
    listGitIcon.src = "img/stack/github.png";
    listGitIcon.alt = "git log";
    

    const gitLink = document.createElement("a");
    gitLink.href = "https://github.com/cigmaian";

    gitLink.appendChild(listGitIcon);
    listIcons.appendChild(gitLink);


    const listIn = document.createElement("img");
    listIn.classList.add("listIn");
    listIn.src = "img/stack/li.jpg";
    listIn.alt = "linkedIn logo";

    const inLogo = document.createElement("a");
    inLogo.href = "https://ro.linkedin.com/in/andrei-cigmaian/ro";

    inLogo.appendChild(listIn);
    listIcons.appendChild(inLogo);

    return contact;
}


export default contactSection;