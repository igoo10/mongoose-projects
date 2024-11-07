// person-controller.js
const mongoose = require('mongoose');
const Person = require('../model/person-model');

// Create a new person
const createPerson = async () => {
  try {
    const newPerson = new Person({
      firstname: "John",
      lastname: "Doe",
      age: 30,
      favoriteFoods: ['Pizza', 'Burger']
    });

    const savedPerson = await newPerson.save();
    console.log('Saved person:', savedPerson);
    return savedPerson._id;
  } catch (err) {
    console.error('Error saving person:', err.message);
  }
};

// Create multiple people
const createManyPeople = async () => {
  try {
    const arrayOfPeople = [
      { firstname: "Alice", lastname: "Smith", age: 28, favoriteFoods: ['Sushi', 'Tacos'] },
      { firstname: "Bob", lastname: "Johnson", age: 34, favoriteFoods: ['Pizza', 'Burger'] },
      { firstname: "Charlie", lastname: "Brown", age: 22, favoriteFoods: ['Pasta', 'Salad'] },
      { firstname: "Mary", lastname: "Opraya", age: 40, favoriteFoods: ['Apple Pie', 'Chocolate'] },
      { firstname: "Jumoke", lastname: "Shalalo", age: 25, favoriteFoods: ['Ice Cream', 'Cake'] }
    ];

    const createdPeople = await Person.create(arrayOfPeople);
    console.log('Created people:', createdPeople);
  } catch (err) {
    console.error('Error creating people:', err.message);
  }
};

// Find people by name
const findPeopleByName = async (name) => {
  try {
    const people = await Person.find({ firstname: name });
    console.log('Found people:', people);
    return people;
  } catch (err) {
    console.error('Error finding people:', err.message);
  }
};

// Find one person by favorite food
const findOneByFavoriteFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log('Found person by favorite food:', person);
    return person;
  } catch (err) {
    console.error('Error finding person by favorite food:', err.message);
  }
};

// Find person by ID
const findPersonById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    console.log('Found person by ID:', person);
    return person;
  } catch (err) {
    console.error('Error finding person by ID:', err.message);
  }
};

// Update person by adding "hamburger" to favorite foods
const addFavoriteFoodById = async (personId) => {
  try {
    const person = await Person.findById(personId);
    if (person) {
      person.favoriteFoods.push("hamburger");
      await person.save();
      console.log('Updated person with new favorite food:', person);
      return person;
    } else {
      console.log('Person not found');
    }
  } catch (err) {
    console.error('Error updating person:', err.message);
  }
};

// Update person's age to 20 by name
const updatePersonAge = async (personName) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { firstname: personName },
      { age: 20 },
      { new: true }  // Return the updated document
    );

    console.log('Updated person:', updatedPerson);
    return updatedPerson;
  } catch (err) {
    console.error('Error updating person:', err.message);
  }
};

// Delete person by ID
const deletePersonById = async (personId) => {
  try {
    const removedPerson = await Person.findByIdAndRemove(personId);
    console.log('Removed person:', removedPerson);
    return removedPerson;
  } catch (err) {
    console.error('Error removing person:', err.message);
  }
};

// Delete all people with a given name
const deleteManyPeopleByName = async (name) => {
  try {
    const result = await Person.deleteMany({ firstname: name });
    console.log('Deleted people:', result);
    return result;
  } catch (err) {
    console.error('Error deleting people:', err.message);
  }
};

module.exports = {
  createPerson,
  createManyPeople,
  findPeopleByName,
  findOneByFavoriteFood,
  findPersonById,
  addFavoriteFoodById,
  updatePersonAge,
  deletePersonById,
  deleteManyPeopleByName
};
