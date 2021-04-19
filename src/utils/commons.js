const mongoose = require('mongoose');
const Car = require('../models/car')

module.exports.convertArray = function (jsonArray, provider){
    cars = []
    for(element of jsonArray){
        let car = new Car({
            _id:  new mongoose.Types.ObjectId(),
            provider: provider ?? '',
            uuid: element.uuid ?? '',
            vin: element.vin ?? '',
            make: element.make ?? '',
            model: element.model ?? '',
            mileage: element.mileage ?? '',
            year: element.year ?? '',
            price: element.price ?? '',
            zipCode: element.zipCode ?? '',
            createdAt: element.createdAt ?? '',
            updateAt: element.updatedAt ?? ''
        })
        cars.push(car)
    }
    return cars
}
 