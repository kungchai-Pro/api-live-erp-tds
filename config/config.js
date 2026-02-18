
const sqlConfig = {
    user: 'adminapi',
    password:'api@2021',
    database: 'LIVE7',
    server: '192.168.0.116',
    port:1433,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 300000
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
      enableArithAbort: true
    }
  }
  module.exports=sqlConfig;
  