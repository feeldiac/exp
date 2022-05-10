const { faker } = require('@faker-js/faker');

class userService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        age: faker.datatype.number(100),
      });
    }
  }

  create() {}

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = userService;
