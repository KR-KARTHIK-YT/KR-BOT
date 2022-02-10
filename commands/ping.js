const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
 client.channels.cache.get("kr-bot").send(`pong`)

}  
module.exports.name = "ping" 
  
