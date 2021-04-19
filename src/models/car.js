var mongoose = require('mongoose');

const CarSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    provider: { type: String, required: true },
    uuid: { type: String },
    vin: { type: String },
    make: { type: String },
    model: { type: String },
    mileage: { type: String },
    year: { type: String },
    price: { type: String },
    zipCode: { type: String },
    createdAt: { type: String },
    updatedAt: { type: String },   
},
    { collection: 'Car'}
);


module.exports = mongoose.model('Car', CarSchema);