

function createHeader() {

    const header = document.createElement("header");
    //left-part 
    const leftPart = document.createElement("div");

    leftPart.classList.add("left-part");

    const links = ["Home", "About", "Blog", "Pages", "Contact"];
    links.forEach(linkText => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = linkText;
        leftPart.appendChild(link);
    });


    // right-part
    const rightPart = document.createElement("div");
    rightPart.classList.add("right-part");

    const languageDropdown = document.createElement("select");
    const languages = ["English", "Georgian", "German"];
    languages.forEach(language => {
        const option = document.createElement("option");
        option.value = language.toLowerCase();
        option.textContent = language;
        languageDropdown.appendChild(option);
    });

    languageDropdown.value = "english";

    const signInButton = document.createElement("button");
    signInButton.textContent = "Sign In";

    const registerButton = document.createElement("button");
    registerButton.textContent = "Register";



    header.appendChild(leftPart);
    rightPart.appendChild(languageDropdown);
    rightPart.appendChild(signInButton);
    rightPart.appendChild(registerButton);
    header.appendChild(rightPart);



    return header;
}

// end header
//main-part

function createMainPart() {

    const mainPart = document.createElement("div");
    mainPart.classList.add("main-part");

    const textdiviv1 = document.createElement("div");
    mainPart.classList.add("main-part");


    // text-div

    const textDivMain = document.createElement("div");
    textDivMain.classList.add("main-part");

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");



    const textDiv1 = document.createElement("div");
    textDiv1.classList.add("div-1");
    textDiv1.textContent = "Sign In to  Recharge Direct";

    const textDiv2 = document.createElement("div");
    textDiv2.classList.add("div-2");
    textDiv2.textContent = "if you don’t an account  you can ";

    const textDiv3 = document.createElement("div");
    textDiv3.classList.add("div-3");
    textDiv3.textContent = " Register here!";



    // image div
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    const manImage = document.createElement("img");
    manImage.src = "images/man.png";
    imageDiv.appendChild(manImage);



    const registrationDiv = document.createElement("div");
    registrationDiv.classList.add("registration-div");



    mainPart.appendChild(textDiv);
    textDiv.appendChild(textDiv1);
    textDiv.appendChild(textDiv2);
    textDiv2.appendChild(textDiv3);






    mainPart.appendChild(imageDiv);
    mainPart.appendChild(registrationDiv);

    return mainPart;
}





















document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const header = createHeader();
    const mainPart = createMainPart();


    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(header);
    card.appendChild(mainPart);
    body.appendChild(card);
});






