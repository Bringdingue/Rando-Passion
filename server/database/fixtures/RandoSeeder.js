const AbstractSeeder = require("./AbstractSeeder");

class RandoSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "rando", truncate: true });
  }

  run() {
    const randos = [
      {
        title: "Passerelles himalayennes du Monteynard",
        location: "Treffort",
        description:
          "D'une longueur de 12,5 km, le circuit de randonnée des passerelles himalayennes est une boucle originale qui vous fera franchir les gorges du Drac et celles de l'Ebron en empruntant successivement la passerelle himalayenne du Drac (220m) et la passerelle himalayenne de l'Ebron (180m).",
        image: "Passerelles.jpg",
        refName: "vosRandos",
      },
    ];

    randos.forEach((rando) => {
      this.insert(rando);
    });
  }
}

module.exports = RandoSeeder;
