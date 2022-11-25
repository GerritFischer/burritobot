//number guessing
const Keyv = require('keyv');
const keyv = new Keyv('--put database here--');
const Discord = require('discord.js');
const numberGuessing = require("./../games/numberGuessing");
var instances = [];
var did = false;
var commit;
module.exports = async function (msg, args){

    var number1 = parseInt(args[0]) || 0;
    var number2 = parseInt(args[1]) || 0;
    var commit = parseFloat(args[2]) || 0;

    var range = number2 - number1;
    for(var i = 0; i < instances.length; i++){
      if(instances[i].user == msg.author.id){
        console.log("IF" + i);
          if(instances[i].guess(number1)){
            money = await keyv.get(msg.author.id);
            bank = await keyv.set(msg.author.id, money - instances[i].commit);

            const nglostEmbed = new Discord.MessageEmbed()
              .setColor("#00447C")
              .setTitle("Wrong number! " + msg.author.username)
              .setThumbnail(msg.author.avatarURL())
              .addFields(
                {name: "You guessed: ", value: number1},
                {name: "It was: " , value: instances[i].num},
                {name: "You lost: ", value: instances[i].commit + "€",},
              )

            msg.delete();
            msg.channel.send(nglostEmbed);
            //msg.delete();
            instances[i].user = 0;

          }
          else{
            //logic
            var profit = instances[i].commit *  (1 + (instances[i].range*0.1))
            money = await keyv.get(msg.author.id);
            console.log((parseFloat(money) + profit));
            bank = await keyv.set(msg.author.id, (parseInt(money) + profit));

            const ngcongratsEmbed = new Discord.MessageEmbed()
              .setColor("#00447C")
              .setTitle("Congrats " + msg.author.username + "!")
              .setThumbnail(msg.author.avatarURL())
              .addFields(
                {name: "You guessed: ", value: number1},
                {name: "Commit: ", value: instances[i].commit + "€",},
                {name: "You won: ", value: profit + "€",},
                {name: "You profited: ", value: (parseInt(profit) - parseInt(instances[i].commit)) + "€",}

              )
            msg.delete();
            msg.channel.send(ngcongratsEmbed);
            instances[i].user = 0;




          }
          did = true;
      }

    }
    if(!did){
      if(number1 <= 0 || number2 <= 0 || commit <= 0){
              msg.channel.send("no valid format");
      }
      else{
        instances.push(new numberGuessing(msg.author.id,number1, number2, commit));
        const ngEmbed = new Discord.MessageEmbed()
          .setColor("#00447C")
          .setTitle("Number Guessing " + msg.author.username)
          .setThumbnail(msg.author.avatarURL())
          .addFields(
            {name: "Guess a number: ", value: "[" + number1 + "]=============[" + number2 + "]",},
            {name: "Commit: ", value: commit + "€",}
          )
            msg.delete();
            msg.channel.send(ngEmbed);
      }


      console.log(commit);
    }
      did = false;
}
