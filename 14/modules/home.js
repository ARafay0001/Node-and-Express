
// const registeredhouseName  = []
const fs = require('fs')
const rootDir = require('../utils/path')
const path = require('path')

module.exports = class home {
  constructor(houseName , price , location) {
    this.houseName = houseName
    this.price = price
    this.location = location
  }

  save() {
    this.id = Math.random().toString();
  home.fetchAll(registeredhouseName => {
    registeredhouseName.push(this);

    fs.writeFile(
      path.join(rootDir, 'data', 'houseData.json'),
      JSON.stringify(registeredhouseName),
      (err) => {
        console.log(err);
      }
    );

  });
}

  static fetchAll(callback) {
    fs.readFile(path.join(rootDir, 'data', 'houseData.json'), (err, data) => {
      return callback(!data.length ? [] : JSON.parse(data))
    })
  }
}