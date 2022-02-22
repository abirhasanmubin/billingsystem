const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_URI}/${process.env.DB_NAME}`);