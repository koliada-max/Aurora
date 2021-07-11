let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("hero__title-wrapper").style.top = "0";
    } else {
        document.getElementById("hero__title-wrapper").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}