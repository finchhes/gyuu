document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".coins"),t=document.querySelector(".thief"),n=function(){this.classList.add("clicked"),setTimeout(()=>{this.style.display="none",this.style.pointerEvents="none",t.style.display="block",t.style.pointerEvents="all"},1e3)};e&&(e.addEventListener("click",n),e.addEventListener("keydown",t=>{["Enter"," "].includes(t.key)&&(t.preventDefault(),n.call(e))}))});

window.onload = () => {
    const autoplayButton=document.getElementById("autoplaybtn"),bgmButton=document.getElementById("bgmbtn"),bgMusic=document.getElementById("bg-music");let autoplay="true"===localStorage.getItem("autoplay");autoplayButton&&(autoplayButton.textContent=autoplay?"autoplay is on":"autoplay is off",autoplayButton.addEventListener("click",()=>{autoplay=!autoplay,localStorage.setItem("autoplay",autoplay),autoplayButton.textContent=autoplay?"autoplay is on":"autoplay is off"})),bgmButton&&bgMusic&&(bgmButton.textContent=bgMusic.paused?"music is off":"music is on",bgmButton.addEventListener("click",()=>{bgMusic.paused?(bgMusic.play(),bgmButton.textContent="music is on"):(bgMusic.pause(),bgmButton.textContent="music is off")}));

    const hoverButton=document.getElementById("hover");hoverButton&&hoverButton.addEventListener("click",()=>{const nav=document.querySelector("nav"),navtext=document.querySelector(".navbody"),navfooter=document.querySelector(".navfooter"),log=document.querySelector(".poster"),logtext=document.querySelector(".posterbody"),logfooter=document.querySelector(".posterfooter"),isMap1=getComputedStyle(nav).backgroundImage.includes("map.png");nav.style.backgroundImage=isMap1?"url('/!s/!img/home/map2.png')":"url('/!s/!img/home/map.png')",navtext.style.opacity=isMap1?"1":"",navfooter.style.display=isMap1?"none":"",log.style.backgroundImage=isMap1?"url('/!s/!img/home/tryal2.jpg')":"url('/!s/!img/home/tryal.jpg')",logtext.style.opacity=isMap1?"1":"",logfooter.style.display=isMap1?"none":"",hoverButton.textContent=isMap1?"show content on hover is off":"show content on hover is on"});
    
    //tooltip
    const tooltip=document.getElementById("tooltip"),tooltipElements=document.querySelectorAll("[tt]");let timeout,mouseX=0,mouseY=0,tooltipX=0,tooltipY=0,hideTimeout;function updateTooltipPosition(){tooltipX+=(mouseX-tooltipX)*.1,tooltipY+=(mouseY-tooltipY)*.1,tooltip.style.top=tooltipY+"px",tooltip.style.left=tooltipX+"px",requestAnimationFrame(updateTooltipPosition)}updateTooltipPosition(),window.addEventListener("mousemove",e=>{mouseX=e.clientX,mouseY=e.clientY}),tooltipElements.forEach(e=>{e.addEventListener("mouseover",t=>{clearTimeout(hideTimeout),tooltip.innerHTML=e.getAttribute("tt"),tooltip.style.display="block",tooltip.style.opacity="0",tooltip.style.transform="scale(0.8)",tooltip.style.transition=".2s",timeout=setTimeout(()=>{tooltip.style.opacity="1",tooltip.style.transform="scale(1)"},50)}),e.addEventListener("mouseout",()=>{clearTimeout(timeout),hideTimeout=setTimeout(()=>{tooltip.style.opacity="0",tooltip.style.transform="scale(0.8)",setTimeout(()=>{"0"===tooltip.style.opacity&&(tooltip.style.display="none")},200)},50)})}),tooltip.addEventListener("mouseover",()=>{clearTimeout(hideTimeout),tooltip.style.opacity="1",tooltip.style.transform="scale(1)"}),tooltip.addEventListener("mouseout",()=>{hideTimeout=setTimeout(()=>{tooltip.style.opacity="0",tooltip.style.transform="scale(0.8)",setTimeout(()=>{"0"===tooltip.style.opacity&&(tooltip.style.display="none")},200)},50)});
};

function playFeatured(){const e=document.getElementById("featured"),t=document.getElementById("bg-music"),n=document.getElementById("bgmbtn");t&&!t.paused&&t.pause(),e&&e.paused&&(e.play(),n&&(n.textContent="music is off"))}

function pauseFeatured(){const e=document.getElementById("featured");e&&e.pause()}

function filterContainers(e){document.querySelectorAll(".container").forEach(t=>{t.classList.toggle("show","all"===e||t.classList.contains(e))});}

filterContainers("all");

new Freezeframe();

//commit 
//fetch('https://api.github.com/repos/finchhes/gyuu/commits?per_page=1').then(res=>res.json()).then(res=>{let sha=res[0].sha,authorDate=new Date(res[0].commit.author.date);document.getElementById('commitLatest').innerText=res[0].commit.message;document.getElementById('dateTime').innerText=authorDate.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});});
