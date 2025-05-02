// jtpj skrx giqc oqpf

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service : 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVICE_USER,
    pass: process.env.EMAIL_SERVICE_PASSWORD,
  },
});


const sendMail = async ({emails, subject, html}) => {
    try{
        const info = await transporter.sendMail({
            from: '"Admin App" <harshit@gmail.com>', // sender address
            to: emails, // list of receivers
            subject: subject, // Subject line

            // do not send text and html together, send one at a time
            // text: "Hello world?", // plain text body
            html: html, // html body
      });
    }catch (err) {
        console.log('-----------');
        console.log('Could not send email to',emails);
        console.log(err.message);
        console.log('-----------');

        throw err;
    }
}


const sendOtpMail = async ({otp, email}) => {
    await sendMail({
        subject : 'Otp verification @ admin app',
        emails : [email],
        html : `
            <html>
                <body>
                    <div>
                        <div>
                            <h2>Otp Verification</h2>
                            <p>Your otp verification is ${otp}</p>
                        </div>
                    </div>
                </body>
            </html>
        `
    })
}

module.exports = {
    sendOtpMail,
};
