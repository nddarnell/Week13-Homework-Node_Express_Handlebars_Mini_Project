const orm = require("../config/orm.js");

const burger = {
  all: async () => {
    const result = await orm.selectFunc("burgers");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.insertFunc("burgers", cols, vals);
    
    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.updateFunc("burgers", objColVals, condition);
    
    return result;
  },

};

module.exports = burger;