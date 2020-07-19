console.log("main.js - Loaded Successfully !");

const menuBurger = document.getElementById("menu-burger");
        //Making list on click
menuBurger.addEventListener("click", ()=>{

    const divList = document.querySelector(".menu-list-onClick");
    divList.style = "display: block";

    divList.addEventListener("click", ()=>{
        divList.style = "display: none"
    });

});

