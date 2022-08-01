const mongoose = require('mongoose');

const purchasesSchema = new mongoose.Schema({
    purchase: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model('Purchase', purchasesSchema);