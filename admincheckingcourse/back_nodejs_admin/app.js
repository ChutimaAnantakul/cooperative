const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const errorController = require('./controllers/error');
const profileRoutes = require('./routes/profile');
const listRoutes = require('./routes/list');
const sumplanRoutes = require('./routes/sumplan');
const planRoutes = require('./routes/plan');
const courseRoutes = require('./routes/course');
const adminRoutes = require('./routes/admin');
const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(cors())
app.use(express.json());

app.use('/list', listRoutes);
app.use('/sumplan', sumplanRoutes);
app.use('/profile', profileRoutes);
app.use('/plan', planRoutes);
app.use('/course', courseRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));
