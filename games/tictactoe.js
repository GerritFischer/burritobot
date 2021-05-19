const Discord = require('discord.js');


class tictactoe{
    //store gamestate with id's of players
    gamestate = []

    turn = true;
    player = [];
    username = [];
    moves = 9;

  constructor(player1, player2, username1, username2, money){

    this.player[0] = player1;
    this.player[1] = player2;
    this.money = money;
    this.username[0] = username1;
    this.username[1] = username2;
    for(var i = 0; i < 3; i++){
      this.gamestate[i] = [];
      for(var j = 0; j < 3; j++){
        this.gamestate[i][j] = '0';
      }
    }



    console.log("new ttt instance by " + player1);
}
  move = function(cell, msg){
    if(msg.author.id == this.player[+ this.turn]) {
          return false;
    }
    else{
            this.moves--;
            this.turn = !this.turn;
            console.log(+ this.turn);
            switch(parseInt(cell)){
              case 1:
                if(this.gamestate[0][0] == "0"){
                  this.gamestate[0][0] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 2:
                if(this.gamestate[0][1] == "0"){
                  this.gamestate[0][1] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 3:
                if(this.gamestate[0][2] == "0"){
                  this.gamestate[0][2] = this.player[+ this.turn];
                  console.log(this.gamestate);
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 4:
                if(this.gamestate[1][0] == "0"){
                  this.gamestate[1][0] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 5:
                if(this.gamestate[1][1] == "0"){
                  this.gamestate[1][1] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 6:
                if(this.gamestate[1][2] == "0"){
                  this.gamestate[1][2] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 7:
                if(this.gamestate[2][0] == "0"){
                  this.gamestate[2][0] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 8:
                if(this.gamestate[2][1] == "0"){
                  this.gamestate[2][1] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              case 9:
                if(this.gamestate[2][2] == "0"){
                  this.gamestate[2][2] = this.player[+ this.turn];
                  return true;
                }
                else{
                  return false;
                  this.turn = !this.turn;
                }
              break;
              default:
                console.log("DEFAULT JUNGE");
              break;
            }

    }







  }




  equals3 = function(a, b, c){
      return (a==b && b==c && a != '0');
  }



  checkWin = function(){

    if(this.equals3(this.gamestate[0][0], this.gamestate[1][0], this.gamestate[2][0])){
        return true;
    };
    if(this.equals3(this.gamestate[0][1], this.gamestate[1][1], this.gamestate[2][1])){

        return true;


    };
    if(this.equals3(this.gamestate[0][2], this.gamestate[1][2], this.gamestate[2][2])){

        return true;
    };
    if(this.equals3(this.gamestate[0][0], this.gamestate[0][1], this.gamestate[0][2])){
        return true;
    };
    if(this.equals3(this.gamestate[1][0], this.gamestate[1][1], this.gamestate[1][2])){
       return true;
    };
    if(this.equals3(this.gamestate[2][0], this.gamestate[2][1], this.gamestate[2][2])){
      return true;
    };
    if(this.equals3(this.gamestate[0][0], this.gamestate[1][1], this.gamestate[2][2])){
      return true;
    };
    if(this.equals3(this.gamestate[2][0], this.gamestate[1][1], this.gamestate[0][2])){
      return true;
    };


    return false;

  }



  generateEmbed = function(){
    var textArr = [];
    console.log(this.player[0]);
    console.log(this.player[1]);
    for(var i = 0; i < 3; i++){
      textArr[i] = [];
      for(var j = 0; j < 3; j++){
        textArr[i][j] = '0';
      }
    }
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if(this.gamestate[i][j] === this.player[0]){
          textArr[j][i] = ":regional_indicator_x:";
        }
        else if (this.gamestate[i][j] === this.player[1]){
          textArr[j][i] = ":o2:";
        }
        else{
          textArr[j][i] = ":white_medium_square:";
        }
      }
    }

    return new Discord.MessageEmbed()
      .setColor("#00447C")
      .setTitle("TIC TAC TOE")
      .addFields(
        {name: textArr[0][0] + textArr[1][0] + textArr[2][0] + "\n" +
               textArr[0][1] + textArr[1][1] + textArr[2][1] + "\n" +
               textArr[0][2] + textArr[1][2] + textArr[2][2] + "\n" ,
        value: "Test"
      }
    )







  }



}
module.exports = tictactoe;
