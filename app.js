const emanMainPhoto = document.getElementById("eman-main");
const emanMainShadow = document.getElementById("eman-shadow");
const header = document.querySelector("header");

const changePositionMainPhoto = () => {
    emanMainPhoto.style.right = "80px";
    console.log('auuuu')
}

// Intro observer

const options = {
    root: null,
    treshold: 0,
    rootMargin: "-200px"
}

const introPhotoObserver = new IntersectionObserver(function(entries, emanMainPhotoObserver) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            setTimeout(changePositionMainPhoto, 1500);
        } else {
            emanMainPhoto.style.right = "40px";
            console.log('uuuua')
        }
    })
}, options)

introPhotoObserver.observe(header)
