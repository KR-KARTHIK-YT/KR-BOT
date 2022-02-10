const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
   if (message.content.startsWith('=nuke')) {
if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.");
message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send(`Done the channel was nuked requested by ${message.author.username}`); })
message.channel.delete();
}
}
module.exports.name = "nuke" 