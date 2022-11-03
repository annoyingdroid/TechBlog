const router = require('express').Router();
const { app } = require('express');
const { post , user } = require('../models');

router.get('/', async(req,res) => {
    try {
        res.render('homepage');
    } catch {

    }
});

module.exports = router;