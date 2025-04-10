document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".coins"),t=document.querySelector(".thief"),n=function(){this.classList.add("clicked"),setTimeout(()=>{this.style.display="none",this.style.pointerEvents="none",t.style.display="block",t.style.pointerEvents="all"},1e3)};e&&(e.addEventListener("click",n),e.addEventListener("keydown",t=>{["Enter"," "].includes(t.key)&&(t.preventDefault(),n.call(e))}))});

window.onload = () => {
    const autoplayButton=document.getElementById("autoplaybtn"),bgmButton=document.getElementById("bgmbtn"),bgMusic=document.getElementById("bg-music");let autoplay="true"===localStorage.getItem("autoplay");autoplayButton&&(autoplayButton.textContent=autoplay?"autoplay is on":"autoplay is off",autoplayButton.addEventListener("click",()=>{autoplay=!autoplay,localStorage.setItem("autoplay",autoplay),autoplayButton.textContent=autoplay?"autoplay is on":"autoplay is off"})),bgmButton&&bgMusic&&(bgmButton.textContent=bgMusic.paused?"music is off":"music is on",bgmButton.addEventListener("click",()=>{bgMusic.paused?(bgMusic.play(),bgmButton.textContent="music is on"):(bgMusic.pause(),bgmButton.textContent="music is off")}));

    const hoverButton=document.getElementById("hover");hoverButton&&hoverButton.addEventListener("click",()=>{const nav=document.querySelector("nav"),navtext=document.querySelector(".navbody"),navfooter=document.querySelector(".navfooter"),log=document.querySelector(".poster"),logtext=document.querySelector(".posterbody"),logfooter=document.querySelector(".posterfooter"),isMap1=getComputedStyle(nav).backgroundImage.includes("map.png");nav.style.backgroundImage=isMap1?"url('/!s/!img/home/map2.png')":"url('/!s/!img/home/map.png')",navtext.style.opacity=isMap1?"1":"",navfooter.style.display=isMap1?"none":"",log.style.backgroundImage=isMap1?"url('/!s/!img/home/tryal2.jpg')":"url('/!s/!img/home/tryal.jpg')",logtext.style.opacity=isMap1?"1":"",logfooter.style.display=isMap1?"none":"",hoverButton.textContent=isMap1?"show content on hover is off":"show content on hover is on"});
    
    //tooltip
const tooltip=document.getElementById("tooltip"),tooltipElements=document.querySelectorAll("[tt]");let mouseX=0,mouseY=0,tooltipX=0,tooltipY=0;function updateTooltipPosition(){tooltipX+=(mouseX-tooltipX)*.2,tooltipY+=(mouseY-tooltipY)*.2,tooltip.style.top=tooltipY+"px",tooltip.style.left=tooltipX+"px",requestAnimationFrame(updateTooltipPosition)}updateTooltipPosition(),window.addEventListener("mousemove",e=>{mouseX=e.clientX,mouseY=e.clientY}),tooltipElements.forEach(e=>{e.addEventListener("mouseover",()=>{tooltip.innerHTML=e.getAttribute("tt"),tooltip.style.display="block",tooltip.style.opacity="1",tooltip.style.transform="scale(1)"}),e.addEventListener("mouseout",()=>{tooltip.style.opacity="0",tooltip.style.transform="scale(1)",tooltip.style.display="none"})}),tooltip.addEventListener("mouseover",()=>{tooltip.style.opacity="1",tooltip.style.transform="scale(1)"}),tooltip.addEventListener("mouseout",()=>{tooltip.style.opacity="0",tooltip.style.transform="scale(1)"});
};

function playFeatured(){const e=document.getElementById("featured"),t=document.getElementById("bg-music"),n=document.getElementById("bgmbtn");t&&!t.paused&&t.pause(),e&&e.paused&&(e.play(),n&&(n.textContent="music is off"))}

function pauseFeatured(){const e=document.getElementById("featured");e&&e.pause()}

function filterContainers(e){document.querySelectorAll(".container").forEach(t=>{t.classList.toggle("show","all"===e||t.classList.contains(e))});}

filterContainers("all");

new Freezeframe();

//commit 
fetch('https://api.github.com/repos/finchhes/gyuu/commits?per_page=1').then(res=>res.json()).then(res=>{let sha=res[0].sha,authorDate=new Date(res[0].commit.author.date);document.getElementById('commitLatest').innerText=res[0].commit.message;document.getElementById('dateTime').innerText=authorDate.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});});


const content=document.querySelector(".tilt-content"),text=document.querySelector(".tilt-text");content.addEventListener("mouseenter",()=>{content.style.transition="transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.3s ease",content.style.transform="rotateX(0deg) rotateY(0deg)"}),content.addEventListener("mousemove",e=>{const t=content.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top,c=t.width/2,r=t.height/2,i=(o-r)/20,l=-(n-c)/20;content.style.transform=`rotateX(${i}deg) rotateY(${l}deg)`,text.style.transform=`translate(-50%, -50%) translateZ(50px) rotateX(${0.5*i}deg) rotateY(${0.5*l}deg)`}),content.addEventListener("mouseleave",()=>{content.style.transition="transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.3s ease",content.style.transform="rotate(1.2deg)",text.style.transform="translate(-50%, -50%) translateZ(50px)"});