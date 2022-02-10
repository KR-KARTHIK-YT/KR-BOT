const {Permissions} = require('discord.js')
const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
if (message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
 let member = message.mentions.members.first()
 if(!member) return message.channel.send("mention somone to mute ")
 else {
   //if the user had perms then we exucute the function
 member.roles.add("748455725986086973")
 message.channel.send("Member has been succesfully muted.")
 }
 }else {
 message.reply("You don't have permission to do that!")
 }
}
module.exports.name = "whois" 