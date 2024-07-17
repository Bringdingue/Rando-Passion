const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Appelle le constructeur de la classe parente (AbstractSeeder) avec les options appropriées
    super({ table: "user", truncate: true });
  }

  // La méthode run - Remplir la table 'user' avec des données fictives
  run() {
    // Générer et insérer des données fictives dans la table 'user'
    for (let i = 0; i < 10; i += 1) {
      // Générer des données utilisateur fictives
      const fakeUser = {
        username: this.faker.internet.userName(), // Générer un nom d'utilisateur fictif
        email: this.faker.internet.email(), // Générer un email fictif
        password: this.faker.internet.password(), // Générer un mot de passe fictif
        refName: `user_${i}`, // Créer un nom de référence pour l'utilisateur
      };

      // Insérer les données fictives de l'utilisateur dans la table 'user'
      this.insert(fakeUser); // insérer dans user(username, email, password) les valeurs (?, ?, ?)
    }
  }
}

// Exporter la classe UserSeeder
module.exports = UserSeeder;
