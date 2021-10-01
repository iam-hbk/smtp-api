const express =require("express");
const PORT = process.env.PORT || 3001;
const app =express();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: "1aacc138aae93e",
    pass: "615e75d714de85"
        }
})
message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}

transporter.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }


// app.get("/api",(req,res)=>{res.json({message:"Hello from server!"})});
app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})
