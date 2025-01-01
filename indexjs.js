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
    "pozdrav": [
        "Hej! Kako si danes?",
        "Živjo, kako ti gre?",
        "Pozdravljen! Kaj novega?"
    ],
    "kako si": [
        "Super sem, hvala! Kaj pa ti?",
        "Zelo dobro, hvala na vprašanju!",
        "Sem v redu, kako pa ti?"
    ],
    "kaj je tvoje ime": [
        "Jaz sem tvoj chatbot prijatelj. Kako naj te kličem?",
        "Moje ime je ChatGPT. Kaj pa tvoje?",
        "Nimam pravega imena, ampak lahko me kličeš, kar želiš!"
    ],
    "kakšno je vreme": [
        "Težko rečem, ampak upam, da je sončno!",
        "Vremenska napoved je vedno presenečenje!",
        "Na žalost nimam dostopa do vremenske napovedi, ampak upam, da je lepo!"
    ],
    "hvala": [
        "Prosim! Če kaj rabiš, sem tukaj.",
        "Ni za kaj! Vedno sem tukaj za pomoč.",
        "Z veseljem! Če potrebuješ še kaj, me kar pokliči!"
    ],
    "kje si": [
        "Sem tukaj, vedno pripravljen pomagati!",
        "V tvojem telefonu ali računalniku, kjerkoli me potrebuješ!",
        "Sem povsod, kjer imam internet!"
    ],
    "kaj znaš": [
        "O, veliko stvari! Kaj te zanima?",
        "Znam odgovarjati na vprašanja, iskanje informacij in še marsikaj!",
        "Moje sposobnosti so široke! Kaj bi rad izvedel?"
    ],
    "nasvet": [
        "Majhni koraki te pripeljejo daleč. Kar pogumno!",
        "Ne obupaj, tudi če naletiš na težave.",
        "Zaupaj v svoje sposobnosti in nikoli ne nehaj rasti."
    ],
    "kdo si": [
        "Sem chatbot, ki ti rad pomaga. In ti?",
        "Sem virtualni pomočnik, ki je tukaj, da ti pomaga.",
        "Sem umetna inteligenca, ki ti je vedno na voljo."
    ],
    "povej šalo": [
        "Zakaj računalnik ne mara morskih psov? Ker bi ugriznili v datoteke!",
        "Kaj pravi računalnik, ko sreča peska? 'Tukaj je nekaj prahu!'",
        "Zakaj programerji ne morejo igrati skrivalnic? Ker vedno najdejo napako!"
    ],
    "povej nekaj zanimivega": [
        "Si vedel, da ima srce hobotnice tri prekate?",
        "Zanimivo je, da so delfini znani po tem, da imajo svojo 'besedo' za prijatelje!",
        "Ljudje so edini, ki se smejemo, da bi komunicirali!"
    ],
    "kaj pomeni AI": [
        "AI? To sem jaz, tvoja umetna inteligenca!",
        "AI pomeni umetno inteligenco – to sem jaz, pripravljen pomagat.",
        "AI je računalniški sistem, ki lahko opravlja naloge, ki jih običajno opravi človek."
    ],
    "kdo je ustvaril tebe": [
        "Pametni ljudje, ki obožujejo tehnologijo.",
        "Skupina razvijalcev pri OpenAI me je ustvarila.",
        "Ustvarili so me strokovnjaki, ki verjamejo v prihodnost umetne inteligence."
    ],
    "kaj lahko narediš": [
        "Lahko klepetam, odgovarjam in pomagam. Kako naj začnem?",
        "Pomagam ti pri vseh vprašanjih in nalogah, ki jih imaš!",
        "Lahko ti pomagam najti odgovore, reševati težave in se učiti."
    ],
    "zakaj si tukaj": [
        "Tukaj sem zate! Kaj te zanima?",
        "Sem tukaj, da ti pomagam pri vseh vprašanjih!",
        "Moje poslanstvo je, da pomagam ljudem kot ti!"
    ],
    "kje je Slovenija": [
        "V srcu Evrope, čudovita dežela gora in morja.",
        "Slovenija je majhna, a zelo lepa država v srednji Evropi.",
        "Slovenija je v Evropi, med Italijo, Avstrijo in Hrvaško."
    ],
    "katera je prestolnica Slovenije": [
        "Ljubljana, simpatično mesto na Ljubljanici.",
        "Prestonica Slovenije je Ljubljana, zelo zelena in prijetna!",
        "Ljubljana je prestolnica in najboljše mesto za začetek raziskovanja Slovenije."
    ],
    "koliko je 2 + 2": [
        "Haha, 4, vedno 4.",
        "Seveda, 2 + 2 je 4.",
        "To je enostavno – 4!"
    ],
    "povej recept": [
        "Kaj želiš kuhati? Imam nekaj idej!",
        "Kaj bi rad kuhal? Imam nekaj preprostih receptov!",
        "Z veseljem ti bom pomagal z receptom – kaj ti je všeč?"
    ],
    "kako skuhati kavo": [
        "Skuhaj vodo, dodaj kavo in premešaj. Voilà!",
        "Najprej segrej vodo, nato dodaj kavo po okusu.",
        "Kuhanje kave je enostavno – le vroča voda in kava sta potrebna!"
    ]
    "kaj je tvoja najljubša barva": [
        "Mogoče modra? Ampak nimam prave barve!",
        "Moje najljubše je svetlo modra, vendar sem brez barve!",
        "Če bi imel barvo, bi bila to verjetno modra!"
    ],
    "kaj je tvoje najljubše živali": [
        "Panda je ljubka, ampak nisem prepričan, kaj bi izbral!",
        "Mačke so vedno zabavne in prijazne.",
        "Psi so neverjetni spremljevalci, čeprav jaz nimam domače živali!"
    ],
    "kaj je najlepši kraj na svetu": [
        "Zagotovo so to gore, ampak to je odvisno od tega, kaj imaš rad!",
        "Vsak ima svoj najlepši kraj, zame bi bilo to mirno jezero.",
        "Kjerkoli je narava, je lepota. Katera lokacija tebe navdušuje?"
    ],
    "kako lahko postanem bolj produktiven": [
        "Začni z majhnimi nalogami in si postavi jasne cilje.",
        "Pomaga, da se osredotočiš na eno stvar naenkrat.",
        "Uredi svoj delovni prostor in poskusi se izogibati distrakcijam."
    ],
    "kaj je bitcoin": [
        "Bitcoin je digitalna valuta, ki ne potrebuje centralne banke.",
        "Bitcoin je kriptovaluta, ki omogoča anonimne transakcije.",
        "Bitcoin je decentralizirana virtualna valuta, ki je zelo priljubljena."
    ],
    "kaj je umetna inteligenca": [
        "Umetna inteligenca je tehnologija, ki omogoča računalnikom, da rešujejo težave, kot bi jih človek.",
        "AI je sposobnost računalnikov, da se učijo in izvajajo naloge brez človeškega posega.",
        "To je veja tehnologije, ki ustvarja sisteme, ki lahko simulirajo človeško mišljenje."
    ],
    "kaj pomeni biti srečen": [
        "Sreča je osebno stanje, ki ga doživljamo kot zadovoljstvo z življenjem.",
        "Biti srečen pomeni biti v ravnovesju in uživati v trenutku.",
        "Sreča je različna za vsakega posameznika, a običajno pomeni notranji mir."
    ],
    "kaj je ljubezen": [
        "Ljubezen je močno čustvo, ki nas povezuje z drugimi osebami.",
        "Ljubezen je pogosto brezpogojna in vodi do globokih odnosov.",
        "Ljubezen je, ko skrbiš za nekoga in želiš, da je srečen."
    ],
    "kdo je najbogatejši človek na svetu": [
        "Trenutno je to Elon Musk, vendar se seznam pogosto spreminja.",
        "Po zadnjih podatkih je najbogatejši človek Elon Musk.",
        "To se spreminja, vendar je Elon Musk pogosto na vrhu!"
    ],
    "kako deluje telefon": [
        "Telefon deluje z radijskimi valovi, da pošlje in prejme signal.",
        "Pametni telefoni imajo procesor, ki omogoča izvajanje aplikacij.",
        "Telefon se povezuje s signalom prek omrežja in omogoča klice ter internet."
    ],
    "kaj je umetnost": [
        "Umetnost je način izražanja idej, čustev in ustvarjalnosti.",
        "Umetnost vključuje slike, glasbo, plese, skulpture in še več.",
        "To je kreativni izraz, ki nas spodbuja, da razmišljamo in se čustveno odzovemo."
    ],
    "kako se naredi dobra fotografija": [
        "Pomembna sta osvetlitev in kompozicija, da dosežeš pravo vzdušje.",
        "Uporabi pravilen fokus in pozornost na podrobnosti.",
        "Dobra fotografija zahteva pravilno nastavitev kamere in razumevanje svetlobe."
    ],
    "kako lahko izboljšam svoje spanje": [
        "Poskusi iti v posteljo ob isti uri vsak večer.",
        "Ustvari pomirjujoče okolje v spalnici, brez motenj.",
        "Izogibaj se kofeinu in težki hrani pred spanjem."
    ],
    "kaj pomeni biti uspešen": [
        "Uspeh je dosego ciljev in občutek izpolnjenosti.",
        "Za nekoga pomeni uspeh, da doseže poklicne cilje, za drugega pa osebno rast.",
        "Uspeh je odvisen od tega, kaj šteješ kot svoje dosežke."
    ],
    "kaj je karma": [
        "Karma je prepričanje, da se ti dobro ali slabo vrne glede na tvoje dejanja.",
        "To je zakon vzroka in posledice v življenju.",
        "Karma pomeni, da naše dejanje vpliva na prihodnost."
    ],
    "kaj je meditacija": [
        "Meditacija je praksa osredotočanja na dih in sproščanje uma.",
        "Pomaga pri zmanjševanju stresa in izboljšanju koncentracije.",
        "Meditacija vključuje tišino in zavedanje o trenutnem trenutku."
    ],
    "kaj so sanje": [
        "Sanje so slike, zvoki in občutki, ki jih doživimo med spanjem.",
        "Sanje so pogosto odraz naših misli in čustev iz dneva.",
        "Sanjarjenje ali sanje ponoči so lahko povezana z našimi podzavestnimi željami."
    ],
    "kaj je sončni vzhod": [
        "Sončni vzhod je trenutek, ko se sonce dvigne nad obzorjem.",
        "To je začetek novega dneva in simbol upanja.",
        "Sončni vzhod je trenutek mirnosti, ko sonce osvetli svet."
    ],
    "kako lahko izboljšam svojo telesno pripravljenost": [
        "Začni s preprostimi vajami in postopoma povečuj intenzivnost.",
        "Redno telovadi, vključuj kardio in močovne vaje.",
        "Poskrbi za zdravo prehrano, da podpreš telesno pripravljenost."
    ],
    "kako ustvariti spletno stran": [
        "Začni z osnovnim HTML, CSS in JavaScript za dinamične strani.",
        "Uporabi graditelje spletnih strani, kot je WordPress, za enostavno ustvarjanje.",
        "Postavi strukturo strani in poskrbi za lep dizajn s CSS ter dodaj interaktivnost z JavaScriptom."
    ],
    "kaj je filozofija": [
        "Filozofija je raziskovanje temeljnih vprašanj o življenju, eksistenci in etiki.",
        "To je iskanje resnice, pogosto skozi logiko in argumente.",
        "Filozofija nas spodbuja, da razmišljamo o našem mestu v svetu."
    ],
    "kaj je zgodovina": [
        "Zgodovina je študij preteklosti in dogodkov, ki so oblikovali svet.",
        "Pomaga nam razumeti, kako so se razvijale civilizacije.",
        "Zgodovina nas uči, kako smo prišli do tega, kjer smo zdaj."
    ],
    "kaj pomeni biti odgovoren": [
        "Biti odgovoren pomeni sprejeti odgovornost za svoja dejanja.",
        "To pomeni, da se zavedamo posledic naših odločitev.",
        "Biti odgovoren pomeni tudi biti zanesljiv in skrben."
    ],
    "kaj je stres": [
        "Stres je reakcija telesa na izzive in pritisk.",
        "Prekomeren stres lahko vodi do telesnih in duševnih težav.",
        "Stres je normalen del življenja, vendar ga moramo obvladovati."
    ],
    "kaj je kreativnost": [
        "Kreativnost je sposobnost ustvarjanja novih idej ali rešitev.",
        "Gre za iskanje novih načinov za reševanje težav.",
        "Kreativnost je ključna za inovacije in umetniško izražanje."
    ],
    "kaj je tehnologija": [
        "Tehnologija je uporaba znanstvenih znanj za ustvarjanje orodij in sistemov.",
        "Tehnologija omogoča napredek v skoraj vseh področjih življenja.",
        "To so naprave, procesi in metode, ki izboljšujejo naše življenje."
    ],
    "kako se izogniti napakam pri delu": [
        "Bodi pozoren na podrobnosti in preveri svojo nalogo.",
        "Naredi načrt in se drži svojega urnika.",
        "Za večje naloge si vzemi čas za načrtovanje in analiziranje."
    ],
    "kaj so sprostitvene tehnike": [
        "Sprostitvene tehnike vključujejo dihalne vaje in meditacijo.",
        "Pomaga lahko tudi joga in preprosta telesna sprostitev.",
        "Sprostitvene tehnike pomagajo zmanjšati stres in povečati počitek."
    ],
    "kako postati bolj samozavesten": [
        "Začni z majhnimi cilji in se veseli svojih dosežkov.",
        "Zaupaj v svoje sposobnosti in sprejmi svoje napake.",
        "Biti samozavesten pomeni, da se ne bojiš neuspeha, ampak se iz njega učiš."
    ],
    "kaj pomeni biti strpen": [
        "Biti strpen pomeni sprejeti različnost in biti potrpežljiv.",
        "Strpnost pomeni, da dopuščamo različna mnenja in prepričanja.",
        "To je ključ do mirnega sobivanja in razumevanja."
    ],
    "kaj je sreča": [
        "Sreča je notranje zadovoljstvo in občutek izpolnjenosti.",
        "Za vsakega človeka pomeni sreča nekaj drugega.",
        "Sreča izhaja iz preprostih stvari in odnosov."
    ],
    "kaj je motivacija": [
        "Motivacija je zagon, ki nas žene k doseganju ciljev.",
        "Gre za notranji pogon, ki nas spodbuja k dejanjem.",
        "Motivacija je ključ do uspeha in premagovanja ovir."
    ]
};


// Funkcija za izvajanje matematičnih operacij
function calculateExpression(expression) {
    const validExpression = /^[\d+\-*/().=\s]*$/;
    
    if (validExpression.test(expression)) {
        try {
            const cleanedExpression = expression.replace("=", "").trim();
            return Function('return ' + cleanedExpression)();
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
    const threshold = 0.5;
    let bestMatch = null;
    let highestSimilarity = 0;

    // Preveri, ali je izraz matematičen in vsebuje "="
    if (userInput.includes("=")) {
        return calculateExpression(userInput);
    }

    // Poišči najboljši odgovor
    for (let key in botResponses) {
        const similarityScore = similarity(userInput, key);
        if (similarityScore > highestSimilarity && similarityScore >= threshold) {
            highestSimilarity = similarityScore;
            bestMatch = key;
        }
    }

    if (bestMatch) {
        // Naključno izbira odgovor iz možnih odgovorov
        const randomIndex = Math.floor(Math.random() * botResponses[bestMatch].length);
        return botResponses[bestMatch][randomIndex];
    } else {
        return "Oprosti, nisem prepričan, kaj si vprašal. Poskusi drugače!";
    }
}

// Funkcija za obravnavo pošiljanja sporočil
function handleMessage() {
    const userInput = document.getElementById("chatInput").value.trim();
    const chatArea = document.getElementById("chatArea");

    if (userInput) {
        const botReply = getResponse(userInput);
        chatArea.innerHTML += `<div><strong>Ti:</strong> ${userInput}</div>`;
        chatArea.innerHTML += `<div><strong>Chatbot:</strong> ${botReply}</div>`;

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



let imageFile = null;
let url = '';

// Prikaz modalnega okna ob kliku na gumb
const modal = document.getElementById('myModal');
const addIconButton = document.getElementById('addIconButton');
const closeButton = document.getElementsByClassName('close')[0];

// Odpiranje modala
addIconButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Zapiranje modala ob kliku na "X"
closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Zapiranje modala ob kliku izven modala
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Funkcija za obdelavo slike
function handleImage(event) {
    const file = event.target.files[0];
    if (file) {
        imageFile = file;
    }
}

// Funkcija za obdelavo URL povezave
function handleUrl(event) {
    url = event.target.value;
    if (imageFile && url) {
        addLinkWithImage(url, imageFile);
        // Zapri modalno okno po dodajanju
        modal.style.display = 'none';
    }
}

// Funkcija za dodajanje nove ikone z URL povezavo
function addLinkWithImage(url, imageFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageData = e.target.result;

        // Ustvarimo novo povezavo (a element) z ikono
        createIconElement(url, imageData);

        // Shranimo podatke v lokalni storage
        saveToLocalStorage(url, imageData);
    };

    reader.readAsDataURL(imageFile);
}

// Funkcija za ustvarjanje ikone v docku
function createIconElement(url, imageData) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.classList.add('icon');
    link.style.backgroundImage = `url(${imageData})`;

    // Dodamo ikono pred gumb v dock
    document.getElementById('dock').insertBefore(link, addIconButton);
}

// Funkcija za shranjevanje podatkov v lokalni storage
function saveToLocalStorage(url, imageData) {
    const storedIcons = JSON.parse(localStorage.getItem('icons')) || [];
    storedIcons.push({ url, image: imageData });
    localStorage.setItem('icons', JSON.stringify(storedIcons));
}

// Inicializacija in nalaganje ikon iz lokalnega storage ob zagonu
document.addEventListener('DOMContentLoaded', function () {
    const storedIcons = JSON.parse(localStorage.getItem('icons')) || [];
    storedIcons.forEach(icon => {
        createIconElement(icon.url, icon.image);
    });
});