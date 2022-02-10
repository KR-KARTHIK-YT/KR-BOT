const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
 let embed = new 
 Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`Member Count For ${message.guild}`)
 .setDescription(`Total Members: ${message.guild.members.cache.size}\nHumans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({dynamic: true}))
 .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embeds:[embed]})
}  
module.exports.name = "memcount" 
  
