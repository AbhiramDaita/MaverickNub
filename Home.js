const toHome= document.getElementById("toHome");
const toAbout = document.getElementById("toAbout");
const toResume = document.getElementById("toResume");
const toWorks = document.getElementById("toWorks");
const toContact = document.getElementById("toContact");

toHome.addEventListener("click",(event)=>{
    const homePage = document.querySelector(".HomePageTitle");
    homePage.scrollIntoView({behavior:"smooth"});
})
toAbout.addEventListener("click",(event)=>{
    const homePage = document.querySelector(".AboutBox");
    homePage.scrollIntoView({behavior:"smooth"});
})
toResume.addEventListener("click",(event)=>{
    const homePage = document.querySelector(".ResumeBody");
    homePage.scrollIntoView({behavior:"smooth"});
})
toWorks.addEventListener("click",(event)=>{
    const homePage = document.querySelector(".WorkBody");
    homePage.scrollIntoView({behavior:"smooth"});
})
toContact.addEventListener("click",(event)=>{
    const homePage = document.querySelector(".ContactBox");
    homePage.scrollIntoView({behavior:"smooth"});
})
