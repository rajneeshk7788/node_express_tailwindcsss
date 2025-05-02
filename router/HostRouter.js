//core modules
const Path =require('path');
const express = require('express');
const HostRouter = express.Router();
//local modules
const rootDir = require('../utils/PathUtils.js');

HostRouter.get('/contact-us', (req, res) => {
    res.sendFile(Path.join(rootDir, 'view', '/contact-us.html'));
});

HostRouter.post('/host', (req, res) => {
    console.log(req.body);
    res.sendFile(Path.join(rootDir, 'view', '/success.html'));
}); 


module.exports = HostRouter;
