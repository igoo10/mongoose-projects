// person-router.js
const express = require('express');
const {
  createPerson,
  createManyPeople,
  findPersonById,
  updatePersonAge,
  deletePersonById,
  deleteManyPeopleByName
} = require('../controller/person-controller');

const router = express.Router();

// Route to create a single person
router.get('/create-person', async (req, res) => {
  try {
    const personId = await createPerson();
    res.status(201).json({ message: 'Person created successfully', personId });
  } catch (error) {
    res.status(500).json({ error: 'Error creating person' });
  }
});

// Route to create multiple people
router.get('/create-many-people', async (req, res) => {
  try {
    await createManyPeople();
    res.status(201).json({ message: 'Many people created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating people' });
  }
});

// Route to find a person by ID
router.get('/find-person/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const person = await findPersonById(personId);
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error finding person' });
  }
});

// Route to update a person's age by first and last name
router.put('/update-person-age', async (req, res) => {
  try {
    const { firstname, lastname } = req.body;
    const updatedPerson = await updatePersonAge(firstname, lastname);
    if (updatedPerson) {
      res.status(200).json({ message: 'Person updated successfully', updatedPerson });
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating person' });
  }
});

// Route to delete a person by ID
router.delete('/delete-person/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const removedPerson = await deletePersonById(personId);
    if (removedPerson) {
      res.status(200).json({ message: 'Person deleted successfully', removedPerson });
    } else {
      res.status(404).json({ error: 'Person not found for deletion' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting person' });
  }
});

// Route to delete multiple people by last name
router.delete('/delete-many-people/:lastname', async (req, res) => {
  try {
    const lastname = req.params.lastname;
    const deleteResult = await deleteManyPeopleByName(lastname);
    res.status(200).json({ message: 'People deleted successfully', deleteResult });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting people' });
  }
});

module.exports = router;
