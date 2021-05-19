class numberGuessing{

  constructor(user, number1, number2, commit){
    this.user = user;
    this.num = Math.floor(Math.random() * number2) + number1;
    this.range = number2-number1;
    this.commit = commit;


    console.log("new ng instance by " + user);
  }
  guess = function(number){
    if(number == this.num){
      return 0;
    }
    else{
      return 1;
    }

  }
}
module.exports = numberGuessing;
