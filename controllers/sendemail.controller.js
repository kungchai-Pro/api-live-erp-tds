
var nodemailer = require('nodemailer');
const axios = require('axios');
const lineNotify = require('line-notify-nodejs')('WQDdbimLwEKVO4d4qrTDElzJTKaoWb9d3bNOssm3NDt');
// อันนี้ใช้จริง //Y3A9qhH1RymkT7Kw8xZg5eOXKe4qMu4xFCxlTHANC8F

// send mail to mail into
const TDS_SendMail = (req, res) => {

  const { nunberTds, toSendmail, userMail, Idjour, tdsdata } = req.body;

  var message = ``;

  const transporter = nodemailer.createTransport({
    host: 'mail.swan.co.th',
    secure: true,
    auth: {
      user: 'computer@swan.co.th', // your email
      pass: 'Kajohn14082510'              // your password
    }
  });

  if (tdsdata.approvecode == '1003') {
    message = `
    <div>
    สวัสดีครับ คุณ ${userMail} </br>
    แจ้งเตือน ? มีเอกสารใหม่ : ${tdsdata.tdsnumber}</br>
    ส่งให้ผู้อนุมัติ คุณ : ${tdsdata.nextApprove} </br>
    กลุ่มลูกค้า :${tdsdata.customername} </br>
    เวลา : ${tdsdata.datetime}</br>
    สามารถเข้าไปตรวจสอบได้ใน link http://www.swannet.net
    </div>
    `
  }
  else if (tdsdata.approvecode == '1005' && tdsdata.successfully == "0") {
    message = `
      <div>
      สวัสดีครับ คุณ ${userMail}</br>
     
      แจ้งเตือน ? คุณ  ${tdsdata.approveby} อนุมัติเอกสารเรียบร้อยแล้ว </br>
      เอกสาร : ${tdsdata.tdsnumber}</br>
      กลุ่มลูกค้า :${tdsdata.customername}</br>
      product group  :${tdsdata.job_productgrouptype} </br>
      อนุมัติแล้ว</br>
      ส่งให้ผู้อนุมัติ คุณ : ${tdsdata.TonextApprove} และแผนก ${tdsdata.TonextDepartment} </div>
      เวลา : ${tdsdata.datetime}</br>
      สามารถเข้าไปตรวจสอบได้ใน link http://www.swannet.net
      </div>
      `
  }
  else if (tdsdata.approvecode == '1005' && tdsdata.successfully == "1") {
    message = `
      <div>
      สวัสดีครับ คุณ ${userMail}</br>
      แจ้งเตือน ? คุณ  ${tdsdata.approveby} อนุมัติเอกสารเรียบร้อยแล้ว </br>
      เอกสาร : ${tdsdata.tdsnumber}</br>
      กลุ่มลูกค้า :${tdsdata.customername}</br>
      product group  :${tdsdata.job_productgrouptype} </br>
      อนุมัติเรียบร้อยแล้ว (เอกสาร E-TDS ผ่านการอนุมัติเสร็จสมบูรณ์เรียบร้อยแล้ว)</br>
      เวลา : ${tdsdata.datetime}</br>
      สามารถเข้าไปตรวจสอบได้ใน link http://www.swannet.net </br>
      Link :<a href='http://www.swannet.net/app-tds/reportpdf/${Idjour}'>คลิกที่นี้</a>
      </div>
      `
  }
  else if (tdsdata.approvecode == '2001') {

    message = `
      <div>
      สวัสดีครับ คุณ ${userMail}</br>
      แจ้งเตือน ? คุณ  ${tdsdata.approveby} ได้ตีกลับเอกสาร  }</br>
       เอกสาร : ${tdsdata.tdsnumber}  </br>
        กลุ่มลูกค้า :${tdsdata.customername}</br>
      product group  :${tdsdata.job_productgrouptype} </br>
      เวลา : ${tdsdata.datetime} </br>
      สามารถเข้าไปตรวจสอบได้ใน link http://www.swannet.net
      </div>
      `
  } else if (tdsdata.approvecode == '3001') {

    message = `<div>
    สวัสดีครับ คุณ ${userMail}</br>
    แจ้งเตือน ? คุณ  ${tdsdata.approveby} ได้มอบหมายให้อนุมัติแทน </br>
    เอกสาร : ${tdsdata.tdsnumber}</br>
    กลุ่มลูกค้า :${tdsdata.customername} </br>
    product group  :${tdsdata.job_productgrouptype} </br>
    ผู้อนุมัติแทน :${tdsdata.userdedicate} </br>  
    เวลา : ${tdsdata.datetime} </br>
    สามารถเข้าไปตรวจสอบได้ใน link http://www.swannet.net
    </div>
    `
  } else if (tdsdata.approvecode == '0000') {
    message = `
    <div>
    สวัสดีครับ คุณ ${userMail}</br>
      แจ้งเตือน ? คุณ  ${tdsdata.approveby} ยกเลือกเอกสาร </br>
      เอกสาร : ${tdsdata.tdsnumber}</br>
      กลุ่มลูกค้า :${tdsdata.customername}</br>
      product group  :${tdsdata.job_productgrouptype}  </br>
      เวลา : ${tdsdata.datetime}</br>
      สามารถเข้าไปตรวจสอบได้ใน link http://www.swannet.net
     <div>
     `
  }

  if (tdsdata.approvecode != '1004') {
    
    console.log(`mail => `+tdsdata.emailcc)

    // setup email data with unicode symbols
    const mailOptions = {
      from: 'computer@swan.co.th',              // sender
      to: `${toSendmail},${tdsdata.emailcc}`, // list of receivers
      subject: `แจ้งเตือนเอกสาร TDS  ${tdsdata.tdsnumber}`,            // Mail subject
      html: message
      // HTML body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err)
      }

      else {
        res.json({
          success: true,
          message: 'send email successfully',
          accepted: info.accepted,
          envelope: info.envelope
        })
      }

    });


  }

}

const TDS_Sendline = (req, res) => {

  const { taskid,
    journalid,
    emcode,
    stateflow,
    approvecode,
    dedicatecode,
    tasknote,
    customername,
    datetime,
    tdsnumber,
    approveby,
    userdedicate,
    nextApprove,
    TonextApprove,
    TonextDepartment,
    successfully,
    job_substrate,
    job_productgrouptype
  } = req.body;

  var message = "";
  if (approvecode == '1003') {
    message = `แจ้งเตือน ? มีเอกสารใหม่ : ${tdsnumber} 
      \r ส่งให้ผู้อนุมัติ คุณ : ${nextApprove} 
      \r กลุ่มลูกค้า :${customername}
      \r เวลา : ${datetime}`
    lineNotify.notify({
      message: message,
    }).then(() => {
      // console.log('send completed!');
      res.send('send completed!')
    });
  }
  //  else if(approvecode=='1004'){
  //   message=`แจ้งเตือน ? คุณ  ${approveby} รับเอกสารเรียบร้อยแล้ว 
  //   \r เอกสาร : ${tdsnumber} 
  //   \r กลุ่มลูกค้า :${customername}
  //   \r product group  :${job_productgrouptype}
  //   \r เวลา : ${datetime}`
  //   lineNotify.notify({
  //     message: message,
  //   }).then(() => {
  //     // console.log('send completed!');
  //     res.send('send completed!')
  //   });

  // }
  else if (approvecode == '1005' && successfully == "0") {
    message = `แจ้งเตือน คุณ  ${approveby} อนุมัติเอกสารเรียบร้อยแล้ว 
      \r เอกสาร : ${tdsnumber} 
       \r กลุ่มลูกค้า :${customername}
      \r product group  :${job_productgrouptype}
      \r ส่งให้ผู้อนุมัติ คุณ : ${TonextApprove} และแผนก ${TonextDepartment}
      \r เวลา : ${datetime}`
    lineNotify.notify({
      message: message,
    }).then(() => {
      // console.log('send completed!');
      res.send('send completed!')
    });
  }
  else if (approvecode == '1005' && successfully == "1") {
    message = `แจ้งเตือน ? คุณ  ${approveby} อนุมัติเอกสารเรียบร้อยแล้ว 
      \r เอกสาร : ${tdsnumber}
       \r กลุ่มลูกค้า :${customername}
      \r product group  :${job_productgrouptype} 
      \rเอกสารผ่านการอุนุมัติเรียบร้อยแล้ว 
      \r เวลา : ${datetime}`
    lineNotify.notify({
      message: message,
    }).then(() => {
      // console.log('send completed!');
      res.send('send completed!')
    });
  }
  else if (approvecode == '2001') {

    message = `แจ้งเตือน ? คุณ  ${approveby} ได้ตีกลับเอกสาร 
      \r เอกสาร : ${tdsnumber} 
      \r กลุ่มลูกค้า :${customername}
      \r product group  :${job_productgrouptype} 
      \r เวลา : ${datetime}`
    lineNotify.notify({
      message: message,
    }).then(() => {
      // console.log('send completed!');
      res.send('send completed!')
    });

  } else if (approvecode == '3001') {

    message = `แจ้งเตือน ? คุณ  ${approveby} ได้มอบหมายให้อนุมัติแทน 
      \r เอกสาร : ${tdsnumber}
      \r กลุ่มลูกค้า :${customername}
      \r product group  :${job_productgrouptype}  
      \r ผู้อนุมัติแทน :${userdedicate} 
      \r เวลา : ${datetime}`
    lineNotify.notify({
      message: message,
    }).then(() => {
      // console.log('send completed!');
      res.send('send completed!')
    });

  } else if (approvecode == '0000') {
    message = `แจ้งเตือน ? คุณ  ${approveby} ยกเลือกเอกสาร
       \r เอกสาร : ${tdsnumber}
       \r กลุ่มลูกค้า :${customername}
       \r product group  :${job_productgrouptype}  
       \r เวลา : ${datetime}`
    lineNotify.notify({
      message: message,
    }).then(() => {
      // console.log('send completed!');
      res.send('send completed!')
    });

  }

}

module.exports = {
  TDS_SendMail,
  TDS_Sendline
}; 