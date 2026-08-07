const cards = [

{
title:"🍺 Igyál!",
text:"Minden játékos iszik 2 kortyot."
},

{
title:"😂 Nevetés",
text:"Aki utoljára nevetett, iszik."
},

{
title:"🎲 Véletlen",
text:"Válassz valakit. Iszik 3 kortyot."
},

{
title:"👑 Király",
text:"Te osztod ki a következő 5 kortyot."
},

{
title:"🔥 Kihívás",
text:"Mondd el az első szerelmed nevét vagy igyál 5 kortyot."
},

{
title:"🤫 Titok",
text:"Mesélj egy kínos történetet."
},

{
title:"🎉 Mindenki",
text:"Egyszerre iszik mindenki."
}

];

const card=document.getElementById("card");
const title=document.getElementById("title");
const text=document.getElementById("text");
const next=document.getElementById("nextBtn");

let current=0;

function randomCard(){

    current=Math.floor(Math.random()*cards.length);

    title.textContent=cards[current].title;

    text.textContent=cards[current].text;

    card.classList.remove("flip");
}

randomCard();

card.onclick=()=>{

    card.classList.toggle("flip");
}

next.onclick = () => {
    card.classList.remove("flip");

    setTimeout(() => {
        randomCard();
    }, 500);
};