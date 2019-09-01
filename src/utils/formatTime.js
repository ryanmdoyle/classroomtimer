const formatTime = (hour, min) => {
  // returns a string formatted in a 12 hr format, such as '1:34 am' from timestamp
  let hours = hour;
  if (hour === 0) hours = 12;
  if (hour >= 13) hours = hour - 12;

  const mins = (min < 10) ? `0${min}` : min;
  const ampm = (hour < 12) ? 'am' : 'pm';

  return `${hours}:${mins} ${ampm}`;
};

export default formatTime;
