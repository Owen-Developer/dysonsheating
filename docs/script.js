const menuContainer = document.querySelector(".menu-container");
const starters = document.querySelectorAll(".starter"); 
const homeImg = document.querySelectorAll(".home-img");
const serviceBox = document.querySelectorAll(".service-toggle"); 

let menuOpen = false;
let serviceOpen = false;
let mobileServ = false;
let currentHero = 0;
let galIdx = 0;


function toggleMenu(){
    if(!menuOpen){
        document.querySelector(".header-low").style.boxShadow = "none";
        document.querySelector(".line1").style.width = "32px";
        document.querySelector(".line1").style.top = "9px";
        document.querySelector(".line1").style.transform = "rotate(-45deg)";
        document.querySelector(".line2").style.opacity = "0";
        document.querySelector(".line3").style.width = "32px";
        document.querySelector(".line3").style.top = "-9px";
        document.querySelector(".line3").style.transform = "rotate(45deg)";
        menuContainer.style.top = "68px"; 
        menuOpen = true;
    } else {
      document.querySelector(".header-low").style.boxShadow = "rgba(0, 0, 0, 0.75) 0px 8px 26px 0px";
        document.querySelector(".line1").style.width = "26px";
        document.querySelector(".line1").style.top = "0px";
        document.querySelector(".line1").style.transform = "rotate(0deg)";
        document.querySelector(".line2").style.opacity = "1";
        document.querySelector(".line3").style.width = "20px";
        document.querySelector(".line3").style.top = "0px";
        document.querySelector(".line3").style.transform = "rotate(0deg)";
        menuContainer.style.top = "-294px"; 
        document.querySelector(".menu-serv").style.maxHeight = "0px";
        document.querySelector(".menu-serv").style.padding = "0px";
        document.querySelector(".menu-arrow").style.transform = "rotate(0deg)";
        mobileServ = false;
        menuOpen = false;
    }
}

document.querySelectorAll(".btn-home").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.color = "white";
    btn.style.gap = "20px";
    btn.style.backgroundColor = "transparent";
    btn.querySelector(".home-arrow").style.filter = "invert(1)";
});
btn.addEventListener("mouseleave", () => {
    btn.style.color = "hsl(0, 0%, 10%)";
    btn.style.gap = "10px";
    btn.style.backgroundColor = "white";
    btn.querySelector(".home-arrow").style.filter = "invert(0.1)";
});
});
document.querySelectorAll(".btn-serv").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.color = "white";
        btn.style.backgroundColor = "hsl(204, 51%, 26%)";
        btn.querySelector(".fa-arrow-right-long").style.color = "white";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.color = "hsl(204, 51%, 26%)";
        btn.style.backgroundColor = "white";
        btn.querySelector(".fa-arrow-right-long").style.color = "hsl(204, 51%, 26%)";
    });
});
document.querySelectorAll(".btn-abt, .btn-gal, .btn-ren, .btn-call, .btn-form").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
      btn.style.color = "hsl(211, 22%, 27%)";
      btn.style.backgroundColor = "transparent";
      if(btn.querySelector(".fa-arrow-right-long")){ 
        btn.querySelector(".fa-arrow-right-long").style.color = "hsl(211, 22%, 27%)";
      }
  });
  btn.addEventListener("mouseleave", () => {
      btn.style.color = "hsl(0, 0%, 94%)";
      btn.style.backgroundColor = "hsl(211, 22%, 27%)";
      if(btn.querySelector(".fa-arrow-right-long")){ 
        btn.querySelector(".fa-arrow-right-long").style.color = "hsl(0, 0%, 94%)";
       }
  });
});

if(starters[0]){
setTimeout(() => {
    starters.forEach((element, idx) => {
        setTimeout(() => {
            element.style.top = "0px";
            element.style.opacity = "1";
        }, 250 * idx);
    });
}, 200);
}

if(homeImg[0]){
setInterval(() => {
  homeImg[currentHero].style.opacity = "0";
  if(currentHero < 3){
      currentHero++;
  } else {
      currentHero = 0;
  }
  setTimeout(() => {
    homeImg[currentHero].style.opacity = "1";
  }, 100);
}, 4000);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.top = "0px";
          entry.target.style.opacity = "1";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
});
document.querySelectorAll(".scroll-target").forEach(target => {
    observer.observe(target);
});

const servPop = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.querySelectorAll(".serv-card, .inf-box").forEach((element, idx) => {
            setTimeout(() => {
                element.style.top = "0px";
                element.style.opacity = "1";
            }, 250 * idx);
          });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4,
});
document.querySelectorAll(".serv-pop").forEach(target => {
    servPop.observe(target);
});

document.querySelectorAll(".foot-social").forEach(wrapper => {
  wrapper.addEventListener("mouseenter", () => {
    wrapper.querySelector(".foot-social-icon").style.color = "white";
    wrapper.style.backgroundColor = "hsl(204, 51%, 26%)";
  });
  wrapper.addEventListener("mouseleave", () => {
    wrapper.querySelector(".foot-social-icon").style.color = "hsl(0, 0%, 10%)";
    wrapper.style.backgroundColor = "white";
  });
});

function openServices(){
  if(!serviceOpen){
    document.querySelector(".serv-nav").style.pointerEvents = "auto";
    document.querySelector(".serv-nav").style.opacity = "1";
    document.querySelector(".link-arrow").style.transform = "rotate(180deg)";
    serviceOpen = true;
  } else {
    document.querySelector(".serv-nav").style.pointerEvents = "none";
    document.querySelector(".serv-nav").style.opacity = "0";
    document.querySelector(".link-arrow").style.transform = "rotate(0deg)";
    serviceOpen = false;
  }
}

function mobileServices(){
  if(!mobileServ){
    document.querySelector(".menu-serv").style.pointerEvents = "auto";
    document.querySelector(".menu-serv").style.maxHeight = "324px";
    document.querySelector(".menu-serv").style.padding = "16px 0px 8px";
    document.querySelector(".menu-arrow").style.transform = "rotate(180deg)";
    mobileServ = true;
  } else {
    document.querySelector(".menu-serv").style.pointerEvents = "none";
    document.querySelector(".menu-serv").style.maxHeight = "0px";
    document.querySelector(".menu-serv").style.padding = "0px";
    document.querySelector(".menu-arrow").style.transform = "rotate(0deg)";
    mobileServ = false;
  }
}

document.querySelectorAll(".idx-circ").forEach((circ, idx) => {
  circ.addEventListener("click", () => {
    circ.style.backgroundColor = "hsl(204, 51%, 26%)";
    document.querySelectorAll(".full-flexer").forEach((flexer, flexIdx) => {
      if(flexIdx == idx){
        flexer.classList.remove("flexer-inactive");
      } else {
        flexer.classList.add("flexer-inactive");
        document.querySelectorAll(".idx-circ")[flexIdx].style.backgroundColor = "transparent";
      }
    });
  });
});

function moveGal(direc){
  if(direc == "left"){
    galIdx--;
    if(galIdx == 0){
      document.querySelectorAll(".full-arrow")[0].classList.add("full-arrow-inactive");
    } else if(galIdx == 1){
      document.querySelectorAll(".full-arrow")[1].classList.remove("full-arrow-inactive");
    }
    document.querySelectorAll(".full-flexer").forEach((flexer, flexIdx) => {
      if(flexIdx == galIdx){
        flexer.classList.remove("flexer-inactive");
      } else {
        flexer.classList.add("flexer-inactive");
      }
    });
  } else {
    galIdx++;
    if(galIdx == 2){
      document.querySelectorAll(".full-arrow")[1].classList.add("full-arrow-inactive");
    } else if(galIdx == 1){
      document.querySelectorAll(".full-arrow")[0].classList.remove("full-arrow-inactive");
    }
    document.querySelectorAll(".full-flexer").forEach((flexer, flexIdx) => {
      if(flexIdx == galIdx){
        flexer.classList.remove("flexer-inactive");
      } else {
        flexer.classList.add("flexer-inactive");
      }
    });
  }
}