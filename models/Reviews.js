const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
    tutorReview: [{type: mongoose.Types.ObjectId, ref: 'User'}],
    studentReviewer: [{type: mongoose.Types.ObjectId, ref: 'User'}],
    rating: {type: Number, min: 1, max: 100},
    comments: {type: String} 
}, {
    timestamps: true
});

const Reviews = mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;