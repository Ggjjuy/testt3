const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608390851386933285")
setInterval(function() {
channel.send(`3mori 3mori 3mori`);
}, 30)
})

client.login(process.env.BOT_TOKEN);