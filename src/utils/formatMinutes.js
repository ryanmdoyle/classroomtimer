const formatMinutes = (time) => { //time is in seconds remaining
  let seconds = time;
  const minutes = (seconds % 60 === 0) ? ((seconds / 60) < 10 ? "0" + seconds / 60 : seconds / 60) : (Math.floor(seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60));
  seconds = (seconds % 60 === 0) ? "00" : ((seconds % 60 < 10) ? "0" + (seconds % 60) : seconds % 60)
  return minutes + ":" + seconds;
}

export default formatMinutes;