function sharefunction() {
    if (document.getElementById("sharesection").classList.contains("active")) {
        document.getElementById("sharesection").classList.remove("active");
        document.getElementById("profile").classList.remove("hide");
    }
    document.getElementById("profile").classList.toggle("active");
    document.getElementById("sharesection").classList.toggle("hide")
}

function profilefunction() {
    if (screen.width >= 1023) {
        console.log(screen.width)
        if (document.getElementById("sharesection").style.display == "none") {
            document.getElementById("sharesection").style.display = "grid";
        } else {
            document.getElementById("sharesection").style.display = "none"
        }
        // if (document.getElementById("sharesection").classList.contains("active")) {
        //     document.getElementById("sharesection").classList.remove("active");
        //     document.getElementById("sharesection").classList.toggle("hide");
        // } else {
        //     document.getElementById("sharesection").classList.toggle("active")
        //     document.getElementById("sharesection").classList.remove("hide");
        // }
    } else {
        if (document.getElementById("profile").classList.contains("active")) {
            document.getElementById("profile").classList.remove("active");
            document.getElementById("sharesection").classList.remove("hide");
        }
        document.getElementById("profile").classList.toggle("hide")
        document.getElementById("sharesection").classList.toggle("active");
    }
}