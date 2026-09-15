const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contact.controller');

router.post('/contact',[
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').not().isEmpty().withMessage('Message is required')
], 
contactController.sendContactMessage
);

module.exports = router;