const { faker } = require('@faker-js/faker');

class categoryService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        size: faker.datatype.number(1000),
      });
    }
  }

  create() {}

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = categoryService;
