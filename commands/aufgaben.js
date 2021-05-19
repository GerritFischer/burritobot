var name;
var value;

const fs = require('fs');
const Discord = require('discord.js');
module.exports = function (msg, args){
  var data = fs.readFileSync("./data.txt", "utf8");

      let string = data;
      let arr = string.split(",")


      const taskEmbed = new Discord.MessageEmbed()
        .setColor("#00447C")
        .setTitle("Aufgaben:")
        .setThumbnail("https://leiningergymnasium.de/lgg-wAssets/img/weblication/wThumbnails/IServ_Logo-2740d9670a502e3gcbfc8359dd4a4fa2@min400.png")
        .setFooter("Grabbed by iServGrabber V1.0")
        .setTimestamp()




      for(var i = 0; i < arr.length; i++){
        if(i%2 === 0){
          name = arr[i];
          console.log("1");
        }
        else{
          value = arr[i];
          taskEmbed.addFields(
            {name: name, value: "Abgabe: " + value}
          )
          console.log("2");
        }
      }


    msg.channel.send(taskEmbed);
}
