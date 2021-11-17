let toggle = false;

document.body.querySelector(".menuIcon").addEventListener("click", function () {

    toggle = !toggle;

    if (toggle) {
        document.body.querySelector(".menu").style.left = "0px";
        document.body.querySelector(".menu").style.opacity = "100%";
    } else {
        document.body.querySelector(".menu").style.left = "-200px";
        document.body.querySelector(".menu").style.opacity = "0%";
    }
})