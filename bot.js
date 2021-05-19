console.log("Loading BurritBot...");


const commandHandler = require("./commandHandler");
const Discord = require("discord.js");
require("dotenv").config();


const client = new Discord.Client();


client.login(process.env.BOTTOKEN);
client.on("ready", readyDiscord);
client.on("message", commandHandler);


function readyDiscord(){
  client.user.setActivity("mit deinen Bankdaten");
  console.log("Startup successfull! Bot is ready for operation");
  //bj.instances[0] = new bj(0000);
}
