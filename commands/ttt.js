const tictactoe = require("./../games/tictactoe");
const Discord = require('discord.js');
var instances = [];
var notInGame = true;
var left = false;

module.exports = async function (msg, args){


        switch(args[0]){
            case "active":
              for(var i = 0; i < instances.length; i++){
                if(instances[i].player[0] == msg.author.id){
                  msg.channel.send("Bereits in einer Runde mit " + instances[i].username[1] + "!");
                  notInGame = false;
                }
                else if(instances[i].player[1] == msg.author.id){
                  msg.channel.send("Bereits in einer Runde mit " + instances[i].username[0] + "!");
                  notInGame = false;
                }
              }

              if(notInGame){
                msg.channel.send("In keiner aktiven Runde!");
              }
                notInGame = true;

            break;
            case "leave":
            for(var i = 0; i < instances.length; i++){
              if(instances[i].player[0] == msg.author.id){
                  instances[i].player[0] = null;
                  instances[i].player[1]= null;
                  msg.reply("Runde mit " + instances[i].username[1] + " verlassen!");
                  left = true;
              }
              else if(instances[i].player[1] == msg.author.id){
                instances[i].player[0] = null;
                instances[i].player[1] = null;
                msg.reply("Runde mit " + instances[i].username[0] + " verlassen!");
                left = true;
              }
            }
            if(!left){
              msg.reply("Du bist in keiner Runde!");
            }
            left = false;


            break;
            case "new":
            const user = msg.mentions.users.first() || msg.member.user;

            for(var i = 0; i < instances.length; i++){


              if(instances[i].player[0] == msg.author.id || instances[i].player[1] == msg.author.id || instances[i].player[0] == user.id || instances[i].player[1] == user.id){
                  msg.channel.send("Einer der beiden Spieler ist bereits in einer Runde!");
                  notInGame = false;



              }
            }


            if(notInGame){
              instances.push(new tictactoe(msg.author.id, user.id, msg.author.username, user.username, parseInt(args[3])));
              const tttstartEmbed = new Discord.MessageEmbed()
                .setColor("#00447C")
                .setTitle("TIC TAC TOE")
                .setThumbnail("https://miro.medium.com/max/512/1*Syzc_BbO0QHTx74NLHcpiQ.png")
                .addFields(
                  {name: msg.author.username + " vs. " + user.username, value: "Commit: " + parseInt(args[3])   + "€"}
                )
                msg.channel.send(tttstartEmbed);
                msg.channel.send(instances[instances.length - 1].generateEmbed());

            }


            notInGame = true;
            break;
            default:

              if(Number.isFinite(parseInt(args[0]))){

                for(var i = 0; i < instances.length; i++){
                  if(instances[i].player[0] == msg.author.id || instances[i].player[1] == msg.author.id){
                    console.log("YES SIR");
                    if(instances[i].move(args[0], msg)){
                        msg.channel.send(instances[i].generateEmbed());
                        if(instances[i].checkWin()){
                            msg.channel.send(instances[i].username[+ instances[i].turn] + " hat gewonnen!");
                            instances[i].player[0] = null;
                            instances[i].player[1] = null;

                        }

                    }
                    else{

                          msg.channel.send("Feld bereits belegt! / Du bist nicht dran!");
                          instances[i].moves++;


                    }

                    if(instances[i].moves == 0){
                      msg.channel.send("Unentschieden!");
                      instances[i].player[0] = null;
                      instances[i].player[1] = null;
                    }




                  }

                }
              }
              else{
                      msg.channel.send("Kein gültiger Befehl! Für Hilfe: ```!help ttt```");
              }

            break;






        }



}
