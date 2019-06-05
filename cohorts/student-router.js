const express = require('express')
const router = express.Router();
const StudentDB = require('../models/student-model');

router.get('/', async (req, res) => {
    try {
        const student = await StudentDB.find();
        res.status(200).json(student);
    } catch (error) {
        console.log(error)
            res.status(500).json({ message: 'There was an error retrieving the students' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const student = await StudentDB.getById(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Something went wrong finding this student' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error retrieving this student' });
    }
});

router.post('/', async (req, res) => {
    try {
        const student = await StudentDB.add(req.body);
        res.status(201).json(student);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error posting this student' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const student = await StudentDB.update(req.params.id, req.body);
        if (student) {
            res.statusCode(200).json(student);
        } else {
            res.status(404).json({ message: 'There was a problem updating this student. Make sure you have all the proper fields filled in' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error updating this student' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await StudentDB.remove(req.params.id);
        if (count > o) {
            res.status(200).json({ message: 'This student was deleted' });
        } else {
            res.status(404).json({ message: 'There is a problem with deleting this student.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error ocurred while trying '})
    }
})

module.exports = router;