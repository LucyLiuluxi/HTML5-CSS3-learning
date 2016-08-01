function genRandom() {
    var r = Math.random() * 100;
    r = Math.floor(r);
    postMessage(r);
    setTimeout(genRandom, 500);
}

genRandom();
