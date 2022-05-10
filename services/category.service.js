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

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = categoryService;
