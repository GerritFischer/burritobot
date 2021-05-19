const Keyv = require('keyv');
const keyv = new Keyv('mysql://root:s35Fpopa788@localhost:3306/burritobot');
const Discord = require('discord.js');

keyv.on('error', err => console.error('Keyv connection error:', err));

module.exports = async function (msg, args){
    const user = msg.mentions.users.first() || msg.member.user;
    switch(args[0]){
      case "transfer":
        msg.channel.send("transfer test");
      break;

      default:
        money = await keyv.get(user.id);
        if(money == null){
          bank = await keyv.set(user.id, 0);
          money = await keyv.get(user.id);
        }
        const balanceEmbed = new Discord.MessageEmbed()
          .setColor("#00447C")
          .setTitle("Bank " + user.username)
          .setThumbnail(user.avatarURL())
          //.setFooter("Grabbed by iServGrabber V1.0")
          .addFields(
            {name: "Balance: ", value: money + "€",}
          )
        msg.channel.send(balanceEmbed);
      break;
    }

}
