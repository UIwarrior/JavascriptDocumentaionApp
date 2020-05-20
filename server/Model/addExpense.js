const mongoose = require('mongoose');
const addDocument = mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    description: { type: String, required: false },
    link: { type: String, required: false },
})

module.exports = mongoose.model('adddocs', addDocument);