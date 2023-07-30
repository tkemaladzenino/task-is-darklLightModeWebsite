

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

    // text-div

    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    textDiv.textContent = "Sign In toRecharge Direct";


    const textDiv1 = document.createElement("div");
    textDiv1.classList.add("text-div");
    textDiv1.textContent = "if you don’t an account you can ";

    const textDiv1P = document.createElement("div");
    textDiv1P.classList.add("text-div1");
    textDiv1P.textContent = " Register here!";





    // image div
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");



    const registrationDiv = document.createElement("div");
    registrationDiv.classList.add("registration-div");



    mainPart.appendChild(textDiv);
    mainPart.appendChild(textDiv1);
    textDiv1.appendChild(textDiv1P);





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






