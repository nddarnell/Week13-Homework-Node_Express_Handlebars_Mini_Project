// code that talks to database through orm
// all functions call the orm functions
// const cat = { all: async ()=>{orm.function call in here}} and so on
// import the orm file here
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