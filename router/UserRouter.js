const express = require('express');
const Path = require('path');
const userRouter = express.Router();
//local modules
const rootDir = require('../utils/PathUtils.js');

userRouter.get('/', (req, res) => {
    res.sendFile(Path.join(rootDir, 'view', '/Home.html'));
});

module.exports = userRouter;