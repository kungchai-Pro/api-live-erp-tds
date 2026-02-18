const sql = require('mssql');
const confimssql = require("../config/config");

const TDS_CreateNewItem = async (req, res) => {
    const {
        ItemGroupID,
        ItemID,
        ItemName,
        DimGroupId,
        PackagingGroupId,
        InventUnit,
        PurchaseUnit,
        SalesUnit,
        VBS_RAFJournalNameId,
        VBS_YYMMGen,
        VBS_SwanJobGen,
        VBS_QtyPerTag,
        TDSnumber
    } = req.body;

    let pool = await sql.connect(confimssql)

    let result = await pool.request()
        .input('ItemGroupID', sql.NVarChar(35), ItemGroupID)
        .input('ItemID', sql.NVarChar(40), ItemID)
        .input('ItemName', sql.NVarChar(400), ItemName)
        .input('DimGroupId', sql.NVarChar(10), DimGroupId)
        .input('PackagingGroupId', sql.NVarChar(35), PackagingGroupId)
        .input('InventUnit', sql.NVarChar(35), InventUnit)
        .input('PurchaseUnit', sql.NVarChar(35), PurchaseUnit)
        .input('SalesUnit', sql.NVarChar(35), SalesUnit)
        .input('VBS_RAFJournalNameId', sql.NVarChar(35), VBS_RAFJournalNameId)
        .input('VBS_YYMMGen', sql.BigInt(5), VBS_YYMMGen)
        .input('VBS_SwanJobGen', sql.BigInt(5), VBS_SwanJobGen)
        .input('VBS_QtyPerTag', sql.Int(5), VBS_QtyPerTag)
        .input('TDSnumber', sql.NVarChar(35), TDSnumber)
        .execute('TDS_InsertItemForERP')

    if (result) {
        res.json({ success: true, listall:result })
       
    }
    else {
        res.json({ success: false, listall:result })
    }
}

module.exports = {
    TDS_CreateNewItem
}; 