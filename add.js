

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

    signInButton.id = "signButton";


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
    textDiv2.textContent = "if you don’t an account   ";

    const textDiv21 = document.createElement("div");
    textDiv21.classList.add("div-21");
    textDiv21.textContent = "you can ";


    const textDiv3 = document.createElement("div");
    textDiv3.classList.add("div-3");
    textDiv3.textContent = " Register here!";

    // Inside the createMainPart function, after creating the "textDiv3" element


    // Inside the createMainPart function, after creating textDiv3
    const registerLink = document.createElement("a");
    registerLink.href = "https://www.example.com/register"; // Replace with your actual registration link
    registerLink.textContent = " Register here!";

    textDiv3.textContent = ""; // Clear the text content of textDiv3
    textDiv3.appendChild(registerLink); // Append the anchor to textDiv3


    // image div
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    const manImage = document.createElement("img");
    manImage.src = "images/man.png";
    imageDiv.appendChild(manImage);


    //    registration div and form

    const registrationDiv = document.createElement("div");
    registrationDiv.classList.add("registration-div");

    const registrationForm = document.createElement("form");
    registrationForm.classList.add("registration-form");

    // Email input
    const emailInput = document.createElement("input");
    emailInput.id = "emailInput1";
    emailInput.type = "text";
    emailInput.placeholder = "Enter Email";
    registrationForm.appendChild(emailInput);

    // Small image for email input
    const emailImage = document.createElement("img");
    emailImage.src = "images/img1.png";
    emailImage.id = "img1Id";
    emailImage.classList.add("small-image");
    registrationForm.appendChild(emailImage);


    // Password input
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "passwordInput1";
    passwordInput.placeholder = "••••••••";
    registrationForm.appendChild(passwordInput);

    const passwordImage = document.createElement("img");
    passwordImage.src = "images/img2.png";
    passwordImage.id = "img2Id";
    passwordImage.classList.add("small-image");
    registrationForm.appendChild(passwordImage);


    const recoverPasswordText = document.createElement("span");
    recoverPasswordText.id = "spanId";

    registrationForm.appendChild(recoverPasswordText);

    // Sign In button
    const signInButton = document.createElement("button");
    signInButton.textContent = "Sign In";
    registrationForm.appendChild(signInButton);

    // Horizontal lines with text in the middle
    const horizontalLine1 = document.createElement("hr");
    const orText = document.createElement("span");
    orText.textContent = "Or continue with";
    const horizontalLine2 = document.createElement("hr");

    const orContainer = document.createElement("div");
    orContainer.classList.add("or-container");
    orContainer.appendChild(horizontalLine1);
    orContainer.appendChild(orText);
    orContainer.appendChild(horizontalLine2);
    registrationForm.appendChild(orContainer);


    // Three  icons
    const crossedIcons = document.createElement("div");
    crossedIcons.classList.add("crossed-icons");


    //icon-links

    const iconLinks = [
        { src: "images/Google1.png", link: "https://www.google.com" },
        { src: "images/Apple3.png", link: "https://www.apple.com" },
        { src: "images/Facebook.png", link: "#" }
    ];

    iconLinks.forEach(iconInfo => {
        const iconLink = document.createElement("a");
        iconLink.href = iconInfo.link;

        const icon = document.createElement("img");
        icon.src = iconInfo.src;

        iconLink.appendChild(icon);
        crossedIcons.appendChild(iconLink);
    });

    registrationForm.appendChild(crossedIcons);


    registrationForm.appendChild(crossedIcons);

    mainPart.appendChild(textDiv);
    textDiv.appendChild(textDiv1);
    textDiv.appendChild(textDiv2);
    textDiv.appendChild(textDiv21);
    textDiv21.appendChild(textDiv3);

    mainPart.appendChild(imageDiv);
    mainPart.appendChild(registrationDiv);

    registrationDiv.appendChild(registrationForm);

    return mainPart;
}

//validacion  page non refresh

function validation(event) {


    recoverPasswordText.id = "spanId";
    const emailInput = document.getElementById("emailInput1");

    const passwordInput = document.getElementById("passwordInput1");

    if (emailInput.value === "") {

        window.alert("Please enter your email.");
        event.preventDefault(); // Prevent form submission and page refresh
        return false;
    }

    if (passwordInput.value === "") {

        event.preventDefault(); // Prevent form submission and page refresh
        return false;
    }

}

//  

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    body.style.background = "url(images/Background1.png) no-repeat";

    //light mode
    const lightModeButton = document.getElementById("light-button");
    lightModeButton.addEventListener("click", function () {

        const leftPartLinks = document.querySelectorAll(".left-part a");
        leftPartLinks.forEach(link => {
            link.style.color = "#000";
        });

        const mainPartDivs = document.querySelectorAll(".main-part div");
        mainPartDivs.forEach(div => {
            div.style.color = "#000";
        });
        const rightPartFirstChild = document.querySelector(".right-part > :first-child");
        rightPartFirstChild.style.color = "black ";

        body.style.background = "url(images/Background1.png) no-repeat";
        document.body.style.backgroundImage = "url(images/Background1.png)";
        body.classList.remove("dark-mode");

        const registrationForm = document.querySelector(".registration-form");
        registrationForm.

            addEventListener("submit", validation);

    });


    //black mode
    const darkModeButton = document.getElementById("dark-button");
    darkModeButton.addEventListener("click", function () {

        const leftPartLinks = document.querySelectorAll(".left-part a");
        leftPartLinks.forEach(link => {
            link.style.color = "#fff";
        });

        const mainPartDivs = document.querySelectorAll(".main-part div");
        mainPartDivs.forEach(div => {
            div.style.color = "#fff";
        });

        const rightPartFirstChild = document.querySelector(".right-part > :first-child");
        rightPartFirstChild.style.color = "white";

        body.style.backgroundColor = "black";
        body.classList.add("dark-mode");
    });


    // click email 


    //

    const header = createHeader();
    const mainPart = createMainPart();
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(header);
    card.appendChild(mainPart);
    body.appendChild(card);



    const emailImage = document.getElementById("img1Id");
    emailImage.addEventListener("click", function () {
        const emailInput = document.getElementById("emailInput1");
        emailInput.value = "";
    });

    // Click password image

    const passwordImage = document.getElementById("img2Id");
    passwordImage.addEventListener('click', () => {
        const passwordInput = document.getElementById('passwordInput1');
        const hiddenPassword = passwordInput.type === 'password';
        const type = hiddenPassword ? 'text' : 'password';
        document.getElementById("spanId").innerHTML = "Recover Password?";
        passwordInput.type = type;
    });

});








