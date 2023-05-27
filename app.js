
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
            burgerIcon.classList.remove('hamburger-active')
            nav.classList.remove("nav-active")
            logo.style.display = "block";   
        }
    })
}, instaObserverOptions)

instagramObserver.observe(instagramSection)


// hamburger mobile

const burgerIcon = document.querySelector(".hamburger")
const mobileNav = document.querySelector("nav ul");

burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
})


// preloader
const loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})


// nav hidding after click

navLinks.forEach(link=>{link.addEventListener("click", ()=>{
    mobileNav.classList.remove('active')
})})


// observe dark background

const newsletterSection = document.querySelector(".newsletter")
const contactSection = document.querySelector(".contact")

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