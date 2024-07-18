const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        username: this.faker.internet.userName(),
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }

    return Promise.all(this.promises);
  }
}

module.exports = UserSeeder;
