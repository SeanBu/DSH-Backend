const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: {type: String, required:[true, 'Please enter a classname.'] },
    location: {type: String},
    online: {type: Boolean, default: true},
    time: {type: Date, required:[true, 'Please enter a time.'] },
    courseDescription: {type: String, required:[true, 'Please enter a class description.']}
}, {
    timestamps: true
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;