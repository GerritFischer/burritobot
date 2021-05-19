const Discord = require('discord.js');

module.exports = function (msg, args){

    switch(args[0]){
      case "poop":
          msg.channel.send("poop");
      break;

      default:
        const taskHelp = new Discord.MessageEmbed()
          .setColor("#00447C")
          .setTitle("Available Commands + Detailed Help")
          .setThumbnail("https://image.freepik.com/free-vector/mexican-burrito-tortilla-cartoon-illustration_11460-8526.jpg")
          .setFooter("Copyright © 2021 Gerrit Fischer")
          .setTimestamp()
          .addFields({
            name: "```!help [command]```",
            value: 'Get detailed information about a command',
          }
          )




          msg.channel.send(taskHelp);
          msg.channel.send("WIP \n !ttt new @somebody \n !ttt leave \n !ttt 1-9 \n !gif something \n !rule34 categorie (look up specific chars e.g. hinata => hyuuga_hinata) \n !aufgaben")
      break;
    }
}
