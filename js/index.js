setInterval(() => {
    date = new Date();
    currentHour = date.getHours();
    currentMinute = date.getMinutes();
    currentSecond = date.getSeconds();
    hourRotation = 30 * currentHour  + currentMinute / 2;
    minuteRotation = 6 * currentMinute;
    secondRotation = 6 * currentSecond;

    hour.style.transform = `rotate(${hourRotation}deg)`
    minute.style.transform = `rotate(${minuteRotation}deg)`
    second.style.transform = `rotate(${secondRotation}deg)`
}, 1000);