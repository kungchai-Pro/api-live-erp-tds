
const sqlConfig = {
<<<<<<< HEAD
    user:'adminapi',
    password:'api@2021',
    database:'LIVEAPI',
    server:'192.168.0.116',
=======
    user: 'adminapi',
    password:'api@2021',
    database: 'LIVE7',
    server: '192.168.0.116',
>>>>>>> 47dbb1a287d87a59b2bd2facc4ab89c26905ac94
    port:1433,
    pool: {
      max: 10,
      min: 0,
<<<<<<< HEAD
      idleTimeoutMillis: 30000
=======
      idleTimeoutMillis: 300000
>>>>>>> 47dbb1a287d87a59b2bd2facc4ab89c26905ac94
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: false, // change to true for local dev / self-signed certs
      enableArithAbort: true
    }
  }
  module.exports=sqlConfig;
  