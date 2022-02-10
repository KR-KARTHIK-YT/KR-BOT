const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
 if(message.content.toLowerCase() === "=serverinfo") {
   let embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .setDescription(`Owner ${message.guild.owner}
                    Channels ${message.guild.channels.cache.size}
                    Roles ${message.guild.roles.cache.size}
                    Emojis ${message.guild.emojis.cache.size}
                    Verification Level ${message.guild.verificationLevel}
                    Region ${message.guild.region}
                    Members Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size} `)
   .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
   .setFooter(`ID: ${message.guild.id}, Created-${message.guild.createdAt.toDateString()}`)

 message.channel.send( {embeds:[ embed ] } )
 }
}