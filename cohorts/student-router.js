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

module.exports = router;