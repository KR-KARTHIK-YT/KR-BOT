const {Permissions} = require('discord.js')
const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
   if(message.content.startsWith("=unmute")) {
  //we determine who can use this command
if (message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
  //if the user has perms then we can use the rest of the function
 member.roles.remove("748455725986086973")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
   //if the user had no perms we gave them this error
 message.reply("You don't have permission to do that!")
 }
 }
}
module.exports.name = "unmute" 