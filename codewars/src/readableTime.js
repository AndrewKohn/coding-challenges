function humanReadable(seconds) {
  let readableTime = [];

  for (let i = 0; i < 3; i++) {
    let count = i, num = seconds;
    while (count !== 0) {
      num = Math.floor(num / 60);
      count--;
    }

    i === 2 && num.toString().split('').length > 1 ? readableTime.push((num).toString()) :
      (num % 60).toString().split('').length > 1 ? readableTime.push((num % 60).toString()) : readableTime.push(`0${num % 60}`);
  }

  return readableTime.reverse().join(':');
}
