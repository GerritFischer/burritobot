var user;
var coupierCards;
var handCards ;

const bot = require("./bot");
const bj = require("./commands/blackjack");



class Blackjack{
  constructor(user){
    this.user = user;
    console.log("new bj instance by " + user);
    coupierCards = 20//(Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1);
    handCards = (Math.floor(Math.random() * 10) + 1);

  }

   move = function(){
    handCards = handCards + (Math.floor(Math.random() * 10) + 1)
    var length = bj.instances.length;
    if(handCards > coupierCards){

      for(var i = 0; i > length; i++){
        try{
          if(bj.instances[i].user == msg.author.id){
              return "Verloren";
          }
        }

        finally{
          if(bj.instances[i].user == msg.author.id){
              //this.instances[i] = null;

        }



    }
    }
  }
  else{
    return "Hand " + handCards;
  }
}
}
module.exports = Blackjack;
