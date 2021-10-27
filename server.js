const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const triptRoutes = require('./server/routes/trip.routes');
require('./server/config/mongoose.config');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

triptRoutes(app);

app.listen(port, () => {console.log("Listening at Port 8000")});