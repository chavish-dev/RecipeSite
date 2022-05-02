const express=require('express')
const router =express.Router();
const {getAllUsers,createNewUser} =require('../controllers/user-controller');
router.get('/',getAllUsers);
router.post('/',createNewUser);
module.exports=router;