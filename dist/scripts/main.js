'use strict';

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function createCalendar(id, year, month) {
  const calendar = document.getElementById(id);
  const table = document.createElement('table');
  const header = document.createElement('tr');
  const nameDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  calendar.appendChild(table);
  for (let i = 0; i < nameDays.length; i++) {
    const th = document.createElement('th');
    header.appendChild(th).innerHTML = nameDays[i];
  };

  table.appendChild(header);

  const date = new Date(year, month - 1);
  let firstDay = date.getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;
  let nextDayToAdd = 1 - firstDay;
  const countDays = getDaysInMonth(year, month);

  while (nextDayToAdd <= countDays) {
    const week = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const day = document.createElement('td');
      if (nextDayToAdd > 0 && nextDayToAdd <= countDays) {
        day.innerHTML = nextDayToAdd;
      }
      nextDayToAdd++;
      week.append(day);
    }
    table.append(week);
  }
  return table;
};
createCalendar('calendar', 2012, 9);
