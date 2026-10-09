const cards = [
    {
        title: "🗣️ Legkínosabb szexuális élmény",
        text: "Mindenki mond egyet. Akié a leggázabb, az iszik."
    },
    {
        title: "🎵 Drink Me",
        text: "Innod kell egy Sára Dalma kombót."
    },
    {
        title: "🥤 Itasd meg!",
        text: "Itasd meg a melletted ülőket!"
    },
    {
        title: "📞 Chat",
        text: "Mindenkinek fel kell olvasnia az utolsó üzenetét a telefonján. Aki nem szeretné, passzolhat."
    },
    {
        title: "❤️ Volt partnered",
        text: "Ki volt a legjobb és a legrosszabb partnered? Név nélkül, de sztorival!"
    },
    {
        title: "🥃 Shot",
        text: "Hívj meg valakit egy shotra, vagy válasszatok alkoholmentes alternatívát!"
    },
    {
        title: "💎 Piercing",
        text: "Az iszik, akinek van piercingje."
    },
    {
        title: "🌊 Orgazmus",
        text: "Igyál, ha játszottad már meg az orgazmust!"
    },
    {
        title: "📷 Meztelen fotó",
        text: "Igyál, ha küldtél vagy kaptál már meztelen fotót!"
    },
    {
        title: "🤔 Tippelj!",
        text: "Szerinted ki nézett már pornót a partnerével együtt? Tippelj, aztán beszéljétek meg!"
    },
    {
        title: "🍸 Feladat",
        text: "Találj ki egy feladatot a többieknek!"
    },
    {
        title: "🍑 Szexi fotó",
        text: "Szerinted ki küldött már magáról szexi képet? Tippelj, és nézzétek meg, hány találatod volt!"
    },
    {
        title: "🔒 Titok",
        text: "Mesélj valamiről, amit kevesen tudnak rólad!"
    },
    {
        title: "🧠 Első benyomás",
        text: "Meséld el, mit gondoltál először a többiekről!"
    },
    {
        title: "🎂 Szülinap",
        text: "Kioszthatsz annyi kortyot, ahány éves vagy!"
    },

    // ===== A KÉPEKEN LÁTHATÓ KÁRTYÁK ÖTLETEI =====

    {
        title: "⚧️ Nem és vonzalom",
        text: "Mesélj arról, hogy változott-e valaha az, hogy kihez vonzódsz!"
    },
    {
        title: "💋 Én még soha...",
        text: "Én még soha nem csókolóztam olyannal, akinek nem tudtam a nevét."
    },
    {
        title: "💘 Szerelem",
        text: "Meséld el, ki volt az első szerelmed!"
    },
    {
        title: "💔 Szakítás",
        text: "Mi volt a legrosszabb szakításod története?"
    },
    {
        title: "👀 Szemkontaktus",
        text: "Nézz valakinek a szemébe 10 másodpercig nevetés nélkül!"
    },
    {
        title: "🍸 Kedvenc ital",
        text: "Mutasd meg, melyik ital illik legjobban a személyiségedhez!"
    },
    {
        title: "💪 Mutasd meg!",
        text: "Mutasd meg a legjobb izompózodat!"
    },
    {
        title: "🦩 Flamingó",
        text: "Állj fél lábon 15 másodpercig!"
    },
    {
        title: "🫦 Bók",
        text: "Mondj valakinek egy őszinte bókot!"
    },
    {
        title: "😳 Kínos történet",
        text: "Mesélj el egy kínos történetet, amit eddig még nem hallottunk!"
    },
    {
        title: "💌 Vallomás",
        text: "Mondj el valamit, amit már régóta szeretnél bevallani!"
    },
    {
        title: "💋 Csók",
        text: "Kit csókolnál meg a társaságból, ha mindketten szeretnétek?"
    },
    {
        title: "🍷 Kóstoló",
        text: "Válassz egy italt, és meséld el, miért szereted!"
    },
    {
        title: "🎲 Kockázat",
        text: "Válassz valakit, aki feltehet neked egy kérdést!"
    },
    {
        title: "🫣 Bevallás",
        text: "Mi az a dolog, amit mások nem feltételeznének rólad?"
    },
    {
        title: "💑 Kapcsolat",
        text: "Mi a legfontosabb számodra egy kapcsolatban?"
    },
    {
        title: "🌶️ Pikáns kérdés",
        text: "Mi volt a legmerészebb dolog, amit valaha csináltál?"
    },
    {
        title: "📱 Telefon",
        text: "Mutasd meg az utolsó emojit, amit használtál!"
    },
    {
        title: "🤫 Titkos vágy",
        text: "Mi az az élmény, amit egyszer mindenképpen ki szeretnél próbálni?"
    },
    {
        title: "💃 Tánc",
        text: "Mutass be egy 10 másodperces táncot!"
    },
    {
        title: "🎤 Éneklés",
        text: "Énekelj el egy rövid részletet egy általad választott dalból!"
    },
    {
        title: "😂 Nevetés",
        text: "Próbáld megnevettetni a többieket 15 másodperc alatt!"
    },
    {
        title: "🫂 Ölelés",
        text: "Ha mindketten szeretnétek, ölelj meg valakit a társaságból!"
    },
    {
        title: "💭 Fantázia",
        text: "Ha bárkivel randizhatnál a világon, kit választanál?"
    },
    {
        title: "🎬 Film",
        text: "Melyik filmes karakterrel mennél el randizni?"
    },
    {
        title: "🎵 Zene",
        text: "Melyik dal írja le legjobban a szerelmi életedet?"
    },
    {
        title: "🧸 Gyerekkor",
        text: "Meséld el a legviccesebb gyerekkori emlékedet!"
    },
    {
        title: "💬 Üzenet",
        text: "Mi volt a legviccesebb üzenet, amit valaha kaptál?"
    },
    {
        title: "🦋 Pillangók",
        text: "Volt már olyan, hogy valaki egyetlen pillantással zavarba hozott?"
    },
    {
        title: "💎 Önismeret",
        text: "Mi az a tulajdonságod, amire a legbüszkébb vagy?"
    },
    {
        title: "🎭 Utánzás",
        text: "Utánozz valakit a társaságból úgy, hogy a többiek kitalálják, ki az!"
    },
    {
        title: "🍀 Szerencse",
        text: "Válassz egy játékost, aki feltehet neked egy kérdést!"
    },
    {
        title: "🌙 Éjszaka",
        text: "Mi a legfurcsább dolog, amit késő este csináltál?"
    },
    {
        title: "🎁 Becenév",
        text: "Találj ki valakinek egy vicces becenevet!"
    },
    {
        title: "🪩 Buli",
        text: "Ki az, aki szerinted a legtovább bírná a bulit?"
    },
    {
        title: "🗣️ Őszinteség",
        text: "Mi volt az első benyomásod a jobb oldali szomszédodról?"
    },
    {
        title: "🧩 Két igaz, egy hamis",
        text: "Mondj három állítást magadról, amelyek közül az egyik hazugság. A többiek találják ki, melyik!"
    },
    {
        title: "🥰 Kedvesség",
        text: "Mondj valami kedveset a bal oldali szomszédodnak!"
    },
    {
        title: "🤔 Dilemma",
        text: "Inkább olvasnál mások gondolataiban, vagy látnád a jövőt?"
    },
    {
        title: "🔥 Spontán",
        text: "Mi volt a legspontánabb dolog, amit valaha csináltál?"
    },
    {
        title: "🥂 Koccintás",
        text: "Koccints valakivel, akivel ma még keveset beszéltél!"
    },
    {
        title: "😈 Merész",
        text: "Mi az a tulajdonság, amit vonzónak találsz, de ritkán vallasz be?"
    },
    {
        title: "🫦 Vonzalom",
        text: "Mi az, ami valakiben azonnal felkelti az érdeklődésedet?"
    },
    {
        title: "🫶 Barátság",
        text: "Ki az, akire a társaságból bármikor számíthatnál?"
    },
    {
        title: "🎯 Gyors választás",
        text: "Tengerpart vagy hegyek? Buli vagy bekuckózás? Válassz gyorsan!"
    },
    {
        title: "🧠 Gondolat",
        text: "Mi az a dolog, amiről órákig tudnál beszélni?"
    },
    {
        title: "🎨 Képzelet",
        text: "Ha egy napra bárki lehetnél, kit választanál?"
    },
    {
        title: "💬 Vélemény",
        text: "Mi az a népszerű dolog, amit te egyáltalán nem szeretsz?"
    },
    {
        title: "🥇 Díjátadó",
        text: "Adj valakinek egy vicces díjat, például a legjobb sztorizónak!"
    },
    {
        title: "✨ Emlék",
        text: "Mondj egy dolgot, amitől emlékezetes lesz számodra ez az este!"
    },
    {
        title: "🙈 Én még soha...",
        text: "Én még soha nem írtam rá az exemre. Ha te igen, mesélj róla!"
    },
    {
        title: "💋 Első csók",
        text: "Mesélj az első csókodról, ha szívesen megosztod!"
    },
    {
        title: "❤️ Ideál",
        text: "Milyen a tökéletes partnered külsőre és belsőre?"
    },
    {
        title: "💔 Féltékenység",
        text: "Voltál már féltékeny úgy, hogy utólag megbántad?"
    },
    {
        title: "🔥 Vonzalom",
        text: "Mi az a tulajdonság, amitől valaki azonnal vonzóvá válik számodra?"
    },
    {
        title: "🫣 Kínos bevallás",
        text: "Mi az a dolog, amit eddig szégyelltél bevallani?"
    },
    {
        title: "💌 Üzenet az exnek",
        text: "Ha egyetlen mondatot küldhetnél az exednek, mi lenne az?"
    },
    {
        title: "🎲 Véletlen kérdés",
        text: "Válassz valakit, és tegyél fel neki egy kérdést!"
    },
    {
        title: "🪞 Tükör",
        text: "Mi az a tulajdonságod, amit mások gyakran félreértenek?"
    },
    {
        title: "🌹 Romantika",
        text: "Mi lenne számodra a tökéletes randi?"
    },
    {
        title: "🍹 Kedvenc koktél",
        text: "Találj ki egy koktélnevet a melletted ülő személyiségéhez!"
    },
    {
        title: "🎉 Mindenki",
        text: "Mindenki mondjon egy dolgot, amit szeret a társaságban!"
    },
    {
        title: "💪 Kihívás",
        text: "Mutasd meg a legjobb pózodat vagy egy vicces mozdulatodat!"
    },
    {
        title: "🫶 Köszönet",
        text: "Köszönj meg valakinek a társaságból valamit!"
    },
    {
        title: "💭 Titkos gondolat",
        text: "Mi az a dolog, amit sokan nem tudnak rólad?"
    },
    {
        title: "🎯 Célpont",
        text: "Válassz valakit, aki őszintén válaszol egy kérdésedre!"
    },
    {
        title: "🥳 Körkérdés",
        text: "Mindenki mondja el, mi volt a hete legjobb pillanata!"
    },
    {
        title: "🧡 Társaság",
        text: "Ki nevettet meg a legkönnyebben a társaságból?"
    },
    {
        title: "✨ Zárókártya",
        text: "Mondj egy szót, amivel leírnád a mai estét!"
    }
];

const card = document.getElementById("card");
const title = document.getElementById("title");
const text = document.getElementById("text");
const next = document.getElementById("nextBtn");

let current = -1;
let deck = [];

function shuffleDeck() {
    deck = cards.map((_, index) => index);

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function randomCard() {
    if (deck.length === 0) {
        shuffleDeck();

        title.textContent = "🔀 Új pakli!";
        text.textContent = "Minden kártya elfogyott. A pakli újrakeverve!";

        card.classList.remove("flip");

        return;
    }

    current = deck.pop();

    title.textContent = cards[current].title;
    text.textContent = cards[current].text;

    card.classList.remove("flip");
}

randomCard();

card.onclick = () => {
    card.classList.toggle("flip");
};

next.onclick = () => {
    card.classList.remove("flip");

    setTimeout(() => {
        randomCard();
    }, 250);
};