console.log("Kids Games World Loaded!");

const cards=document.querySelectorAll(".game-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});