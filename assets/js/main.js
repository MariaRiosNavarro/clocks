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

const wrapperCostum = document.querySelector('[data-js="customClock"]');
const dateInput = document.querySelector('[data-js="dateInput"]');
const timeInput = document.querySelector('[data-js="timeInput"]');
const form = document.querySelector('[data-js="form"]');

let costumDate;
let costumClock;

const updateCustomClock = () => {
  let outYear = costumDate.getFullYear();
  let outMonthIndex = costumDate.getMonth();
  let outDay = costumDate.getDate();
  let outHour = costumDate.getHours();
  let outMinute = costumDate.getMinutes();
  let outSeconds = costumDate.getSeconds();
  let outWeekDay = costumDate.toLocaleDateString("default", {
    weekday: "long",
  });
  let outMonthName = monate[outMonthIndex];

  wrapperCostum.innerHTML = `
    <div class="flex-row">
    <div class="flex-column">
      <span class="spanStyle">${outWeekDay}</span>
      <span class="spanStyle">Wochentag</span>
    </div>
    <div class="flex-column">
      <span class="spanStyle">${outDay}</span>
      <span class="spanStyle">Tag</span>
    </div>
    <div class="flex-column">
      <span class="spanStyle">${outMonthName}</span>
      <span class="spanStyle">Monat</span>
    </div>
    <div class="flex-column">
      <span class="spanStyle">${outYear}</span>
      <span class="spanStyle">Jahr</span>
    </div>
    </div>
    <div class="flex-row">
    <div class="flex-column">
      <span class="spanStyle">${outHour < 10 ? `0${outHour}` : outHour}</span>
      <span class="spanStyle">Stunden</span>
    </div>
    <div class="flex-column">
      <span class="spanStyle">${
        outMinute < 10 ? `0${outMinute}` : outMinute
      }</span>
      <span class="spanStyle">Minuten</span>
    </div>
    <div class="flex-column">
      <span class="spanStyle">${
        outSeconds < 10 ? `0${outSeconds}` : outSeconds
      }</span>
      <span class="spanStyle">Sekunden</span>
    </div>
    </div>

    `;

  costumDate.setSeconds(costumDate.getSeconds() + 1); // we add after 1 update 1 sec
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valueDate = dateInput.value;
  let valueDateArray = valueDate.split("-");
  let valueTime = timeInput.value;
  let valueTimeArray = valueTime.split(":");

  let year = Number(valueDateArray[0]);
  let month = Number(valueDateArray[1]) - 1;
  let day = Number(valueDateArray[2]);
  let hour = Number(valueTimeArray[0]);
  let minute = Number(valueTimeArray[1]);
  costumDate = new Date(year, month, day, hour, minute);
  updateCustomClock();
  setInterval(updateCustomClock, 1000); //we update the customClock allways after 1 sec
});

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

  // from 24 hours  to 12 hour for PM Clock
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

// Set interval after 1 sec

setInterval(clock, 1000);
