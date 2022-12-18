// const product = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(
    id,
    name,
    image,
    from,
    nutrients,
    quantity,
    price,
    organic,
    description
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.from = from;
    this.nutrients = nutrients;
    this.quantity = quantity;
    this.price = price;
    this.organic = organic;
    this.description = description;
  }

  static fetchAll(callBack) {
    const p = path.join(__dirname, '../', 'dev-data', 'data.json');
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return callBack([]);
      }

      return callBack(JSON.parse(fileContent));
    });
  }
};
