function aqua(length, width, high, percent) {
  let allVolumeCm3 = length * width * high;

  let allVolumeDm3 = allVolumeCm3 / 1000;


  let realVolume = allVolumeDm3 - allVolumeDm3 * (percent / 100);
  console.log(realVolume);

}