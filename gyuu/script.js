document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".coins");
    const text = document.querySelector(".thief");

    const handleInteraction = function () {
        this.classList.add("clicked");
        setTimeout(() => {
            this.style.display = "none";
            this.style.pointerEvents = "none";
            text.style.display = "block";
            text.style.pointerEvents = "all";
        }, 1000);
    };

    if (image) {
        image.addEventListener("click", handleInteraction);
        image.addEventListener("keydown", (event) => {
            if (["Enter", " "].includes(event.key)) {
                event.preventDefault();
                handleInteraction.call(image);
            }
        });
    }
});

window.onload = () => {
    const autoplayButton = document.getElementById("autoplaybtn");
    const bgmButton = document.getElementById("bgmbtn");
    const bgMusic = document.getElementById("bg-music");
    const hoverButton = document.getElementById("hover");

    let autoplay = localStorage.getItem("autoplay") === "true";
    if (autoplayButton) {
        autoplayButton.textContent = autoplay ? "autoplay is on" : "autoplay is off";
        autoplayButton.addEventListener("click", () => {
            autoplay = !autoplay;
            localStorage.setItem("autoplay", autoplay);
            autoplayButton.textContent = autoplay ? "autoplay is on" : "autoplay is off";
        });
    }

    if (bgmButton && bgMusic) {
        bgmButton.textContent = bgMusic.paused ? "music is off" : "music is on";
        bgmButton.addEventListener("click", () => {
            if (bgMusic.paused) {
                bgMusic.play();
                bgmButton.textContent = "music is on";
            } else {
                bgMusic.pause();
                bgmButton.textContent = "music is off";
            }
        });
    }

    if (hoverButton) {
        hoverButton.addEventListener("click", () => {
            const nav = document.querySelector("nav");
            const navtext = document.querySelector(".navbody");
            const navfooter = document.querySelector(".navfooter");
            const log = document.querySelector(".poster");
            const logtext = document.querySelector(".posterbody");
            const logfooter = document.querySelector(".posterfooter");

            const isMap1 = getComputedStyle(nav).backgroundImage.includes("map.png");
            nav.style.backgroundImage = isMap1
                ? "url('/!s/!img/home/map2.png')"
                : "url('/!s/!img/home/map.png')";
            navtext.style.opacity = isMap1 ? "1" : "";
            navfooter.style.display = isMap1 ? "none" : "";
            log.style.backgroundImage = isMap1
                ? "url('/!s/!img/home/tryal2.jpg')"
                : "url('/!s/!img/home/tryal.jpg')";
            logtext.style.opacity = isMap1 ? "1" : "";
            logfooter.style.display = isMap1 ? "none" : "";
            hoverButton.textContent = isMap1
                ? "show content on hover is off"
                : "show content on hover is on";
        });
    }
    
    //tooltip
    const tooltip=document.getElementById("tooltip"),tooltipElements=document.querySelectorAll("[tt]");let timeout;window.addEventListener("mousemove",e=>{tooltip.style.top=e.clientY+"px",tooltip.style.left=e.clientX+"px"}),window.addEventListener("scroll",()=>{tooltipElements.forEach(e=>{"block"===tooltip.style.display&&(tooltip.style.top=parseFloat(tooltip.style.top)+window.scrollY+"px")})}),tooltipElements.forEach(e=>{e.addEventListener("mouseover",t=>{tooltip.innerHTML=e.getAttribute("tt"),tooltip.style.display="block",tooltip.style.top=t.clientY+window.scrollY+"px",tooltip.style.left=t.clientX+"px",tooltip.style.opacity=0,setTimeout(()=>{tooltip.style.opacity=1},10)}),e.addEventListener("mouseout",()=>{tooltip.style.opacity=0}),tooltip.addEventListener("mouseover",()=>{clearTimeout(timeout)}),tooltip.addEventListener("mouseout",()=>{tooltip.style.opacity=0,setTimeout(()=>{tooltip.style.display="none"},200)})});
};

function playFeatured() {
    const audio = document.getElementById("featured");
    const bgMusic = document.getElementById("bg-music");
    const bgmButton = document.getElementById("bgmbtn");

    if (bgMusic && !bgMusic.paused) bgMusic.pause();
    if (audio && audio.paused) {
        audio.play();
        if (bgmButton) bgmButton.textContent = "music is off";
    }
}

function pauseFeatured() {
    const audio = document.getElementById("featured");
    if (audio) audio.pause();
}

function filterContainers(className) {
    document.querySelectorAll(".container").forEach((container) => {
        container.classList.toggle("show", className === "all" || container.classList.contains(className));
    });
}
filterContainers("all");

new Freezeframe();

//commit 
//fetch('https://api.github.com/repos/finchhes/gyuu/commits?per_page=1').then(res=>res.json()).then(res=>{let sha=res[0].sha,authorDate=new Date(res[0].commit.author.date);document.getElementById('commitLatest').innerText=res[0].commit.message;document.getElementById('dateTime').innerText=authorDate.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});});
