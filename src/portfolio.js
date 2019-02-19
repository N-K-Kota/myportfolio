const idx = document.querySelector(".intro");
const portfolio = document.querySelector(".portfolio");
const prof = document.querySelector(".profile");
const wsize = window.innerHeight;
const homebtn = document.querySelector("#homebtn");
const productsbtn = document.querySelector("#productsbtn");
const profilebtn = document.querySelector("#profilebtn");
let overflag = false;
console.log(wsize);
const nav = document.querySelector("nav");
idx.style.height = wsize+"px";
prof.style.height = wsize+"px";
window.addEventListener("scroll",function(e){
  console.log(window.scrollY);
  if(window.scrollY >= wsize-50){
     nav.classList.remove("nav");
     nav.classList.add("fixednav");
     overflag = true;
   }else if((window.scrollY < 400) && (overflag)){
    nav.classList.remove("fixednav");
    nav.classList.add("nav");
    overflag = false;
  }
});
homebtn.addEventListener("click",function(){
  document.querySelector("#ancintro").scrollIntoView({behavior:"smooth"});
});
productsbtn.addEventListener("click",function(){
  window.scrollTo({top: wsize-50,behavior:"smooth"});
});
profilebtn.addEventListener("click",function(){
  document.querySelector("#ancprofile").scrollIntoView({behavior:"smooth"});
});
