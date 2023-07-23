export const getTimeNow = () => {
  const currentDate = new Date();

  // Get the weekday (e.g., "Monday", "Tuesday", etc.)
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const weekday = weekdays[currentDate.getDay()];

  // Get the day, month, and year components
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const year = currentDate.getFullYear();

  // Get the time (in 24-hour format) components
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the date and time
  return `${weekday} ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
