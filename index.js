const express = require('express');
require('dotenv').config()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express()

//midle were
app.use(cors())
app.use(express.json())