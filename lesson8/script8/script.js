
const imagesToLoad = document.querySelectorAll("img[data-src]");


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function toggleMenu() {

    document.getElementById("mainNav").classList.toggle("navigationLists");
}


var dateNow = document.dateNow;
document.getElementById("dateNow").innerHTML = new Date().toLocaleDateString(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});