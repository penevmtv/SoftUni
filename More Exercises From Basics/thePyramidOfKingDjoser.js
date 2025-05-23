function solve(base, increment) {
    let allLayers = Math.ceil(base / 2);
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    for (let currentLayer = 1; currentLayer <= allLayers; currentLayer++) {
        if (currentLayer === allLayers) {
            gold += Math.pow(base, 2);
        } else {
            stone += Math.pow(base - 2, 2);
            if (currentLayer % 5 !== 0)
                marble += 4 * base - 4;
            else
                lapisLazuli += 4 * base - 4;
        }
        base -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(allLayers * increment)}`);
}