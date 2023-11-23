function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let lastGardenPlot: boolean | number;
  let nextGardenPlot: boolean | number;
  let availablePlots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    lastGardenPlot = flowerbed[i - 1] ? flowerbed[i - 1] : false;
    nextGardenPlot = flowerbed[i + 1] ? flowerbed[i + 1] : false;

    if (!flowerbed[i] && !lastGardenPlot && !nextGardenPlot) {
      availablePlots++;
      flowerbed[i] = 1;
    }
  }

  return availablePlots >= n;
}
