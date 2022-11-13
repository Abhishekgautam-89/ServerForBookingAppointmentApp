const express = require('express');

const router = express.Router();
const userDetails = require('../controller/user')

router.get('/user', userDetails.getDetails);
router.post('/user',userDetails.postDetails);
router.delete('/user/delete/:id', userDetails.deleteDetails);

module.exports=router;