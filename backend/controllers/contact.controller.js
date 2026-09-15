const { validationResult } = require('express-validator');
const { createContact } = require('../services/contact.services');



module.exports.sendContactMessage = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await createContact(req.body);
        res.status(201).json({ message: 'Contact message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending contact message' });
    }
};