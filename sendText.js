import twilio from "twilio";
import dotenv from 'dotenv';
dotenv.config();

const accKey = process.env.SID;
const accPass = process.env.TOK;

const client = twilio(accKey, accPass);

const message = await client.messages.create({
  body: "Test test TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST",
  from: "+12067592291",
  to: "+xxxx",
});

console.log(message.body);