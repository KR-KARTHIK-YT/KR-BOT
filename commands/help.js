const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
	if(message.content.toLowerCase() === `=help`) {
		let embed = new Discord.MessageEmbed()
			.setTitle(`${client.user.username}'s Commands`)
      .addField(
				`Moderation`,
				`\`=warn <@user>\`, \`=kick <@user>\`, \`=ban <@user>\`, \`=snipe\`, \`!sudo <@user> <text>\`, \`!unban <ID>\`, \`!slowmode <seconds>\`, \`!embed\`, \`!purge <messages\`, \`!}nuke\``
			)
			.addField(
				`Utility Commands`,
				`\`!}dm <@user> <text>\`, \`!emojistats\`, \`!serverinfo\`, \`$!whois <@user>\`,\`!afk\`,\`!avatar <@user>\``
			)
      .addField(
        `Fun Commands`,
        `\`!kiss <@user>\`, \`!cookfor <@user>\`, \`!cuddle <@user>\`, \`$!hug <@user>\`, \`!slap <@user>\`,\`!hack <@user>\``
      )
			.addField(
				`Currency Commands`,
				`\`!daily\`, \`!bal\`, \`!work\`, \`!inventory\`, \`!store\`, \`!pay <@user> <amount>\`, \`!beg\`, \`!deposit <amount>\`, \`!withdraw <amount>\`, \`!rob <@user>\``
			)
			.setFooter ('SUPPORT MY BOT')
			.setColor ('GREEN');
		message.channel.send({embeds : [embed]})
	}
  }

