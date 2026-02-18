var express = require('express');
var router = express.Router();
const erpstroreController=require('../controllers/erpstore.controller');

router.get('/tds/erpstore/getitemtf',erpstroreController.TDS_GetItemTF);
router.get('/tds/erpstore/getwhitecode',erpstroreController.TDS_GetWhiteCode);

router.get('/tds/erpstore/getPackingGroup',erpstroreController.TDS_GetPackingGroup);
router.get('/tds/erpstore/getItemFG',erpstroreController.TDS_GetItemFG);
router.get('/tds/erpstore/getTypeItemFG/:Id',erpstroreController.TDS_GetItemFGC);
router.get('/tds/erpstore/getItemGroup',erpstroreController.TDS_GetItemGroup);
router.get('/tds/erpstore/gotetPropertySolid',erpstroreController.TDS_GetProperty);
router.get('/tds/erpstore/getItemInkcolor',erpstroreController.TDF_GetItemInk);
router.get('/tds/erpstore/getcustomerlist',erpstroreController.TDS_GetCustomer);
router.get('/tds/erpstore/gettemplist',erpstroreController.TDS_GetTemp);
router.get('/tds/erpstore/getitemwclist',erpstroreController.TDS_GetItemWC);
router.get('/tds/erpstore/getetCansize',erpstroreController.TDS_GetCansize);
router.get('/tds/erpstore/getBomRelease/:Id',erpstroreController.TDS_BomRelease);
router.get('/tds/erpstore/getRouteRelease/:Id',erpstroreController.TDS_RouteRelease);


module.exports = router;