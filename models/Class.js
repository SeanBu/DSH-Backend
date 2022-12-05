const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    className: {type: String, required:[true, 'Please enter a classname.'] },
    location: {type: String},
    online: {type: Boolean, default: true},
    time: {type: Date, required:[true, 'Please enter a time.'] },
    classDescription: {type: String, required:[true, 'Please enter a class description.']}
}, {
    timestamps: true
});

const Class = mongoose.models("Class", ClassSchema);

module.exports = Class;