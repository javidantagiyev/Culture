console.log("Azərbaycan Mədəniyyəti və Tarixi saytı aktivdir.");

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 300;

        if(top >= offset){
            section.style.transition = "0.5s";
            section.style.transform = "translateY(0px)";
            section.style.opacity = "1";
        }
    });
});

sections.forEach(section => {
    section.style.transform = "translateY(50px)";
    section.style.opacity = "0";
});
