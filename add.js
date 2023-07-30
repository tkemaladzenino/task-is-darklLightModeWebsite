




function createHeader() {

    const header = document.createElement("header");
    //left part 
    const leftPart = document.createElement("div");
    leftPart.classList.add("left-part");

    const links = ["Home", "About", "Blog", "Pages", "Contact"];
    links.forEach(linkText => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = linkText;
        leftPart.appendChild(link);
    });

    header.appendChild(leftPart);
    return header;
}


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    const header = createHeader();
    body.appendChild(header);

    const mainPart = document.createElement("main");
    mainPart.classList.add("main-part");

    body.appendChild(mainPart);
});



