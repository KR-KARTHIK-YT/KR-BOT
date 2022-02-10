const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
  let snipe = new Discord.Collection();
client.on('messageDelete', message => {
	if (message.author.bot) return;
	snipe.set(message.channel.id, {
		content: message.content,
		author: message.author
	});
});
client.on('message', message => {
	//snipe commandon different message event
	if (message.author.bot) return;
	if (message.content.toLowerCase() === `=snipe`) {
		const msg = snipe.get(message.channel.id);
		if (!msg) return message.channel.send(' :x: | Theres Nothing To Snipe');
		const embed = new Discord.MessageEmbed()
			.setTitle('Last Deleted Message')
			.setColor(`GREEN`)
			.setTimestamp()
			.setThumbnail(`${msg.author.displayAvatarURL({ dynamic: true })}`)
			.addFields(
				{ name: 'Sender', value: msg.author.username },
				{ name: 'Content', value: msg.content }
			);
     message.channel.send({embeds : [embed]})
	}
})
}
module.exports.name = "snipe" 