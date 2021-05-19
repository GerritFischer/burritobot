const Keyv = require('keyv');
const bj = require('./../gameBlackjack');
const keyv = new Keyv('mysql://root:s35Fpopa788@localhost:3306/burritobot');





module.exports = function (msg, args){
    var instances = [];
    var runningGame = false;
    var length = instances.length;
    for(var i = 0; i < length; i++){
      if(instances[i].user == msg.author.id){
        runningGame = true;
        msg.channel.send(instances[i].move(args[0]));
        if(mess === "Verloren"){
          bj.instances[i].user = 0;
        }
      }

      }
       if(!runningGame){
        instances.push(new bj(msg.author.id));
        mess = instances[i].move(args[0]);
        msg.channel.send(mess);

    }

}
