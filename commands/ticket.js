const Discord = require('discord.js')
module.exports.run = (client, message, args) => {


let sender = message.author
let mention = message.mentions.users.first()
if(!mention) return message.reply("Please mention someone to hire")
var role = message.guild.roles.cache.find((role) => role.id === "823345018550616074");

const { Permissions } = require('discord.js')
const guild = client.guilds.cache.get("822990749544218674");


if(mention.id == "368597757084172289") {

    message.delete()
    guild.channels.create(`ticket-${sender.username}`, {

        type: 'GUILD_TEXT',
        permissionOverwrites: [
          {
            id: message.guild.id,
            deny: [Permissions.FLAGS.VIEW_CHANNEL],
          },
          {
            id: message.author.id,
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
          },
        ],
      }).then(channel => channel.send(`${sender}, Welcome to your ticket! Tayras will be with you shortly :)`))
    
} else {
  message.reply("That is not a valid server dev!")
}
  



}
module.name = "hire"