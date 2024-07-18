const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder"); // Ajout de l'importation de UserSeeder

class RandoSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "rando", truncate: true, dependencies: [UserSeeder] });
  }

  async run() {
    const randos = [
      {
        title: "Passerelles himalayennes du Monteynard",
        location: "Treffort",
        description:
          "D'une longueur de 12,5 km, le circuit de randonnée des passerelles himalayennes est une boucle originale qui vous fera franchir les gorges du Drac et celles de l'Ebron en empruntant successivement la passerelle himalayenne du Drac (220m) et la passerelle himalayenne de l'Ebron (180m).",
        image: "Passerelles.jpg",
        user_id: this.getRef(`user_0`).insertId,
        refName: "Passerelles",
      },
    ];

    randos.forEach((menu) => {
      this.insert(menu);
    });

    await Promise.all(this.promises);
  }
}

module.exports = RandoSeeder;
