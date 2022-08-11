const mongoose = require('mongoose');

const purchasesSchema = new mongoose.Schema({
    purchase: {
        type: Array,
        required: true,
    },
    timePosted: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Purchase', purchasesSchema);