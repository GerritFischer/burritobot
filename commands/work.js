const Keyv = require('keyv');
const keyv = new Keyv('mysql://root:s35Fpopa788@localhost:3306/burritobot');
const Discord = require('discord.js');
var instances = [];
var did = false;

module.exports = async function (msg, args){

    for(var i = 0; i < instances.length; i++){
      if(instances[i] == msg.author.id){
          msg.channel.send("Du hast heute schon gearbeitet!");
          did = true;
      }
    }
    if(!did){

        instances.push(msg.author.id);
        money = await keyv.get(msg.author.id);
        bank = await keyv.set(msg.author.id, parseInt(money) + 4000);
        msg.channel.send("Du hast 4000 verdient!");
      }

      did = false;
}
