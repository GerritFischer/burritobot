const Keyv = require('keyv');
const keyv = new Keyv('mysql://root:s35Fpopa788@localhost:3306/burritobot');
keyv.on('error', err => console.error('Keyv connection error:', err));

module.exports = async function (msg, args){
  const user = msg.mentions.users.first() || msg.member.user;
  if(msg.member.roles.cache.some(r=>["Administrator"].includes(r.name))){
    if(args[0] < 0){
      msg.channel.send("Ungültiges Guthaben");
    }
    else{
      bank = await keyv.set(user.id, args[0]);
      msg.channel.send("Guthaben von " + user.username + " auf " + args[0] + " gesetzt");
    }
  }
  else{
    msg.channel.send("Nur Administatoren können diesen Befehl ausführen! Dieser Versuch wurde aufgezeichnet. Bei einem erneuten Versuch diesen Befehl ohne nötige Berechtigung auszuführen folgen Konsequenzen!");
  }


}
