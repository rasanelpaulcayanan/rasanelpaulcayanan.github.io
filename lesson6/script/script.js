window.onload = function showAnnouncement() {
    var announcement = document.getElementById("announcementDiv");
    var today = new Date();
    var day = today.getDay();

    if (day == 5) {
        announcement.style.display = "block";
    } else {
        announcement.style.display = "none";

    }
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