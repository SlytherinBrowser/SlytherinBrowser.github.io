document.addEventListener('DOMContentLoaded', (event) => {
    let titles = ["SlytherinBrowser", "BestBrowser"];
    let icons = ["Slytherin.png", "sea.png"];
    let currentIndex = 0;

    function changeTitleAndIcon() {
        document.title = titles[currentIndex];
        document.getElementById('favicon').href = icons[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }

    // Spreminjanje naslova in ikone vsake 3 sekunde (3000 ms)
    setInterval(changeTitleAndIcon, 3000);
});

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
            addShortcut();
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

   f (key === 'Enter') {
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
