const Trip = require("../models/trip.model");

module.exports.createTrip = (req, res) => {
    const { body } = req;
    console.log(body);
    Trip.create(body)
      .then((trip) => res.json({ trip }))
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ error: err });
      });
  };