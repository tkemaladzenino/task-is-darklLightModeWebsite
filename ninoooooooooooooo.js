

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


    //    registration div and form

    const registrationDiv = document.createElement("div");
    registrationDiv.classList.add("registration-div");

    const registrationForm = document.createElement("form");
    registrationForm.classList.add("registration-form");

    // Email input
    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.placeholder = "Enter Email";
    registrationForm.appendChild(emailInput);

    // Small image for email input
    const emailImage = document.createElement("img");
    emailImage.src = "images/img1.png";
    emailImage.classList.add("small-image");
    registrationForm.appendChild(emailImage);


    // Password input
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "••••••••";
    registrationForm.appendChild(passwordInput);

    const passwordImage = document.createElement("img");
    passwordImage.src = "images/img2.png";
    passwordImage.classList.add("small-image");
    registrationForm.appendChild(passwordImage);


    const recoverPasswordText = document.createElement("span");
    recoverPasswordText.textContent = "Recover Password?";
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


    const icon1 = document.createElement("img");
    icon1.src = "images/Google1.png";
    crossedIcons.appendChild(icon1);

    const icon2iv = document.createComment("div");

    const icon2 = document.createElement("img");
    icon2.src = "images/Apple3.png";
    crossedIcons.appendChild(icon2);

    const icon3 = document.createElement("img");
    icon3.src = "images/Facebook.png";
    crossedIcons.appendChild(icon3);

    registrationForm.appendChild(crossedIcons);

    mainPart.appendChild(textDiv);
    textDiv.appendChild(textDiv1);
    textDiv.appendChild(textDiv2);
    textDiv2.appendChild(textDiv3);

    mainPart.appendChild(imageDiv);
    mainPart.appendChild(registrationDiv);

    registrationDiv.appendChild(registrationForm);

    return mainPart;
}


function validation(event) {


    const emailInput = document.querySelector("emailInput");


    const passwordInput = document.querySelector("passwordInput");
    const img1 = document.querySelector("img[src='images/img1.png']");


    // Small image for email input


    if (emailInput.value === "") {
        img1.style.display = "none";
        window.alert("Please enter your email.");
        event.preventDefault(); // Prevent form submission and page refresh
        return false;
    } else {
        img1.style.display = "inline";

    };


    if (passwordInput.value === "") {
        passwordImage.style.display = "block";
        wondow.alert("Please enter your password.");
        event.preventDefault(); // Prevent form submission and page refresh
        return false;
    } else {
        passwordImageImage.style.display = "none";
    }
};





// Handle IMG1 click (clear email input)

// Handle IMG2 click (toggle password visibility)




document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
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

        body.style.backgroundColor = "#f1fbfc";
        body.classList.remove("dark-mode");


        const registrationForm = document.querySelector(".registration-form");
        registrationForm.

            addEventListener("submit", validation);

    });



    const img1 = document.querySelector("img[src='images/img1.png']");
    img1.addEventListener("click", function () {

        const emailInput = document.getElementById("emailInput");

        if (emailInput.value === "") {
            img1.style.display = "none"; // Hide img1 when IMG1 is clicked and email input is empty
        } else {
            img1.style.display = "inline"; // Show img1 when IMG1 is clicked and email input has data
        }
    });


    document.getElementById('img2Id').addEventListener('click', () => {
        let passwordInput = document.getElementById('passwordInput1')
        let hiddenPassword = passwordInput.type == 'password';
        let type = 'password';

        if (hiddenPassword) {
            type = 'text';
        }

        passwordInput.type = type;
    });


    //1111111




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

    //

    const header = createHeader();
    const mainPart = createMainPart();

    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(header);
    card.appendChild(mainPart);
    body.appendChild(card);



});








