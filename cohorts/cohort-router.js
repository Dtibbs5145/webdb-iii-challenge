const express = require('express');
const router = express.Router();
const CohortDB = require('../models/cohort-model');

router.get('/', async (req, res) => {
    try {
        const cohort = await CohortDB.find();
        res.status(200).json(cohort);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error trying to find the cohorts. :(' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cohort = await CohortDB.getById(req.params.id);
        if (cohort) {
            res.status(200).json(cohort);
        } else {
            res.status(404).json({ message: 'There was a problem finding this cohort. Make sure everything is correct' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error finding this cohort. :(' });
    }
});

router.post('/', async (req, res) => {
    try {
        const cohort = await CohortDB.add(req.body);
        res.status(201).json(cohort);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error posting this cohort.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const cohort = await CohortDB.update(req.params.id, req.body);
        if (cohort) {
            res.status(200).json(cohort);
        } else {
            res.status(404).json({ message: 'We could not find this cohort.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error finding this cohort.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const count = await CohortDB.removeAllListeners(req.params.id);
        if (count > 0) {
            res.status(200).json({ message: 'This cohort was successfully deleted' });
        } else {
            res.status(404).json({ message: 'This cohort could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'This cohort was not deleted due to an error.' });
    }
});

module.exports = router;
