const mongoose = require('mongoose');
const Person = require('../model/person-model'); // the path to where your model is defined

const createPerson = async () => {
  try {

    const newStudent = new student({
      firstname: "John", 
      lastname:"Doe",
      age: 30,
      favoriteFoods: ['Pizza', 'Burger'] 
    });
    
    // Save the document
    const savedPerson = await newPerson.save();
    console.log('Saved person:', savedPerson);
    return savedPerson._id; // Return the ID of the saved person for later use
  } catch (err) {
    console.error('Error saving person:', err.message);
  }
};

const createManyPeople = async () => {
  try {
    // Array of people to be created
    const arrayOfPeople = [
      { firstname: "Alice", lastname:"Smith", age: 28, favoriteFoods:['Susfi', 'Tacos'] },
      { firstname: "Bob",   lastname:"Johnson", age: 34, favoriteFoods: ['Pizza', 'Burger'] },
      { firstname: "Charlie", lastname:"Brown", age: 22, favoriteFoods: ['Pasta', 'Salad'] },
      { firstname: "Mary", lastname:"Opraya" ,  age: 40, favoriteFoods: ['Apple Pie', 'Chocolate'] },
      { firstname: "Jumoke", lastname:"Shalalo",  age: 25, favoriteFoods: ['Ice Cream', 'Cake'] }
    ];

    // using Model.create() to save multiple records at once
    const createdPeople = await Person.create(arrayOfPeople);
    console.log('Created people:', createdPeople);
  } catch (err) {
    console.error('Error creating people:', err.message);
  }
};

const findPersonById = async (personId) => {
    try {
      const person = await Person.findById(personId);
      if (person) {
        console.log('Found person:', person);
      } else {
        console.log('Person not found');
      }
    } catch (err) {
      console.error('Error finding person:', err.message);
    }
  };
  
  const updatePersonAge = async (firstname, lastname) => {
    try {
      const updatedPerson = await Person.findOneAndUpdate(
        { firstname: firstname, lastname: lastname }, // Search criteria
        { age: 50 }, // Update
        { new: true } // Return the updated document
      );
  
      if (updatedPerson) {
        console.log('Updated person:', updatedPerson);
      } else {
        console.log('Person not found');
      }
    } catch (err) {
      console.error('Error updating person:', err.message);
    }
  };
  

  const deletePersonById = async (personId) => {
    try {
      const removedPerson = await Person.findByIdAndDelete(personId);
      if (removedPerson) {
        console.log('Removed person:', removedPerson);
      } else {
        console.log('Person not found for deletion');
      }
    } catch (err) {
      console.error('Error removing person:', err.message);
    }
  };
  

  const deleteManyPeopleByName = async (name) => {
    try {
      const result = await Person.deleteMany({ lastname: name });
      console.log('Delete result:', result);
    } catch (err) {
      console.error('Error removing people:', err.message);
    }
  };
  

// Call the functions to create, save data, perform updates, and delete documents
const run = async () => {
    const personId = await createPerson(); // Save a person and get their ID
    await createManyPeople(); // Create multiple people
    await findPersonById(personId); // Find the person by ID
    await updatePersonAge('John', 'Doe'); // Update the age of the person with name 'John Doe'
    await deletePersonById(personId); // Delete the person by ID
    await deleteManyPeopleByName('Smith'); // Delete all people with the last name 'Smith'
  };
  
  run();
  
