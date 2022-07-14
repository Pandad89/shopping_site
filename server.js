require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const path = require('path');

const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { userNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(chalk.inverse.red(error)));
db.once('open', () => console.log(chalk.inverse.green('Connected to database')));

app.use(cors());
app.use(express.json());

const publicDirectoryPath = path.join(__dirname, "client/build");
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(chalk.inverse.green(`Server started on port ${port}`)));