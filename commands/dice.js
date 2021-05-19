module.exports = function (msg, args){
    msg.reply("You've rolled a " + (Math.floor(Math.random() * 6) + 1)  + "!");
  }
