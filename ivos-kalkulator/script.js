const drinks = {

    beer: {
        name: "🍺 Sör",
        alcohol: 5,
        sizes: [
            { text: "0.33 l", volume: 0.33 },
            { text: "0.50 l", volume: 0.50 }
        ]
    },

    wine: {
        name: "🍷 Bor",
        alcohol: 12,
        sizes: [
            { text: "0.75 l üveg", volume: 0.75 }
        ]
    },

    champagne: {
        name: "🥂 Pezsgő",
        alcohol: 11,
        sizes: [
            { text: "0.75 l üveg", volume: 0.75 }
        ]
    },

    palinka: {
        name: "🥃 Pálinka",
        alcohol: 40,
        sizes: [
            { text: "2 cl", volume: 0.02 },
            { text: "4 cl feles", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 }
        ]
    },

    jager: {
        name: "🦌 Jägermeister",
        alcohol: 35,
        sizes: [
            { text: "2 cl", volume: 0.02 },
            { text: "4 cl feles", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 },
            { text: "0.70 l", volume: 0.70 },
            { text: "1.00 l", volume: 1.00 }
        ]
    },

    whiskey: {
        name: "🥃 Whiskey",
        alcohol: 40,
        sizes: [
            { text: "4 cl", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 },
            { text: "0.70 l", volume: 0.70 },
            { text: "1.00 l", volume: 1.00 }
        ]
    },

    vodka: {
        name: "🍸 Vodka",
        alcohol: 40,
        sizes: [
            { text: "4 cl", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 },
            { text: "0.70 l", volume: 0.70 },
            { text: "1.00 l", volume: 1.00 }
        ]
    },

    rum: {
        name: "🍹 Rum",
        alcohol: 37.5,
        sizes: [
            { text: "4 cl", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 },
            { text: "0.70 l", volume: 0.70 },
            { text: "1.00 l", volume: 1.00 }
        ]
    },

    tequila: {
        name: "🌵 Tequila",
        alcohol: 38,
        sizes: [
            { text: "4 cl", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 },
            { text: "0.70 l", volume: 0.70 }
        ]
    },

    gin: {
        name: "🍸 Gin",
        alcohol: 40,
        sizes: [
            { text: "4 cl", volume: 0.04 },
            { text: "0.50 l", volume: 0.50 },
            { text: "0.70 l", volume: 0.70 },
            { text: "1.00 l", volume: 1.00 }
        ]
    }

};

const fromDrink = document.getElementById("fromDrink");
const fromSize = document.getElementById("fromSize");
const toDrink = document.getElementById("toDrink");

const result = document.getElementById("result");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("count");

const button = document.getElementById("calcButton");

let amount = 1;

function updateCounter() {
    count.innerText = amount;
}

plus.onclick = () => {
    amount++;
    updateCounter();
};

minus.onclick = () => {
    if (amount > 1) {
        amount--;
        updateCounter();
    }
};

function updateSizes() {

    fromSize.innerHTML = "";

    if (!fromDrink.value) return;

    drinks[fromDrink.value].sizes.forEach(size => {

        const option = document.createElement("option");

        option.value = size.volume;
        option.textContent = size.text;

        fromSize.appendChild(option);

    });

}

fromDrink.onchange = updateSizes;

button.onclick = function () {

    if (!fromDrink.value || !toDrink.value) {

        result.innerHTML = "⚠️ Válassz italokat!";

        return;

    }

    const from = drinks[fromDrink.value];
    const to = drinks[toDrink.value];

    const selectedVolume = parseFloat(fromSize.value);

    const pureAlcohol =
        selectedVolume *
        amount *
        (from.alcohol / 100);

    const targetVolume =
        pureAlcohol /
        (to.alcohol / 100);

    let text = "";

    switch (toDrink.value) {

        case "beer":

            text = (targetVolume / 0.5).toFixed(2);

            result.innerHTML =
                "🍺<br><br><b>" +
                text +
                "</b><br>db 0.5 l sör";

            break;

        case "wine":

            text = (targetVolume / 0.75).toFixed(2);

            result.innerHTML =
                "🍷<br><br><b>" +
                text +
                "</b><br>üveg bor";

            break;

        case "champagne":

            text = (targetVolume / 0.75).toFixed(2);

            result.innerHTML =
                "🥂<br><br><b>" +
                text +
                "</b><br>üveg pezsgő";

            break;

        case "palinka":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🥃<br><br><b>" +
                text +
                "</b><br>feles pálinka";

            break;

        case "jager":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🦌<br><br><b>" +
                text +
                "</b><br>Jäger shot";

            break;

        case "whiskey":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🥃<br><br><b>" +
                text +
                "</b><br>whiskey shot";

            break;

        case "vodka":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🍸<br><br><b>" +
                text +
                "</b><br>vodka shot";

            break;

        case "rum":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🍹<br><br><b>" +
                text +
                "</b><br>rum shot";

            break;

        case "tequila":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🌵<br><br><b>" +
                text +
                "</b><br>tequila shot";

            break;

        case "gin":

            text = (targetVolume / 0.04).toFixed(1);

            result.innerHTML =
                "🍸<br><br><b>" +
                text +
                "</b><br>gin shot";

            break;

    }

};
// ===== PÁRBAJ - ELEMEK =====

const p1Drink = document.getElementById("p1Drink");
const p1Size = document.getElementById("p1Size");

const p2Drink = document.getElementById("p2Drink");
const p2Size = document.getElementById("p2Size");

// Italok betöltése
function loadDrinkOptions(select){

    select.innerHTML = '<option value="">Válassz italt...</option>';

    for(const key in drinks){

        const option = document.createElement("option");

        option.value = key;
        option.textContent = drinks[key].name;

        select.appendChild(option);

    }

}

loadDrinkOptions(p1Drink);
loadDrinkOptions(p2Drink);

// Méretlista frissítése
function updateDuelSizes(drinkSelect,sizeSelect){

    sizeSelect.innerHTML = "";

    if(!drinkSelect.value) return;

    drinks[drinkSelect.value].sizes.forEach(size=>{

        const option=document.createElement("option");

        option.value=size.volume;
        option.textContent=size.text;

        sizeSelect.appendChild(option);

    });

}

p1Drink.onchange=()=>updateDuelSizes(p1Drink,p1Size);
p2Drink.onchange=()=>updateDuelSizes(p2Drink,p2Size);

// Alapértelmezett betöltés
if(p1Drink.value) updateDuelSizes(p1Drink,p1Size);
if(p2Drink.value) updateDuelSizes(p2Drink,p2Size);

// ===== FÜLEK =====

const converterTab = document.getElementById("converterTab");
const duelTab = document.getElementById("duelTab");

const converterPage = document.getElementById("converterPage");
const duelPage = document.getElementById("duelPage");

converterTab.onclick = () => {
    converterPage.style.display = "block";
    duelPage.style.display = "none";

    converterTab.classList.add("active");
    duelTab.classList.remove("active");
};

duelTab.onclick = () => {
    converterPage.style.display = "none";
    duelPage.style.display = "block";

    duelTab.classList.add("active");
    converterTab.classList.remove("active");
};
updateCounter();
// ===== PÁRBAJ SZÁMLÁLÓK =====

let p1Amount = 1;
let p2Amount = 1;

const p1Count = document.getElementById("p1Count");
const p2Count = document.getElementById("p2Count");

document.getElementById("p1Plus").onclick = () => {
    p1Amount++;
    p1Count.innerText = p1Amount;
};

document.getElementById("p1Minus").onclick = () => {
    if (p1Amount > 1) {
        p1Amount--;
        p1Count.innerText = p1Amount;
    }
};

document.getElementById("p2Plus").onclick = () => {
    p2Amount++;
    p2Count.innerText = p2Amount;
};

document.getElementById("p2Minus").onclick = () => {
    if (p2Amount > 1) {
        p2Amount--;
        p2Count.innerText = p2Amount;
    }
};

p1Count.innerText = p1Amount;
p2Count.innerText = p2Amount;

// ===== PÁRBAJ LISTÁK =====

const player1 = [];
const player2 = [];

const player1List = document.getElementById("player1List");
const player2List = document.getElementById("player2List");

function alcoholAmount(drink, volume, amount) {
    return volume * amount * (drinks[drink].alcohol / 100);
}

// ===== ITAL HOZZÁADÁSA =====

function renderLists() {

    player1List.innerHTML = "";
    player2List.innerHTML = "";

    player1.forEach(item => {

        const div = document.createElement("div");
        div.className = "drinkItem";

        div.innerHTML = `
            <span>${item.amount}× ${drinks[item.drink].name} (${item.label})</span>
            <button onclick="removeDrink(1,${item.id})">❌</button>
        `;

        player1List.appendChild(div);

    });

    player2.forEach(item => {

        const div = document.createElement("div");
        div.className = "drinkItem";

        div.innerHTML = `
            <span>${item.amount}× ${drinks[item.drink].name} (${item.label})</span>
            <button onclick="removeDrink(2,${item.id})">❌</button>
        `;

        player2List.appendChild(div);

    });

}

function removeDrink(player,id){

    if(player===1){

        const index=player1.findIndex(x=>x.id===id);

        if(index>-1) player1.splice(index,1);

    }else{

        const index=player2.findIndex(x=>x.id===id);

        if(index>-1) player2.splice(index,1);

    }

    renderLists();

}

document.getElementById("addP1").onclick=()=>{

    if(!p1Drink.value) return;

    const size=drinks[p1Drink.value].sizes[p1Size.selectedIndex];

    player1.push({

        id:Date.now()+Math.random(),

        drink:p1Drink.value,

        volume:size.volume,

        label:size.text,

        amount:p1Amount

    });

    renderLists();

};

document.getElementById("addP2").onclick=()=>{

    if(!p2Drink.value) return;

    const size=drinks[p2Drink.value].sizes[p2Size.selectedIndex];

    player2.push({

        id:Date.now()+Math.random(),

        drink:p2Drink.value,

        volume:size.volume,

        label:size.text,

        amount:p2Amount

    });

    renderLists();

};
// ===== PÁRBAJ EREDMÉNY =====

const duelResult = document.getElementById("duelResult");

document.getElementById("fightButton").onclick = () => {

    if(player1.length===0 || player2.length===0){

        duelResult.innerHTML="⚠️ Adj hozzá italokat mindkét játékosnak!";

        return;

    }

    let total1=0;
    let total2=0;

    player1.forEach(item=>{

        total1 += alcoholAmount(
            item.drink,
            item.volume,
            item.amount
        );

    });

    player2.forEach(item=>{

        total2 += alcoholAmount(
            item.drink,
            item.volume,
            item.amount
        );

    });

    const ml1=(total1*1000).toFixed(1);
    const ml2=(total2*1000).toFixed(1);

    if (Math.abs(total1 - total2) < 0.0001) {

    duelResult.innerHTML = `
    🤝 Döntetlen!<br><br>
    Mindkét játékos ugyanannyi alkoholt ivott.
    `;

} else if (total1 > total2) {

    const diff = (((total1 - total2) / total2) * 100).toFixed(1);

    duelResult.innerHTML = `
    🏆 Játékos 1 nyert!<br><br>
    🍻 <b>${diff}%</b>-kal több alkoholt ivott.
    `;

} else {

    const diff = (((total2 - total1) / total1) * 100).toFixed(1);

    duelResult.innerHTML = `
    🏆 Játékos 2 nyert!<br><br>
    🍻 <b>${diff}%</b>-kal több alkoholt ivott.
    `;

}

};