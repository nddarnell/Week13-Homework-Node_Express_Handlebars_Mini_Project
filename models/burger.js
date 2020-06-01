const orm = require("../config/orm.js");

const burger = {
  all: async () => {
    const result = await orm.selectFunc("burgers");
    // was all 
    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.insertFunc("burgers", cols, vals);
      // was create
    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.updateFunc("burgers", objColVals, condition);
    // was update
    return result;
  },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;