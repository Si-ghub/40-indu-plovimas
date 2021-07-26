class Plates {
    constructor(name) {
        this.name = name
        this.platesNumber = [];

    }

    intro() {
        console.log(`Hi, this restoran has no plates! Please, buy some.`);
    }

    buyPlates(boughtPlates) {
        this.platesNumber.push({ number: 0 })
        console.log(`Restoran purchased ${boughtPlates} plates.`);
    }


}

module.exports = Plates;