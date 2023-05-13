export function calculateWeekendDays(start, end, timeDimension, selectedDayType, total) {
    let weekendDays = 0;
    let weekdays = Math.ceil(total / timeDimension);
    while (start <= end) {
      const currentDayOfWeek = start.getDay();
      if (currentDayOfWeek === 0 || currentDayOfWeek === 6) {
        weekendDays++;
      }
      start = new Date(+start + timeDimension);
    }
    if (selectedDayType === 'weekends') {
      return weekendDays;
    } else if (selectedDayType === 'weekdays') {
      return weekdays-weekendDays;
    }
    
}


  