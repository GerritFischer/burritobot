const fetch = require("node-fetch");
module.exports = async function (msg, args){
keywords = "cum";
if(args.length > 0){
  keywords  = args.join(" ");
}
console.log(keywords);

try{

  let url = `https://r34-json-api.herokuapp.com/posts?tags=${keywords}`
  let response = await fetch(url);
  let json = await response.json();
  msg.channel.send(json[Math.floor(Math.random() * Object.keys(json).length)].file_url);
  msg.channel.send("Tags: " + keywords);
}
catch{

msg.channel.send("RULE34 API NOT AVAILABLE! SORRY HORNY CUNT");

}

}
