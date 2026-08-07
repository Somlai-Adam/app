const cards = [
{
title:"🗣️ Legkínosabb szexuális élmény",
text:"Mindenki mond egyet. Akié a leggázabb, az iszik."
},
{
title:"🎵 Drink Me",
text:"Innod kell egy Sára Dalma kombót."
},
{
title:"🥤 Itasd meg!",
text:"Itasd meg a melletted ülőket!"
},
{
title:"📞 Chat",
text:"Mindenkinek fel kell olvasnia az utolsó üzenetét a telefonján. Aki nem meri, az iszik."
},
{
title:"❤️ Volt partnered",
text:"Ki volt a legjobb és a legrosszabb partnered? Név nélkül, de sztorival!"
},
{
title:"🥃 Shot",
text:"Hívj meg valakit egy shotra!"
},
{
title:"💎 Piercing",
text:"Az iszik, akinek van piercingje."
},
{
title:"🌊 Orgazmus",
text:"Igyál, ha játszottál már meg orgazmust!"
},
{
title:"📷 Meztelen fotó",
text:"Igyál, ha küldtél vagy kaptál már meztelen fotót!"
},
{
title:"🤔 Tippelj",
text:"Szerinted ki nézett már pornót a partnerével együtt? Ha eltaláltad, kioszthatsz 1 shotot. Ha nem, te iszol."
},
{
title:"🍸 Feladat",
text:"Találj ki egy feladatot a többieknek! Aki nem csinálja meg az igyon"
},
{
title:"🍑 Tippelj",
text:"Szerinted kik küldtek már magukról szexibb képet? Tippeld meg mindenkiről,Ahányat tévedtél annyit iszol"
},
{
title:"🔒 Titok",
text:"Igyál egyet, ha van olyan titkod, amit senkinek nem mondanál el."
},
{
title:"🧠 Első benyomás",
text:"Meséld el, mit gondoltál először a többiekről, vagy igyál egyet."
},
{
title:"🎂 Szülinap",
text:"Kioszthatsz annyi kortyot ahány éves vagy"
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