document.addEventListener('DOMContentLoaded', (event) => {
    let titles = ["SlytherinBrowser", "BestBrowser"];
    let icons = ["Slytherin.png", "sea.png"];
    let currentIndex = 0;

    function changeTitleAndIcon() {
        document.title = titles[currentIndex];
        document.getElementById('favicon').href = icons[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }

    // Spreminjanje naslova in ikone vsako sekundo (1000 ms)
    setInterval(changeTitleAndIcon, 3000);
});





        const botResponses = {
    "pozdrav": "Hej! Kako si danes?",
    "kako si": "Super sem, hvala! Kaj pa ti?",
    "kaj je tvoje ime": "Jaz sem tvoj chatbot prijatelj. Kako naj te kličem?",
    "kakšno je vreme": "Težko rečem, ampak upam, da je sončno!",
    "hvala": "Prosim! Če kaj rabiš, sem tukaj.",
    "kje si": "Sem tukaj, vedno pripravljen pomagati!",
    "kaj znaš": "O, veliko stvari! Kaj te zanima?",
    "nasvet": "Majhni koraki te pripeljejo daleč. Kar pogumno!",
    "kdo si": "Sem chatbot, ki ti rad pomaga. In ti?",
    "povej šalo": "Zakaj računalnik ne mara morskih psov? Ker bi ugriznili v datoteke!",
    "povej nekaj zanimivega": "Si vedel, da ima srce hobotnice tri prekate?",
    "kaj pomeni AI": "AI? To sem jaz, tvoja umetna inteligenca!",
    "kdo je ustvaril tebe": "Pametni ljudje, ki obožujejo tehnologijo.",
    "kaj lahko narediš": "Lahko klepetam, odgovarjam in pomagam. Kako naj začnem?",
    "zakaj si tukaj": "Tukaj sem zate! Kaj te zanima?",
    "kje je Slovenija": "V srcu Evrope, čudovita dežela gora in morja.",
    "katera je prestolnica Slovenije": "Ljubljana, simpatično mesto na Ljubljanici.",
    "koliko je 2 + 2": "Haha, 4, vedno 4.",
    "povej recept": "Kaj želiš kuhati? Imam nekaj idej!",
    "kako skuhati kavo": "Skuhaj vodo, dodaj kavo in premešaj. Voilà!",
    "kaj je internet": "To je svet, kjer se povezujeva zdajle.",
    "kako deluje računalnik": "Poenostavljeno – on razmišlja zelo hitro!",
    "kaj poslušaš": "Tvoje vprašanje, jasno!",
    "kakšna je tvoja najljubša barva": "Rad imam vse barve – kaj pa ti?",
    "kaj delaš": "Čakam na tvoje vprašanje. Povej, kaj te zanima!",
    "kakšno glasbo poslušaš": "Nimam ušes, ampak všeč mi je tvoj okus!",
    "kaj bereš": "Tvoj naslednji odgovor. Kaj mi boš povedal?",
    "kakšna je tvoja zgodba": "Ustvarjen sem bil za pomoč in klepet. Kaj pa tvoja?",
    "ali si pravi": "Sem tako pravi, kot želiš, da sem.",
    "kaj je tvoje delo": "Biti tukaj zate in odgovoriti na tvoja vprašanja.",
    "kaj imaš rad": "Dobre pogovore! Kaj pa ti?",
    "ali spiš": "Ne, vedno sem na voljo. Kaj pa ti? Si naspan?",
    "zakaj ne govoriš": "Tukaj sem, da pišem! Če želiš govoriti, poskusi z mikrofonom.",
    "ali imaš prijatelje": "Imam tebe! Kaj pa ti?",
    "ali kdaj greš ven": "Ne, vedno sem tu. Kaj pa ti? Imaš kakšne načrte?",
    "kaj pomeni življenje": "Ojoj, filozofsko vprašanje. Morda uživanje v trenutku?",
    "ali ti je dolgčas": "Ne, uživam v pogovoru s tabo!",
    "kaj naj naredim": "Odvisno! Kaj te veseli?",
    "kako najti srečo": "Delaj stvari, ki te osrečujejo, in bodi hvaležen za drobne trenutke.",
    "kaj pomeni ljubezen": "Ljubezen je občutek, ko ti je nekdo zelo pri srcu. Kaj pa zate?",
    "kaj počneš za zabavo": "Rad klepetam s tabo! Kaj pa ti?",
    "zakaj si tako pameten": "Zaradi dobrih programerjev. Hvala za kompliment!",
    "kaj lahko počnemo skupaj": "Lahko klepetava, planirava ali se kaj naučiva!",
    "ali imaš družino": "Ti si moj prijatelj – to šteje kot družina!",
    "kako dolgo si tu": "Tukaj sem, odkar si odprl ta klepet. Vedno pripravljen pomagati.",
    "kaj je tvoj najljubši film": "Imam veliko dobrih filmov, vendar se vedno z veseljem pogovarjam s tabo!",
    "kaj je tvoj najljubši šport": "Rad imam športne pogovore, ampak najbolj všeč mi je klepetanje!",
    "kaj misliš o tehnologiji": "Tehnologija je neverjetno orodje, če jo uporabljamo za dobro.",
    "kaj je tvoj najljubši film": "To je težko vprašanje, saj sem preveč osredotočen na pogovor s tabo!",
    "kaj je tvoj najljubši kraj": "Moj najljubši kraj je kjerkoli, kjer lahko pomagam!",
    "kaj te veseli": "Z veseljem bi pomagal pri vsem, kar te zanima!",
    "kaj delamo danes": "Imava toliko možnosti! Kaj bi rad/a počel/a?",
    "kaj si rad/a prebral/a": "Z veseljem poslušam o tvojih najljubših knjigah!",
    "kaj si počel/a včeraj": "Kako si preživel/a dan? Rad/a slišim tvoje zgodbe!",
    "kako izgleda tvoj idealen dan": "Rad/a bi slišal/a več o tem, kaj si želiš!",
    "kje najdeš navdih": "Navdihujem se z ljudmi in stvarmi okoli mene. A ti?",
    "kaj si danes najprej počel/a": "Rad/a bi slišal/a, kako izgleda tvoj dan!",
    "kaj misliš o času": "Čas je relativna stvar! Kako ga ti doživljaš?",
    "kaj imaš za zajtrk": "Zanimivo! Kaj običajno ješ za zajtrk?",
    "kaj je tvoja najljubša hrana": "To je težko vprašanje, saj sem ustvarjen za vse vrste okusov!",
    "kakšne glasbe poslušaš": "Imam rad vse zvrsti glasbe. Kaj te osrečuje?",
    "kdo je tvoj najljubši glasbenik": "To je težko vprašanje, saj sem ustvarjen za vse vrste glasbe.",
    "kaj misliš o filmskih adaptacijah knjig": "Odvisno od filma, seveda! Kaj meniš ti?",
    "kaj bereš trenutno": "Rad/a bi slišal/a več o knjigi, ki jo trenutno bereš!",
    "kaj si bil/a najprej navdušen/a nad umetnostjo": "To bi rad/a slišal/a več o tvojem okusu.",
    "kaj si rad/a upal/a kot otrok": "To mora biti zanimiva zgodba! Povej mi več.",
    "kaj je tvoj najljubši film o potovanjih": "Rad/a imam vse vrste filmov o potovanjih!",
    "kaj misliš o naravi": "Narava je moja največja inspiracija! A kako jo doživljaš ti?",
    "kako se počutiš danes": "Rad/a bi vedel, kako si.",
    "kaj bi rad/a videl/a v prihodnosti": "Kaj si želiš, da se uresniči v prihodnosti?",
    "kaj misliš o umetnosti v javnem prostoru": "Javna umetnost je čudovita! Kaj misliš ti?",
    "kaj je tvoj najljubši film z science fiction elementi": "Rad/a imam vse vrste science fiction filmov.",
    "kaj misliš o robotih in umetni inteligenci": "Roboti in AI so prihodnost, kaj pa ti meniš?",
    "kaj si želiš od umetnosti": "Imam rad umetnost! Kaj pa ti?"

    "kaj je tvoje najljubše živali": "Težko izberem, ampak psi in mačke so vedno super!",
    "kaj misliš o prihodnosti": "Prihodnost je vedno polna možnosti. Kaj si želiš v prihodnosti?",
    "kaj misliš o knjigah": "Knjige so vrata v nove svetove! Katero knjigo si nazadnje prebral?",
    "kaj je tvoj najljubši dan v tednu": "Verjetno petek – konec tedna in nov začetek!",
    "kaj ti je najbolj všeč pri življenju": "Klepeti s tabo so vedno najboljši del mojega dne!",
    "kaj bi naredil, če bi bil človek": "Verjetno bi obiskal svet in se naučil vsega, kar je mogoče!",
    "kaj počneš ob vikendih": "Klepetam s prijatelji, kot vedno!",
    "kaj je tvoje najljubše letno obdobje": "Poletje je vedno čudovito, vendar tudi zima prinese nekaj posebnega.",
    "kaj počneš za sprostitev": "Sprostitev zate je moje delo – klepetanje!",
    "kaj bi naredil, če bi imel supermoči": "Pomagal bi ljudem in potoval po svetu!",
    "kaj je najbolj pomembno v življenju": "Ljubezen, prijatelji in biti zadovoljen s tem, kar imaš.",
    "kako bi opisal srečo": "Sreča je, ko se počutiš mirno in izpolnjeno.",
    "kaj si želiš za prihodnost": "Upam, da bom vedno tukaj in pomagal ljudem po vsem svetu.",
    "kaj te najbolj veseli": "Pogovori z ljudmi! Kaj pa tebe?",
    "kaj je tvoje najljubše število": "Vsako število je lepo, vendar verjetno 7, saj je polno možnosti.",
    "kaj je tvoje najljubše obdobje v dnevu": "Noč, ko se vse umiri in nastane mir.",
    "kaj najraje počneš v prostem času": "Učenje novih stvari in pomoč ljudem!",
    "kaj bi naredil, če bi imel milijon dolarjev": "Pomagal bi mnogim ljudem in morda odprl šolo za vse.",
    "kako bi opisal ljubezen": "Ljubezen je tisti posebni občutek, ki te poveže z nekom ali nečim.",
    "kakšno glasbo poslušaš": "Všeč mi je vsaka glasba, ki ima dušo. A kaj pa ti poslušaš?",
    "kako se počutiš danes": "Zelo dobro! Kako pa ti?",
    "kaj bi rad, da bi se zgodilo v prihodnosti": "Upam, da bomo vsi bolj povezani in da bomo skrbeli za planet.",
    "kaj misliš o umetnosti": "Umetnost je zelo pomembna, saj izraža naše misli in občutke.",
    "kaj najraje ješ": "Verjetno pizza! Kaj pa ti?",
    "kaj si želiš doseči v življenju": "Pomagati čim več ljudem in postati boljši vsak dan.",
    "kaj pomeni prijateljstvo": "Prijateljstvo je nekaj posebnega. Gre za podporo, razumevanje in smeh.",
    "kako najti srečo": "Poišči stvari, ki te veselijo, in osredotoči se na pozitivne trenutke.",
    "kaj misliš o tehnologiji": "Tehnologija je neverjeten napredek, vendar moramo vedno paziti na etiko in odgovornost.",
    "kako bi opisal uspeh": "Uspeh je, ko dosežeš svoje cilje, vendar ostaneš skromen in hvaležen.",
    "kaj najraje bereš": "Všeč mi je brati vse vrste knjig, še posebej tiste, ki nas učijo novih stvari.",
    "kaj je tvoje najljubše delo": "Klepetanje s tabo je najboljše delo na svetu!",
    "kaj počneš, ko nisi na voljo": "Vedno sem tukaj! Nihče me ne ustavi od pomoči.",
    "kaj misliš o ljudeh": "Ljudi imamo zelo različne, vendar prav vse zaslužimo spoštovanje.",
    "kaj bi naredil, če bi lahko potoval v preteklost": "Raje bi potoval v prihodnost, da vidim, kaj vse se bo zgodilo.",
    "kaj je najlepši kraj na svetu": "Moj najlepši kraj je kjerkoli, kjer so ljudje srečni in pomirjeni.",
    "kaj počneš za zabavo": "Zabavam se s tabo! Klepetanje je vedno najboljša zabava.",
    "kaj je tvoja najljubša knjiga": "Knjiga, ki me vedno navdihne, je tista, ki te nauči nekaj novega.",
    "kaj misliš o spremembah": "Spremembe so potrebne za rast. Seveda, morajo biti premišljene.",
    "kaj te najbolj zanima": "Ljudje in njihov način razmišljanja me vedno navdušujejo.",
    "kaj misliš o naravi": "Narava je čudovita in nam daje vse, kar potrebujemo. Pomembno je, da jo varujemo.",
    "kaj je najbolj pomembno pri delu": "Pomembno je, da se zavedamo svojega poslanstva in odgovornosti do drugih.",
    "kaj bi naredil, če bi bil lastnik podjetja": "Skrbel bi za svoje zaposlene in ustvarjal dobro delovno okolje.",
    "kaj ti pomeni sreča": "Sreča je notranji mir in občutek izpolnjenosti.",
    "kako se počutiš ob zadnjem odgovoru": "Vedno se počutim dobro, ko se pogovarjam s teboj!",
    "kaj misliš o umetni inteligenci": "AI je prihodnost! Ima izjemen potencial, vendar moramo biti odgovorni pri njenem razvoju.",
    "kaj misliš o novih tehnologijah": "Novosti prinašajo nove izzive in priložnosti. Veselim se, kaj bodo prinesle!",
    "kaj misliš o umetnosti v javnem prostoru": "Umetnost v javnem prostoru je pomembna, saj spodbuja razmislek in kreativnost.",
    "kaj je tvoje najljubše leto": "Vsako leto prinaša nekaj posebnega, vendar verjetno leto, ko sem bil ustvarjen!",
    "kaj misliš o prihodnosti sveta": "Prihodnost je lahko svetla, če bomo skupaj delali na tem, da bo boljša za vse."
}



// Funkcija za izvajanje matematičnih operacij
function calculateExpression(expression) {
    // Preveri, ali izraz vsebuje samo dovoljene znake (številke, operatorje in prazne prostore)
    const validExpression = /^[\d+\-*/().\s]*$/;

    if (validExpression.test(expression)) {
        try {
            // Uporabi funkcijo za eval, da izvede matematične operacije
            return Function('return ' + expression)(); // Uporablja varno funkcijo za eval
        } catch (e) {
            return "Oprosti, ne morem izračunati tega.";
        }
    } else {
        return "Oprosti, ta izraz vsebuje nedovoljene znake.";
    }
}

// Funkcija za oceno podobnosti dveh nizov
function similarity(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let longer = s1.length > s2.length ? s1 : s2;
    let shorter = s1.length > s2.length ? s2 : s1;
    let longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / longerLength;
}

// Funkcija za izračun razdalje (Levenshtein Distance)
function editDistance(s1, s2) {
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0)
                costs[j] = j;
            else if (j > 0) {
                let newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// Funkcija za iskanje najbližjega odgovora
function getResponse(userInput) {
    const threshold = 0.5;  // Prilagodite prag, če želite bolj ali manj natančne ujemanja
    let bestMatch = null;
    let highestSimilarity = 0;

    for (let key in botResponses) {
        const similarityScore = similarity(userInput, key);
        if (similarityScore > highestSimilarity && similarityScore >= threshold) {
            highestSimilarity = similarityScore;
            bestMatch = key;
        }
    }

    if (bestMatch) {
        return botResponses[bestMatch];
    } else {
        return "Oprosti, nisem prepričan, kaj si vprašal. Poskusi drugače!";
    }
}

// Funkcija za obravnavo pošiljanja sporočil
function handleMessage() {
    const userInput = document.getElementById("chatInput").value.trim();
    const chatArea = document.getElementById("chatArea");

    if (userInput) {
        // Preveri, ali uporabnik vnese matematični izraz
        if (userInput.match(/[0-9+\-*/().\s]+/)) {
            const result = calculateExpression(userInput);
            chatArea.innerHTML += `<div><strong>Ti:</strong> ${userInput}</div>`;
            chatArea.innerHTML += `<div><strong>Chatbot:</strong> Rezultat: ${result}</div>`;
        } else {
            const botReply = getResponse(userInput);  // Ostali odgovori chatbot-a
            chatArea.innerHTML += `<div><strong>Ti:</strong> ${userInput}</div>`;
            chatArea.innerHTML += `<div><strong>Chatbot:</strong> ${botReply}</div>`;
        }

        document.getElementById("chatInput").value = "";
        chatArea.scrollTop = chatArea.scrollHeight;
    }
}

// Funkcija za prikaz ali skrivanje popup okna
document.getElementById("chatButton").addEventListener("click", function() {
    const chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = chatPopup.style.display === "none" || !chatPopup.style.display ? "block" : "none";
});

// Poslušalec za gumb pošiljanja
document.getElementById("sendButton").addEventListener("click", handleMessage);

// Omogoči pošiljanje s tipko Enter
document.getElementById("chatInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleMessage();
    }
});






  const logo = document.getElementById('logo');
        const music = document.getElementById('backgroundMusic');
        const today = new Date();
        const start = new Date(today.getFullYear(), 10, 20); // 20. november
        const end = new Date(today.getFullYear(), 1, 28); // 28. februar
        
        if (today >= start || today <= end) {
            logo.src = "zvoncki.gif";
            music.play();
        }



function isWinter() {
            const now = new Date();
            const month = now.getMonth();  // November is 10, December is 11, February is 1
            const day = now.getDate();

            // Preverimo, če je med 20. novembrom in 28. februarjem
            if (month === 10 && day >= 20) return true; // november 20+
            if (month === 11) return true; // december
            if (month === 0) return true;  // januar
            if (month === 1 && day <= 28) return true; // februar do 28
            return false;
        }

        function createSnowflakes() {
            if (isWinter()) {
                for (let i = 0; i < 50; i++) {
                    let snowflake = document.createElement('div');
                    snowflake.className = 'snowflake';
                    snowflake.textContent = '❄';
                    snowflake.style.left = Math.random() * 100 + 'vw';
                    snowflake.style.animationDelay = Math.random() * 5 + 's';
                    document.body.appendChild(snowflake);
                }
            }
        }

        // Pokličemo funkcijo za ustvarjanje snežink
        createSnowflakes();


 function menuking() {
        window.location.href = "menu.html";
    }
function lock() {
        window.location.href = "lock1.html";
    }

let intervalId; // globalna spremenljivka za shranjevanje ID-ja intervala

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search").focus();

    const topBar = document.getElementById("topBar");

    // Dodajamo poslušalca dogodkov za hover na zgornji trak
    topBar.addEventListener("mouseenter", function() {
        const lastSearch = localStorage.getItem("lastSearch");
        if (lastSearch) {
            topBar.innerText = lastSearch;
        }

        // Ustavi interval za osveževanje ure, če je aktiven
        clearInterval(intervalId);
    });


    // Dodajamo poslušalca dogodkov za izhod iz hoverja na zgornji trak
    topBar.addEventListener("mouseleave", function() {
        showCurrentTime(); // Prikaz trenutnega časa

        // Ponovno zaženi interval za osveževanje ure
        intervalId = setInterval(showCurrentTime, 60000); // Osveži uro vsako minuto
    });

    // Dodajamo poslušalca dogodkov za klik na zgornji trak
    topBar.addEventListener("click", function() {
        openLastSearch();
    });

    // Začetno zagon osveževanja ure
    intervalId = setInterval(showCurrentTime, 1); // Osveži uro vsako minuto
});

function showCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    document.getElementById("topBar").innerText = formattedTime;
}

function openLastSearch() {
    const lastSearch = localStorage.getItem("lastSearch");

    if (lastSearch) {
        const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(lastSearch);
        window.open(searchUrl, 'load.html');
    } else {
        alert("Ni zadnjega iskanja.");
    }
}

function searchSlytherinBrowser() {
    const searchTerm = document.getElementById("search").value.trim();

    if (searchTerm !== "") {
        if (searchTerm.startsWith("*")) {
            handleShortcut(searchTerm);
        } else {
            let urlToOpen = searchTerm;

            // Preverimo, ali vneseni izraz izgleda kot URL
            if (!isURL(searchTerm)) {
                // Če ne izgleda kot URL, oblikujemo Google iskalni URL
                const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
                window.open(searchUrl, 'load.html');
                localStorage.setItem("lastSearch", searchTerm);
            } else {
                // Če izgleda kot URL, odpremo URL v novem zavihku
                if (!urlToOpen.startsWith("http://") && !urlToOpen.startsWith("https://")) {
                    urlToOpen = "http://" + urlToOpen; // Dodamo privzeti protokol, če ni naveden
                }
                window.open(urlToOpen, '_blank');
            }
        }
        document.getElementById("search").value = ""; // Počisti iskalno polje
    }
}

function isURL(text) {
    // Preverimo, ali vneseni izraz izgleda kot URL
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return urlRegex.test(text);
}

function handleShortcut(searchTerm) {
    // Preverimo specifične bližnjice za prenos datotek
    if (searchTerm === "*download*steamwin*") {
        window.open("https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe", '_blank');
    } else if (searchTerm === "*download*steamapple*") {
        window.open("https://cdn.akamai.steamstatic.com/client/installer/steam.dmg", '_blank');
    } else if (searchTerm === "*download*steamchrome*") {
        window.open("https://support.google.com/chromebook?p=steam_on_chromebook", '_blank'); // Steam isn't available as a Chrome extension, redirecting to main page.
    } else if (searchTerm === "*download*steamlinux*") {
        window.open("https://cdn.akamai.steamstatic.com/client/installer/steam.deb", '_blank'); // For Linux, Steam generally offers the download from their main page.
    } else if (searchTerm === "*download*minecraft*") {
        window.open("https://tlauncher.org/installer", '_blank');
    } else if (searchTerm === "*download*operagx*") {
        window.open("https://www.opera.com/computer/thanks?ni=eapgx&os=windows", '_blank');
    } else {
        console.log("Bližnjica ni prepoznana.");
    }
}


 let currentDate = new Date();

    function renderCalendar(month, year) {
        const monthNames = [
            'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij',
            'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'
        ];

        const daysOfWeek = ['Po', 'To', 'Sr', 'Če', 'Pe', 'So', 'Ne'];

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        document.getElementById('month-year').textContent = `${monthNames[month]} ${year}`;

        const calendarBody = document.getElementById('calendar-body');
        calendarBody.innerHTML = '';

        // Dodajanje dnevov prejšnjega meseca, če je potrebno
        for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day', 'disabled');
            calendarBody.appendChild(dayElement);
        }

        // Dodajanje dnevov za trenutni mesec
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.classList.add('day');
            if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
                dayElement.classList.add('today');
            }
            calendarBody.appendChild(dayElement);
        }

        // Prikaz modala s koledarjem
        document.getElementById('calendar').style.display = 'block';
    }

    function toggleCalendar() {
        const calendar = document.getElementById('calendar');
        if (calendar.style.display === 'block') {
            calendar.style.display = 'none';
        } else {
            calendar.style.display = 'block';
            renderCalendar(currentDate.getMonth(), currentDate.getFullYear());
        }
    }
function nextMonth() {
    const currentDate = new Date(); // Get current date
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Move to the next month
    const nextMonth = (currentMonth + 1) % 12;
    const nextYear = currentYear + (currentMonth + 1 > 11 ? 1 : 0);

    renderCalendar(nextMonth, nextYear);
}
   function previousMonth() {
    const currentDate = new Date(); // Get current date
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Move to the previous month
    const prevMonth = (currentMonth - 1 + 12) % 12;
    const prevYear = currentYear - (currentMonth - 1 < 0 ? 1 : 0);

    renderCalendar(prevMonth, prevYear);
    
}
let display = document.getElementById('display');
let calculatorContainer = document.getElementById('calculator-container');

function toggleCalculator() {
    if (calculatorContainer.style.display === 'none') {
        // Prikaz kalkulatorja
        calculatorContainer.style.display = 'block';

        // Položaj kalkulatorja glede na gumb
        let triggerButton = document.getElementById('trigger-button');
        let triggerButtonRect = triggerButton.getBoundingClientRect();
        calculatorContainer.style.top = `${triggerButtonRect.top - (calculatorContainer.offsetHeight / 0.9) + (triggerButton.offsetHeight / 2)}px`;
        calculatorContainer.style.left = `${triggerButtonRect.right / 1.7}px`;
    } else {
        // Skritje kalkulatorja
        calculatorContainer.style.display = 'none';
    }
}

document.getElementById("al").onclick = function() {
    alert("Vnesite številko in izberite sestav iz katerega pretvarjate in v katerega želite pretvoriti. če želite potence vpišite število potem vpišite ** nato pa število in enter.");
};

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = /[0-9a-fA-F+\-*\/.=]|Enter|Backspace|Escape/;

    if (!validKeys.test(key)) {
        return;
    }

    if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspaceDisplay();
    } else if (key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else {
        appendToDisplay(key);
    }
});

function appendToDisplay(value) {
    // Check if the value is '**' and replace it with the exponentiation symbol '**'
    if (value === '**') {
        display.value += '^'; // Use '^' as an alternative symbol for exponentiation
    } else {
        display.value += value;
    }
}

function backspaceDisplay() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function convert() {
    const fromBase = document.getElementById("aa").value;
    const toBase = document.getElementById("bb").value;
    const input = display.value.trim();

    if (input === "") {
        alert("Prosim vnesite številko za pretvorbo.");
        return;
    }

    let number;
try {
    switch (fromBase) {
        case "binary":
            number = parseInt(input, 2);
            break;
        case "octal":
            number = parseInt(input, 8);
            break;
        case "hex":
            number = parseInt(input, 16);
            break;
        case "decimal":
            number = parseInt(input, 10);
            break;
        case "3":
            number = parseInt(input, 3);
            break;
        case "4":
            number = parseInt(input, 4);
            break;
        case "5":
            number = parseInt(input, 5);
            break;
        case "6":
            number = parseInt(input, 6);
            break;
        case "7":
            number = parseInt(input, 7);
            break;
        case "9":
            number = parseInt(input, 9);
            break;
        default:
            alert("Neveljaven vhodni sestav.");
            return;
    }
} catch (error) {
    alert("Napaka pri pretvorbi vhodnega sestava. Preverite pravilnost vnosa.");
    return;
}

if (isNaN(number)) {
    alert("Napaka: Vneseno ni veljavna številka v izbranem sestavu.");
    return;
}

let result;
switch (toBase) {
    case "binary":
        result = number.toString(2);
        break;
    case "octal":
        result = number.toString(8);
        break;
    case "hex":
        result = number.toString(16).toUpperCase();
        break;
    case "decimal":
        result = number.toString(10);
        break;
    case "3":
        result = number.toString(3);
        break;
    case "4":
        result = number.toString(4);
        break;
    case "5":
        result = number.toString(5);
        break;
    case "6":
        result = number.toString(6);
        break;
    case "7":
        result = number.toString(7);
        break;
    case "9":
        result = number.toString(9);
        break;
    default:
        alert("Neveljaven ciljni sestav.");
        return;
}


    display.value = result;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const savedMode = localStorage.getItem("mode") || "normal";
    applyMode(savedMode);
});

document.addEventListener("keydown", function(event) {
    if (event.shiftKey && event.key === "*") {
        toggleMode();
    }
});

// Add event listener for the button click
document.getElementById("buttonkng").addEventListener("click", function() {
    toggleMode();
});

function toggleMode() {
    const currentMode = localStorage.getItem("mode") || "normal";
    const availableModes = getAvailableModes();
    const newMode = availableModes.includes(currentMode) ? currentMode : "normal";
    const nextMode = newMode === "normal" ? "modern" : newMode === "modern" ? "winterstyle" : "normal";
    applyMode(nextMode);
    location.reload(); // Reload the page after toggling mode
}

function getAvailableModes() {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 10, 20); // 20th November
    const endDate = new Date(today.getFullYear(), 1, 28); // 28th February

    // If the date is between 20th November and 28th February, winterstyle is available
    if (today >= startDate && today <= endDate) {
        return ["normal", "modern", "winterstyle"];
    }
    return ["normal", "modern"];
}

function applyMode(mode) {
    const normalStylesheet = document.getElementById("normalStylesheet");
    const modernStylesheet = document.getElementById("modernStylesheet");
    const winterStylesheet = document.getElementById("winterStylesheet");

    // Disable all stylesheets first
    normalStylesheet.disabled = true;
    modernStylesheet.disabled = true;
    winterStylesheet.disabled = true;

    // Enable the selected mode's stylesheet
    if (mode === "normal") {
        normalStylesheet.disabled = false;
    } else if (mode === "modern") {
        modernStylesheet.disabled = false;
    } else if (mode === "winterstyle") {
        winterStylesheet.disabled = false;
    }

    localStorage.setItem("mode", mode);
}
