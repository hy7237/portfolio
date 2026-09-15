const Contact = require('../models/contact.model');

const createContact = async ({ name, email, message }) => {
    return Contact.create({ name, email, message });
};

module.exports = {
    createContact
};