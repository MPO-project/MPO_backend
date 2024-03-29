const nodemailer=require("nodemailer");

const sendEmail=async (subject, message, send_to, sent_from, reply_to)=>{
    // create email message

    const transporter= nodemailer.createTransport({
        // host:process.env.EMAIL_HOST,
        // port:587,
        // secure:false,
        service:'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },

        timeout: 100000, //set in milliseconds
    })

    // options for sending email

    const options = {
        from: sent_from,
        to:send_to,
        replyTo: reply_to,
        subject:subject,
        html: message
    }

    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err)
        }

        else{
            console.log(info)
        }
    })
}

module.exports = sendEmail;