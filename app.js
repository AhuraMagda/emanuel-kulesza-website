
const emanMainPhoto = document.getElementById("eman-main");
const emanMainShadow = document.getElementById("eman-shadow");
const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav ul a")
const magic = document.querySelector(".magic")
const nav = document.querySelector("nav")
const courseButton = document.querySelector("#btn-course")
const courseMessage = document.querySelector(".course p")


// intro observer - move photo, animate text
const changePositionMainPhoto = () => {
    emanMainPhoto.style.right = "80px";
}

const options = {
    root: null,
    treshold: 1,
    rootMargin: "-100px"
}

const introPhotoObserver = new IntersectionObserver(function(entries, introPhotoObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(changePositionMainPhoto, 500);
            magic.style.animation = "background-pan 3s linear";
        } else {
            emanMainPhoto.style.right = "40px";
            magic.style.animation = "none";
        }
    })
}, options)

introPhotoObserver.observe(header)


// instagram observer - change to hamburger
const instagramSection = document.querySelector(".instagram")
const logo = document.querySelector(".logo")

const instaObserverOptions = {
    root: null,
    treshold: 1,
    rootMargin: "-100px"
}

const instagramObserver = new IntersectionObserver(function(entries, instagramObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            logo.style.display = "none";
            burgerIcon.classList.add('hamburger-active')
            nav.classList.add("nav-active")
        } else {
            logo.style.display = "block";   
            burgerIcon.classList.remove('hamburger-active')
            nav.classList.remove("nav-active")
        }
    })
}, instaObserverOptions)

instagramObserver.observe(instagramSection)


// hamburger mobile

const burgerIcon = document.querySelector(".hamburger")
const mobileNav = document.querySelector("nav ul");
const hamburgerTopBun = document.querySelector(".top-bun")
const hamburgerBottomBun = document.querySelector(".bottom-bun")
const hamburgerMeat = document.querySelector(".meat")



burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    hamburgerTopBun.classList.toggle("hamburger--top-bun_checked")
    hamburgerBottomBun.classList.toggle("hamburger--bottom-bun_checked")
    hamburgerMeat.classList.toggle("hamburger--meat_checked")
    burgerIcon.classList.toggle(".hamburger_checked")
})


// preloader
const loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})


// nav hidding after click

navLinks.forEach(link=>{link.addEventListener("click", ()=>{
    mobileNav.classList.remove('active');
    hamburgerTopBun.classList.toggle("hamburger--top-bun_checked")
    hamburgerBottomBun.classList.toggle("hamburger--bottom-bun_checked")
    hamburgerMeat.classList.toggle("hamburger--meat_checked")
    burgerIcon.classList.toggle(".hamburger_checked")
})})


// observe dark background

const newsletterSection = document.querySelector(".newsletter");
const contactSection = document.querySelector(".contact");

const backgroundObserverOptions = {
    root: null,
    treshold: 0,
    rootMargin: "-200px"
}

const backgroundObserver = new IntersectionObserver(function(entries, backgroundObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navLinks.forEach(link=>{link.style.color = "white"})
        } else {
            navLinks.forEach(link=>{link.style.color = "black"})
        }
    })
}, backgroundObserverOptions)

backgroundObserver.observe(newsletterSection)
backgroundObserver.observe(header)


// change description in course part after selecting the course

let courseTitle = document.querySelector("#course-form--type");
const courseDes1 = document.querySelector("#course-des-1");
const courseDes2 = document.querySelector("#course-des-2");
const courseDes3 = document.querySelector("#course-des-3");
const courseDes4 = document.querySelector("#course-des-4");
const courseDes5 = document.querySelector("#course-des-5");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");

let activeDes = courseDes1;

const changeDescription = () => {
    courseShowDesBut.style.display = "none";
    if(courseTitle.value === "Liderowanie i budowanie zespołu") {
        activeDes.style.display = "none";
        courseDes1.style.display = "block";
        activeDes = courseDes1;
    } else if(courseTitle.value === "Zarządzanie zmianą") {
        activeDes.style.display = "none";
        courseDes2.style.display = "block";
        activeDes = courseDes2;
    } else if(courseTitle.value === "Umiejętności negocjacyjne i konfliktowe") {
        activeDes.style.display = "none";
        courseDes3.style.display = "block";
        activeDes = courseDes3;
    } else if(courseTitle.value === "Zarządzanie czasem i priorytetami") {
        activeDes.style.display = "none";
        courseDes4.style.display = "block";
        activeDes = courseDes4;
    } else if(courseTitle.value === "Zarządzanie różnorodnością i inkluzją") {
        activeDes.style.display = "none";
        courseDes5.style.display = "block";
        activeDes = courseDes5;
    }
}


const courseShowDesBut = document.querySelector(".course-form__show-des-button");
courseShowDesBut.addEventListener("click", changeDescription);
courseTitle.addEventListener("click", () => {activeDes.style.display="none"; courseShowDesBut.style.display = "block"});
