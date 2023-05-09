export function calculateWeekendDays(start, end, timeDimension) {
    let weekendDays = 0;
    while (start <= end) {
      const currentDayOfWeek = start.getDay();
      if (currentDayOfWeek === 0 || currentDayOfWeek === 6) {
        weekendDays++;
      }
      start = new Date(+start + timeDimension);
    }
    return weekendDays;
}
  
export function calculateWeekdays(start, end, timeDimension, total) {
    let weekdays = Math.ceil(total / timeDimension);
    while (start <= end) {
      const currentDayOfWeek = start.getDay();
      if (currentDayOfWeek === 0 || currentDayOfWeek === 6) {
        weekdays--;
      }
      start = new Date(+start + timeDimension);
    }
    return weekdays;
}

  