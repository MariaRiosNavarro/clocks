let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

// Test all get methods

// console.log(today); //Tue Oct 10 2023 10:40:55 GMT+0200 (Mitteleuropäische Sommerzeit)
// console.log("toUTCString()->", today.toUTCString()); //Tue, 10 Oct 2023 08:41:03 GMT

// console.log("toLocaleDateString()->", today.toLocaleDateString()); //10.10.2023
// console.log(
//   `toLocaleDateString(("default", { weekday: "long" })->`,
//   today.toLocaleDateString("default", { weekday: "long" })
// ); //Dienstag
// console.log("toLocaleString()->", today.toLocaleString()); //10.10.2023, 10:41:17
// console.log("getTime()->", today.getTime()); //1696927286058
// console.log("getFullYear()->", today.getFullYear()); //2023
// console.log("getMonth()->", today.getMonth()); //9  !INDEX ->0 January
// console.log("getDate()->", today.getDate()); //10
// console.log("getDay()->", today.getDay()); //2  !INDEX -> 0 Sunday
// console.log("getSeconds()->", today.getSeconds()); //33
// console.log("getMilliseconds()->", today.getMilliseconds()); //549

// Aufgabe mit extra (aktualisieren/echte Uhr) // und anderen Zeit

// --FallB: Wenn ich eine andere Uhr benutzen wurde,  let today = new Date(1977, 0, 0, 0);

let clock = () => {
  // --FallB: Sollte hier dass auch:  today = new Date( new Date(today).setSeconds(new Date(today).getSeconds() + 1)
  let today = new Date();
  const wrapper = document.querySelector('[data-js="clock-wrapper"]');
  const wrapperPM = document.querySelector('[data-js="clock-wrapper2"]');

  let year = today.getFullYear();
  let monthIndex = today.getMonth();
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();
  let weekDay = today.toLocaleDateString("default", { weekday: "long" });
  let monthName = monate[monthIndex];

  // transformieren von 24 hours  into 12 hour for clock2 in wrapperPm
  let meridiem = "AM";
  let pmHour = 0;

  if (hour < 12) {
    meridiem = "AM";
  } else {
    meridiem = "PM";
    pmHour = hour - 12;
  }

  wrapper.innerHTML = `
<div class="flex-row">
<div class="flex-column">
  <span class="spanStyle">${weekDay}</span>
  <span class="spanStyle">Wochentag</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${day}</span>
  <span class="spanStyle">Tag</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${monthName}</span>
  <span class="spanStyle">Monat</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${year}</span>
  <span class="spanStyle">Jahr</span>
</div>
</div>
<div class="flex-row">
<div class="flex-column">
  <span class="spanStyle">${hour < 10 ? `0${hour}` : hour}</span>
  <span class="spanStyle">Stunden</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${minute < 10 ? `0${minute}` : minute}</span>
  <span class="spanStyle">Minuten</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${seconds < 10 ? `0${seconds}` : seconds}</span>
  <span class="spanStyle">Sekunden</span>
</div>
</div>

`;

  wrapperPM.innerHTML = `
<div class="flex-row">
<div class="flex-column">
  <span class="spanStyle">${weekDay}</span>
  <span class="spanStyle">Wochentag</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${day}</span>
  <span class="spanStyle">Tag</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${monthName}</span>
  <span class="spanStyle">Monat</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${year}</span>
  <span class="spanStyle">Jahr</span>
</div>
</div>
<div class="flex-row">
<div class="flex-column">
  <span class="spanStyle">${pmHour < 10 ? `0${pmHour}` : pmHour}</span>
  <span class="spanStyle">Stunden</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${minute < 10 ? `0${minute}` : minute}</span>
  <span class="spanStyle">Minuten</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${seconds < 10 ? `0${seconds}` : seconds}</span>
  <span class="spanStyle">Sekunden</span>
</div>
<div class="flex-column">
  <span class="spanStyle">${meridiem}</span>
</div>
</div>

`;
};

// Set interval jede secunde

setInterval(clock, 1000);
