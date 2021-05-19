const aufgaben = require("./commands/aufgaben.js");
const dice = require("./commands/dice.js");
const bank = require("./commands/bank");
const gif = require("./commands/gif.js");
const ping = require("./commands/ping.js");
const rule34 = require("./commands/rule34.js");
const setbank = require("./commands/setbank.js");
const ng = require("./commands/ng.js");
const help = require ("./commands/help.js");
const work = require("./commands/work.js");
const testing = require("./commands/testing.js");
const ttt = require("./commands/ttt");
const info  = require("./commands/info");
const fivegum = require("./commands/fivegum")

const commands = { aufgaben, dice, bank, gif, ping, rule34, setbank, ng, help, work, testing, ttt, info, fivegum};

module.exports = async function (msg){
  let tokens = msg.content.split(" ");
  let command = tokens.shift();
  if(command.charAt(0) === '!'){
    //valid command
    command = command.substring(1);
    commands[command](msg, tokens);
  }
}
