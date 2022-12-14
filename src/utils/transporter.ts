import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

async function main() {
    const service : string  =  "gmail";
    const port : number = 587;
    const username : string = "dineshmadushankagss2015@gmail.com";
    const password : string = "ycqigpscguokfzmb";

    const transporter = nodemailer.createTransport({
        service : service,
        port: port,
        secure: false,
        requireTLS: true,
        auth: {
          user: username,
          pass: password,
        },
        logger: true
      });
      return transporter;
}


export async function sendEmails(params:any) {

    const transporter = main();
    const response = await (await transporter).sendMail(params);
    return response;
}
