const express = require('express');
const router = express.Router();
const data = require('../data/countries.json'); 

router.get('/', (req, res) => {
    res.status(200).json(data.countries);  
});

router.get('/:countryId', (req, res) => {
    const requestedCountryId = req.params.countryId;
    const country = data.countries.find(c => c.id.toString() === requestedCountryId);

    if (country) {
        res.status(200).json(country);
    } else {
        res.status(404).json({ message: 'Country not found' });
    }
});

module.exports = router;
