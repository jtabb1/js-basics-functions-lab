// Code your solution in this file!

function  distanceFromHqInBlocks(block) {
    return Math.abs(42-block);
}

function  distanceTravelledInFeet(start,end) {
    return Math.abs((start-end)*264);
}

function  distanceFromHqInFeet(block) {
    return Math.abs((42-block)*264);
}

function  calculatesFarePrice(start, destination) {
    // let price;
    const feet = Math.abs((start-destination)*264);
    switch (true) {
        case feet <= 400:
            return 0;
        case feet > 2500:
            return 'cannot travel that far';
        case feet > 2000:
            return 25;
        case feet > 400:
            return 0.02 * (feet - 400);
    }
}
