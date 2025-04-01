window.onload = function () {
    const autoplayButton = document.getElementById("autoplaybtn");
    const bgmButton = document.getElementById("bgmbtn");
    const bgMusic = document.getElementById("bg-music");
    const hoverButton = document.getElementById("hover");

    let autoplay = localStorage.getItem("autoplay") === "true";
    if (autoplay) {
        autoplayButton.textContent = "autoplay is on";
    } else {
        autoplayButton.textContent = "autoplay is off";
    }

    autoplayButton.addEventListener("click", function () {
        autoplay = !autoplay;
        localStorage.setItem("autoplay", autoplay);
        autoplayButton.textContent = autoplay ? "autoplay is on" : "autoplay is off";
    });

    bgmButton.textContent = bgMusic.paused ? "music is off" : "music is on";

    bgmButton.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
            this.textContent = "music is on";
        } else {
            bgMusic.pause();
            this.textContent = "music is off";
        }
    });

    hoverButton.addEventListener("click", function () {
        const nav = document.querySelector("nav");
        const navtext = document.querySelector(".navbody");
        const navfooter = document.querySelector(".navfooter");
        const log = document.querySelector(".poster");
        const logtext = document.querySelector(".posterbody");
        const logfooter = document.querySelector(".posterfooter");

        if (getComputedStyle(nav).backgroundImage.includes("map.png")) {
            nav.style.backgroundImage = "url('/!s/!img/home/map2.png')";
            navtext.style.opacity = "1";
            navfooter.style.display = "none";
            log.style.backgroundImage = "url('/!s/!img/home/tryal2.jpg')";
            logtext.style.opacity = "1";
            logfooter.style.display = "none";
            hoverButton.textContent = "show content on hover is off";
        } else {
            nav.style.backgroundImage = "url('/!s/!img/home/map.png')";
            navtext.style.opacity = "";
            navfooter.style.display = "";
            log.style.backgroundImage = "url('/!s/!img/home/tryal.jpg')";
            logtext.style.opacity = "";
            logfooter.style.display = "";
            hoverButton.textContent = "show content on hover is on";
        }
    });
};

function playFeatured() {
    const audio = document.getElementById("featured");
    const bgaudio = document.getElementById("bg-music");
    const bgmbtn = document.getElementById("bgmbtn");
    if (!bgaudio.paused) {
        bgaudio.pause();
    }
    if (audio.paused) {
        audio.play();
        bgmbtn.textContent = "music is off";
    }
}
function pauseFeatured() {
    const audio = document.getElementById("featured");
    audio.pause();
}
