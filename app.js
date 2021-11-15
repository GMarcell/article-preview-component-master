// function sharefunction() {
//     var sharesection = document.getElementById("sharesction");
//     if (sharesection.style.display === "none") {
//         profile.style.display = "grid";
//     } else {
//         profile.style.display = "none";
//     }
// }

function sharefunction1() {
    var profile = document.getElementById("profile");
    var sharesection = document.getElementById("sharesction");
    console.log("masuk");
    if (profile.style.display === "none") {
        sharesection.style.display = "grid";
    } else {
        sharesection.style.display = "none";
    }
}