function sharefunction() {
    var profile = document.getElementsByClassName("profile");
    var sharesection = document.getElementsByClassName("sharesction");
    if (sharesection.style.display === "none") {
        sharesection.style.display = "grid";
        profile.style.display = "none";
    } else {
        sharesection.style.display = "none";
        profile.style.display = "grid";
    }
}