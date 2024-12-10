const express = require('express');
const router = express.Router();
const {handleGetAction, handlePostAction} = require('./../controller/action');

router.route('/')
    .get(handleGetAction)
    .post(handlePostAction);

module.exports = router;