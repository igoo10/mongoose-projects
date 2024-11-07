const mongoose = require('mongoose');

// Create the schema for a 'student'
const personSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required'], 
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required'], 
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'], 
    max: [120, 'Age cannot exceed 120'], 
    default: 30, 
  },
  favoriteFoods: {
    type: [String], 
    default: [], 
  },
});

// Create a model called 'Person' based on the schema
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
