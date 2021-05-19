const fetch = require("node-fetch");
module.exports = async function (msg, args){
let keywords = "kitten";
if(args.length > 0){
  keywords  = args.join(" ");
}
let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORTOKEN}&contentfilter=off`
let response = await fetch(url);
let json = await response.json();
msg.channel.send(json.results[Math.floor(Math.random() * Object.keys(json).length)].url);
msg.channel.send("GIF from TENOR : " + keywords);
}
