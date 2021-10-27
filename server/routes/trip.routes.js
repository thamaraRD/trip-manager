const { createTrip } = require ('../controllers/trip.controller');

module.exports = (app) =>{
    app.post('/api/trips', createTrip);
}