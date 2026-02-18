const sql = require('mssql');
const confimssql = require("../config/config");

const TDS_GetItemTF = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })
    sql.connect(confimssql).then(pool => {
        // Stored procedure
        return pool.request()
            .execute('TDS_GetItemTF')
    }).then(result => {
        // res.send(result.recordsets)
        if (result.recordsets[0].length > 0) {
            res.json({ success: true, listall: result.recordsets[0] })
            // res.send(result.recordsets)
        }
        else {
            res.json({ success: false, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}

const TDS_GetWhiteCode = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetWhiteCode')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}

const TDS_GetPackingGroup = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetPackingGroup')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}

const TDS_GetItemFG = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetItemFG')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}

const TDS_GetItemFGC = (req, res) => {
    const { Id } = req.params
    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .input('GroupItem', sql.NVarChar(50), Id)
            .execute('TDS_GetItemFGC')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}


const TDS_GetItemGroup = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetItemGroup')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}

const TDS_GetProperty = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetProperty')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}


const TDF_GetItemInk = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDF_GetItemInk')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}


const TDS_GetCustomer = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetCustomer')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}

const TDS_GetTemp = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetTemp')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}

const TDS_GetItemWC = (req, res) => {

    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetItemWC')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })

}

const TDS_GetCansize = (req, res) => {
    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .execute('TDS_GetCansize')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}


const TDS_BomRelease = (req, res) => {
    const { Id } = req.params
    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .input('BomId', sql.NVarChar(50), Id)
            .execute('TDS_BomRelease')
           
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}

const TDS_RouteRelease = (req, res) => {
    const { Id } = req.params
    sql.on('error', err => {
        console.log("fieled  connect data basee now" + err)
    })

    sql.connect(confimssql).then(pool => {
        // Stored procedure

        return pool.request()
            .input('RouteId', sql.NVarChar(50), Id)
            .execute('TDS_RouteRelease')
    }).then(result => {
        if (result) {
            res.json({ success: true, listall: result.recordsets[0] })
        }

    }).catch(err => {
        console.log("fieled  connect data basee now" + err)
    })
}

module.exports = {
    TDS_GetItemTF,
    TDS_GetWhiteCode,
    TDS_GetPackingGroup,
    TDS_GetItemFG,
    TDS_GetItemGroup,
    TDS_GetProperty,
    TDF_GetItemInk,
    TDS_GetCustomer,
    TDS_GetTemp,
    TDS_GetItemWC,
    TDS_GetCansize,
    TDS_GetItemFGC,
    TDS_BomRelease,
    TDS_RouteRelease
}; 