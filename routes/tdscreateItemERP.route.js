var express = require('express');
var router = express.Router();
const TdscreateItemERP = require('../controllers/tdscreateItemERP.controller');

/* GET home page. */
router.post('/tds/TdsNewItemERP/createNewitem',TdscreateItemERP.TDS_CreateNewItem);
// router.get('/tds/account/accounByDedicate/:emcode',AccountController.accounByDedicate);
// router.get('/tds/account/accountById/:Id',AccountController.accountById);

// router.post('/tds/account/login',AccountController.loginAccount);
// router.post('/tds/account/addaccount',AccountController.createAccount);

// router.put('/tds/account/updateaccount/:id',AccountController.accountUpdateById)
// router.put('/tds/account/changepassword/:id',AccountController.changePassword)

// router.delete('/tds/account/deleteById/:Id',AccountController.deleteById)


module.exports = router;