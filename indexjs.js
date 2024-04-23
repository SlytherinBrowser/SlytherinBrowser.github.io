
 function menuking() {
        window.location.href = "menu.html";
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
        window.open(searchUrl, '_blank');
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
                window.open(searchUrl, '_blank');
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
        calculatorContainer.style.top = `${triggerButtonRect.top - (calculatorContainer.offsetHeight / 0.7) + (triggerButton.offsetHeight / 2)}px`;
        calculatorContainer.style.left = `${triggerButtonRect.right/1.7}px`;
    } else {
        // Skritje kalkulatorja
        calculatorContainer.style.display = 'none';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = /[0-9+\-*\/.=]|Enter|Backspace|Escape/;

    if (!validKeys.test(key)) {
        return;
    }

    if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearDisplay();
    } else if (key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else {
        appendToDisplay(key);
    }
});

function appendToDisplay(value) {
    display.value += value;
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