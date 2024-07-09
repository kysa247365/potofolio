const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect.height;
console.log(headerHeight);
document.addEventListener("scroll", () =>{
    if (window.scrollY > 200) { // 스크롤 높이가 50px 이상일 때
        header.classList.add("black");
    } else {
        header.classList.remove("balck");
    }
    console.log("hello");

    console.log(window.scrollY);

    
    
});

const home = document.querySelector("#home");
const homeHeight = header.getBoundingClientRect.height;
document.addEventListener("scroll", () =>{
    home.style.opacity = 1 - window.scrollY / homeHeight;
    console.log(1 - window.scrollY / homeHeight);

    
});

const arrow = document.querySelector(".arrow-up");
document.addEventListener("scroll", () =>{
    if(window.scrollY>homeHeight / 2)
        arrow.style.opacity = 0;
    else
        arrow.style.opacity = 1;
});