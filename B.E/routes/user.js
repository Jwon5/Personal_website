const router = require("express").Router();
let User = require("../models/user.model");

router.post("/login", function (req, res) {
  const userName = req.body.userName;
  const password = req.body.password;

  User.findOne({ userName, password }, function (err, user) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send();
    }
    return res.status(200).send();
  });
});

router.post("/add", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newUser = new User({ username, password, firstName, lastName });
  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
