
function createIntro(){
   
    const introContent = document.createElement('div');
    introContent.classList.add('introContent');

    const titleIntro = document.createElement('h1');
    titleIntro.classList.add('titleIntro');
    titleIntro.textContent = "Hello,";
    introContent.appendChild(titleIntro);


    const nameIntro = document.createElement('p');
    nameIntro.classList.add('nameIntro');
    nameIntro.textContent = "I'm Cigmaian Andrei.";
    introContent.appendChild(nameIntro);

    const text1 = document.createElement('p');
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

export default createIntro;




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

