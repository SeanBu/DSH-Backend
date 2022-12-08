require("../config/db.connection");

module.exports = {
  userController: require("./userController"),
  reviewController: require("./reviewController"),
  courseController: require("./courseController"),
  authController: require("./authController"),
};
