const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: [true, 'Username already in use.'], required: [true, 'Username is requried.'] },
    password: { type: String, required: [true, 'Password required.'] },
    firstName: { type: String, required: [true, 'Please enter a first name.'] },
    lastName: { type: String, required: [true, 'Please enter a last name.'] },
    email: { type: String, unique: [true, 'Email already in use.'], required: [true, 'Please enter a username.'] },
    skills: [{ type: String }],
    available: {type: Boolean, default: true },
    rating: {type: Number },
    tutorReviews: [{type: mongoose.Types.ObjectId, ref: 'Reviews' }],
    classes: [{type: mongoose.Types.ObjectId, ref: 'Class'}]
}, {
    timestamps: true, toJSON: {
        transform: (_doc, ret) => {
            delete ret.password;
            return ret;
        }
    }, id: false
});

const User = mongoose.model("User", UserSchema);

module.exports = User;