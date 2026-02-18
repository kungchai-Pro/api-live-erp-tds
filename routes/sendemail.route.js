var express = require('express');
var router = express.Router();
var sendemailController=require('../controllers/sendemail.controller')

router.post('/tds/send-email/getsenemail-to-user',sendemailController.TDS_SendMail);
router.post('/tds/send-email/send-line-ontify',sendemailController.TDS_Sendline);

module.exports = router;
