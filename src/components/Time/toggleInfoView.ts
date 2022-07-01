export const toggleInfoView = (infoView: string) => {
  if (infoView === "zendate") {
    return `
      <h1>This is the current date in zen calendar</h1>
    `;
  } else if (infoView === "holiday") {
    return `
      <h1>Holidays are first day of every Habit and share the Habit name.</h1>
      <h1>zenWeek is a special 5-6 day Holiday at the end of the year.</h1>
      <h1>On leap years, the extra day is added to zenWeek.</h1>
    `;
  } else if (infoView === "solstice") {
    return `
      <h1>Solstice is the maximum intensity point of seasonal change, marking the end and halfway point of the year.</h1>
    `;
  } else if (infoView === "equinox") {
    return `
      <h1>Equinox is the center intensity point of seasonal transition, and defines the quarters of the year.</h1>
    `;
  } else if (infoView === "zentime") {
    return `
      <h1>A day begins around sunrise (not midnight) and is divided into 11 portions called Sessions.</h1>
      <h1>The Sessions have names which reference time of day.</h1>
      <h1>Session time is a decimal, with the dimes and pennies being Whiles and Moments.</h1>
    `;
  } else if (infoView === "habits") {
    return `
      <h1>Each year has 8 Habits, and one extra zenWeek.</h1>
      <h1>Each Habit is 45 days, with 9 weeks of 5 days.</h1>
      <h1>Habits begin and end at Solstice, Equinox, or a season change date.</h1>
    `;
  } else if (infoView === "moment") {
    return `
      <h1>Moments and Whiles divide each Session into a decimal grid.</h1>
      <h1>Click the white Smiley Face to view all unit comparison charts.</h1>
      <h1>Sessions are about 2.2 hours. Whiles are about 13 minutes. Moments are exactly 80 seconds.</h1>
    `;
  } else if (infoView === "instant") {
    return `
      <h1>Instant and second are equivalent.</h1>
      <h1>This is for the sake of compatibility.</h1>
      <h1>There are 80 Instants in a Moment, 800 per While, and 8000 per Session.</h1>
    `;
  } else if (infoView === "newzen") {
    return `
      <h1>The newZen is the end and beginning of the year lasting five or six days, depending on leap year.</h1>
      <h1>This extra Cycle allows Habits to be symmetrical and equal length.</h1>
    `;
  } else {
    return `
      <h1>zenCalendar System</h1>
      <h1>A complete personal time and date system.</h1>
      <h1>A lightweight re-thinking of the Gregorian Calendar.</h1>
      <h1>Designed for simplicity and productivity with human mind and body.</h1>
    `;
  }
};
