function toggleMenu() {

    document.getElementById("mainNav").classList.toggle("navigationLists");
}



}

var dateNow = document.dateNow;
document.getElementById("dateNow").innerHTML = new Date().toLocaleDateString(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});