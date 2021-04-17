var mongoose = require('mongoose');

const CarSchema =  new mongoose.Schema({
    provider: { type: String, required: true },
    uuid: { type: String, required: true },
    vin: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    mileage: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: String, required: true },
    zipCode: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
});


module.exports = mongoose.model('Car', CarSchema);