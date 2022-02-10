const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
 if(message.content.toLowerCase().startsWith("=whois")) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setTitle("User Info")
.addFields({
name: "User Joined Server At",
value:`${member.joinedAt}`
}, {
name: "User Created At",
value: `${user.createdAt}`
}, {
name: "User Name & Tag",
value: `${user.tag}`
}, {
name: "User ID",
value: `${user.id}`
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send({embeds:[e]})
};
}
module.exports.name = "whois" 