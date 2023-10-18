var number = function(busStops) {
  let peopleOnBus = 0;
  let peopleOffBus = 0;

  busStops.map(busStop => {
    peopleOnBus += busStop[0];
    peopleOffBus += busStop[1];
  });

  return peopleOnBus - peopleOffBus;
}

console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
