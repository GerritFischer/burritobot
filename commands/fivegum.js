const words = ['how', 'it', 'feels', 'to', 'chew', 'five', 'gum'];





module.exports = function (msg, args){
    let messa = "";
    let arrayW = shuffle(words);
    for(var i = 0; i < words.length - 1; i++){
      messa += arrayW[i] + " ";
      console.log(arrayW[i]);
    }

  msg.channel.send(messa);
  console.log(arrayW.length);
  msg.channel.send(arrayW[arrayW.length - 1] + " " + arrayW[arrayW.length - 1] + " :cyclone: :lips: :cyclone:" )

}



function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
