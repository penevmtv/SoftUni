function worldSwimmingRecord(recordSec, distanceMeters, secPerMeter) {
    let timesSlow = Math.floor(distanceMeters / 15);
    let secSlow = timesSlow * 12.5;

    let time = distanceMeters * secPerMeter + secSlow;

    if (time < recordSec)
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    else
        console.log(`No, he failed! He was ${(time - recordSec).toFixed(2)} seconds slower.`);

}