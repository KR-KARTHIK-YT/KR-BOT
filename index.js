process.on('uncaughtException', (err, origin) => {
  console.error(err, origin);
});
process.on("unhandledRejection", (reason, p) => {
  console.log(reason, p);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(err, origin);
});
//this is the error coming when i type =ping
const express = require("express");
const app = express();
const db = require('quick.db');
const pt = require('prettytime')
const {Permissions} = require('discord.js')
app.listen(3000, () => {
  console.log("KR is up!");
})
app.get("/",(req, res)=> {
  res.send("Am ready to serve");
})
const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS" ]});
//cmd
const fs = require('fs');
const prefix = "="
client.commands = new Discord.Collection();
const commands = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./commands/${commandName}`)
   client.commands.set(commandName, command)
}
client.on('ready', () => {
 client.user.setActivity(` ${client.guilds.cache.size} server with = prefix `, { type: 'Watching' })
})
//invite things to do here 
//start of messeage 
 client.on('messageCreate', async (message) => {
    //am so unlucky 
  if (message.content.startsWith(prefix)){
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName)
   if (!command) return 
   command.run(client, message, args)
  }
   if (message.content === "=Server count"){
    send(`Curretly in ${client.guilds.cache.size} servers `)
  }

   if (message.content === "=emoji count"){
        let emoji = new Discord.MessageEmbed()
        .setColor("#FF3571")
        .setDescription(`There are nearly ${message.guild.emojis.cache.size}<a:PikachuCool:743042281061482576> emoji's in this server  `)
        .setImage("https://i.pinimg.com/originals/df/ea/dd/dfeaddf703acf71277dbb1d6d81479b0.gif")
        .setTimestamp()
       .setFooter(`Requested by ${message.author.username} `)
        message.reply({embeds:[emoji]})
   }
  if (message.content === 'cool') {
 message.react("😎");
}
   if (message.content === "ping everyone"){
    message.channel.send("@everyone")
  }
     if (message.content === "ping thajus"){
    message.channel.send("@Thajus ")
     }
 if (message.content === "=Hypesquad"){
    message.channel.send("<a:hypesquad:933255015018168361>")
     }
if (message.content === "=flame"){
 message.channel.send("<a:wflame:743042244331831377>")
 }
     
if (message.content === '=react hypesquad') {
 message.react("<a:hypesquad:933255015018168361>");
}
if (message.content === '=react flame') {
 message.react("<a:emji name here:emoji id here>");
}
 if (message.content === '=react cool') {
 message.react("😎");
}
if (message.content === '=react cry') {
 message.react("😭");
}
if (message.content === '=react eyes') {
 message.react("👀");
}
 if (message.content === '=react smile') {
 message.react("😄");
}
 if (message.content === '=react neutral') {
 message.react("😐");
}
 if (message.content === '=react tired') {
 message.react("😫");
}
  if(message.content.startsWith("=Kidnap")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Are you dumb who are you kidnaping mention somone by @")
 else{
let replies = [ (`${victim} was Kidnaped by a gang of teens`), (`${victim} was very smart!,you were shot in leg.`), (`${victim} you were caught by a police you said he was a relative but the police were very smart and you were arrested for 6 months`), 
 (`${victim} was kidnaped and you earned 10 Dollars`), (`A goose honked at you and the ${victim} escaped`), 
 (`Some psychopath kidnaped ${victim}`), 
 (`${victim} robbed you 🤣🤣 you now have dollar in you wallet`), (`${victim} was a smart pie he teamed with you `), 
 (`sorry you are a bad person 😡 so god made your attempt to be unsuccsefull`), (`${victim} was robbed by somone else so not a worth shot try again later`), (`${victim}  you won he lost . becuse you are his boss🤣🤣🤣🤣🤣🤣🤣🤣 `), 
 (`${victim} was ..... idk`), 
 (`Someone named kr found ${victim} and you were arrested and fined  20dollar`), (`Sorry I am bussy kidnap somone else dude `), 
 (`${victim} made a deal with me sorry bro`), (`${victim} was hacked by an 
Oreo`), (`An alien named MEE6 abducted ${victim} in their sleep`),]

message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`) 
 }
 }
   if(message.content.startsWith("=Random emoji")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Are you dumb first mention somone")
 else{
let replies = [ (`:hushed: ${victim} ohhhh `) ,(`:hushed: ${victim} ohhhh `),(` ${victim} is :angry: with you for disturbing him :no_mouth:`),]

 message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`) 
 }
 }
 if(message.content === "=Meme 1") {
 message.delete()
 message.channel.send("https://cdn.discordapp.com/attachments/874447411144171610/932615844712824832/w969.png")
}
 if (message.content === "kr embed"){
    let embed = new Discord.MessageEmbed()
    .setTitle("KR-KARTHIK GM CHANNEL")
    .setAuthor("KR-KARTHIK","https://yt3.ggpht.com/y-I3chwcfPmhfIhIvAr0wD-7Npqaz0SxlwzVdHK5BinYBZbsQh4QXKLHwPu7KVAGcROJvrWzEg=s176-c-k-c0x00ffffff-no-rj")
    .setURL("https://www.youtube.com/channel/UCQYSVQS_PZab7R4MsrI7TXQ")
    .setDescription("**Hi Guys I am kr bot and I hope you all are fine,If you dont know about the channel of KR-KARTHIK(owner) can you guys check it out when you have time and also you can share your valuble  feedbacks and content idea in this form - https://forms.gle/KpYuRsRusF6GmisL7**")
    .setColor("#FF3571")
    .setImage("https://share.creavite.co/U4pT8h8wUhMTAxFa.gif")
    .setTimestamp()
    let embed2 = new Discord.MessageEmbed()
        .setTitle("Wan to add me to your server,click here")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=749103090992545912&permissions=8&scope=bot")
        .setColor("#FF3571")
        .setDescription("Bot under construction")
       message.channel.send({embeds:[embed, embed2]})
 }
 //replies
  if(message.content === "hi") {
let replies = ["Hi 😁 dude how are you", "hiiii🤗 ", "Hloo ", ] 
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 
}
  if(message.content === "Hi") {
let replies = ["Hi 😁 dude how are you", "hiiii🤗 ", "Hloo🤓 ", ] 
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 
}
     if (message.content === "Sorry kr"){
    message.channel.send("oh its ok dude")
  }
  if(message.content.startsWith('=say')){
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
 message.delete()
message.channel.send(whattosay.join(" "))
}
if (message.content === "=Latency") {
message.delete()
message.channel.send(`⏱| **${client.ws.ping}ms** Latency!`)
}
  if(message.content.startsWith('=dm')){
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
 message.delete()
 message.author.send(whattosay.join(" "))
}
//embeds
if (message.content ===  "=coin flip") {
 let replies = ["Heads", "Tails"];
 let embed2 = new Discord.MessageEmbed()
        .setTitle("**Coin Flip**")
        .setColor("RANDOM")
        .setDescription(replies[Math.floor(Math.random() * replies.length)])
 message.channel.send({embeds:[ embed2]})
}
  
const { MessageActionRow, MessageButton } = require('discord.js');
const row = new MessageActionRow()
.addComponents(
  new MessageButton()
  
)
//hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
})
//calc
 const math = require('mathjs')
client.on("messageCreate", async message => {
if(message.content.toLowerCase().startsWith("=calc")) {
 const args = message.content.split(" ").slice(1)
 if(!args[0]) return message.channel.send('Please provide a question');
 let resp;
 try {
 resp = math.evaluate(args.join(" "))
 } catch (e) {
 return message.channel.send('Please provide a **valid** question')
 }
 const embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle('Calculator')
 .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
 .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

 message.channel.send({embeds:[embed]})
 } 

//poll
 if(message.author.bot) return;
 if (message.content.startsWith("=poll")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) return message.reply("Correct Usage: `=poll- Then your question here `")
 message.delete(2000);
 const pollTopic = await message.channel.send(`**@${message.author.username}#${message.author.discriminator}** Asks: **${sentence}**`);
 pollTopic.react(`<a:verif:932918938822660107>`)
 pollTopic.react(`❌`);
 };
 //mod commands
 if (message.content.toLowerCase().startsWith('=kick')) {
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need to mention a user/provide an ID of the user')
 if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('You lack the required permissions')
 if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send('This user seems to be a moderator')

 try {
 member.kick().then(() => {
 message.channel.send(`Kicked ${member}`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Oops, something went wrong.pls check that if my role has permissions to do it')
 }
}
if(message.content.startsWith("=Dm")) {
 const whattosend = message.content.slice("".length).trim().split(/ +/g);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
message.channel.send(`Done the messeage was sended to ${member}`)
}
 if (message.content.toLowerCase().startsWith('kr.kick.y')) {
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need to mention a user/provide an ID of the user')
 try {
 member.kick().then(() => {
 message.channel.send(`Kicked ${member}`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Oops, something went wrong.pls check that if my role has permissions to do it')
 }
}
if (message.content.toLowerCase().startsWith('kr.ban.perm.')) {
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need to mention a user/provide an ID of the user')
 try {
 member.ban().then(() => {
 message.channel.send(`Baked ${member}`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Oops, something went wrong.pls check that if my role has permissions to do it')
 }
}
 if (message.content.toLowerCase().startsWith('=ban')) {
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need to mention a user/provide an ID of the user')
 if (!message.member.permissions.haws('BAN_MEMBERS')) return message.channel.send('You lack the required permissions')
 if (member.permissions.has('BAN_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send('This user seems to be a moderator')

 try {
 member.ban().then(() => {
 message.channel.send(`banned ${member}`)
 })
 } catch (err) {
 console.log(err)
 message.channel.send('Oops, something went wrong.pls check that if my role has permissions to do it')
 }

}  if (message.content.toLowerCase().startsWith('=unban')) {
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need provide an ID of the user')
 if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You lack the required permissions')
		let args = message.content.split(' ').slice(1);
		const id = args[0];
 let embed = new Discord.MessageEmbed()
  .setTitle("  **Member Was Unabanned!** ")
  .setDescription(`${member} was unbanned by ${message.author}`)
  .setColor("RANDOM")
  .setTimestamp()
  .setImage("https://c.tenor.com/ug56PLUPf4QAAAAC/discord-warn-discord-meme.gif")
  .setFooter(`Warning by @${message.author.username}`)
	message.guild.members.unban(id);
  message.channel.send({embeds:[embed]})
}
//first we write the triger
 if (message.content.toLowerCase().startsWith('=warn')) {
 const member = message.mentions.members.first()
 if (!member) return message.channel.send('You need to mention a user/provide an ID of the user')
 if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('You lack the required permissions')
 if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('KICK_MEMBERS')) return message.channel.send('This user seems to be a moderator')

 let embed = new Discord.MessageEmbed()
  .setTitle("  **Member was Warned!** ")
  .setDescription(`${member} was warned by ${message.author}`)
  .setColor("RANDOM")
  .setTimestamp()
  .setImage("https://c.tenor.com/ug56PLUPf4QAAAAC/discord-warn-discord-meme.gif")
  .setFooter(`Warning by @${message.author.username} `)
  message.channel.send({embeds:[embed]})
}
 if(message.content.startsWith("=clear")){
let arg = message.content.split(" ")
if (message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
let clear = arg[1];
if(!clear) return message.channel.send(`Incorrect usage of command you need to provide an amount of messages to Clear. Example: -clear 20`)
if(isNaN(clear)) return message.channel.send(":x: | Please Put a Valid Number to Clear messages.")
if(clear > 100) return message.channel.send(":x: | can't Clear more than 100 messages.")
if(clear < 1) return message.channel.send(`You cannot Clear less than 1 message`)
 
message.channel.bulkDelete(clear)
message.channel.send(`succesfully clear ${clear} message! | If clear fails please make sure you have MANAGE_MESSAGES to make the clear seccessful.`)
.then(message => 
 message.delete({timeout: 90000})
 )
}else{
message.reply("You dont have perms!")
} 
}
 if(message.content.startsWith(".kr.clear.perm")){
let arg = message.content.split(" ")
let clear = arg[1];
if(!clear) return message.channel.send(`Incorrect usage of command you need to provide an amount of messages to Clear. Example: -clear 20`)
if(isNaN(clear)) return message.channel.send(":x: | Please Put a Valid Number to Clear messages.")
if(clear > 100) return message.channel.send(":x: | can't Clear more than 100 messages.")
if(clear < 1) return message.channel.send(`You cannot Clear less than 1 message`)
 
message.channel.bulkDelete(clear)
message.channel.send(`succesfully clear ${clear} message! | If clear fails please make sure you have MANAGE_MESSAGES to make the clear seccessful.`)
.then(message => 
 message.delete({timeout:10000})
 )
} 
//afk
 if (message.content.includes('=Afk')) {
  message.member
   .setNickname(`${message.author.username} [AFK]`)
    .catch((error) => message.channel.send("."));
 }
 if (message.content.includes('=end afk')) {
  message.member
   setNickname('')
 }
 if (message.content.includes('A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","=")) {
    message.member
   .setNickname('')
  }
  //test
 if(message.content.startsWith("=rank")) {
let embed = new
Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`${message.author.username}'s Rank`)
.setThumbnail(message.author.displayAvatarURL({dynamic:true}))
.setDescription("Rank: #1\nLevel: 1")
 .setFooter(`Requested by ${message.author.username}`)
 message.channel.send({embeds:[embed]})
}
if(message.content.startsWith("=hack")) {
const user = message.mentions.users.first();
if(!user) return message.channel.send("Mention Someone to hack")
message.channel.send("**[25%]** Finding IP..").then(m => {
setTimeout(() => {
m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
setTimeout(() => {
m2.edit(`**[75%]** DONE! email: ${user.username}@gmail.com | password: XjdhgikshGdk`).then(m3 => {
setTimeout(() => {
m3.edit("**[100%]** Deleting System32..").then(m4 => {
setTimeout(() => {
m4.edit(`Done hacking ${user}! all info was sent online.`)
}, 5500);
});
}, 2800);
});
}, 4500);
});
}, 5000);
});
};
 if(db.has(message.author.id + '=afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '=afk')
 db.delete(message.author.id + '=messageafk')
 }
 if (message.content.startsWith('=afk')) {
 message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
 // then here you use the database :
 db.set(message.author.id + '=afk','true')
 db.set(message.author.id + '=messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('=afk off')) {
 db.delete(message.author.id + '=afk')
 db.delete(message.author.id + '=messageafk')
 }
 // If one of the mentions is the user
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;

 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + '=afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.. Leave a message if urgent by DMing him`)
 })
 //dank memer
   if(message.content.toLowerCase().startsWith("=bal") || message.content.toLowerCase().startsWith("=balance")) {
  let balance = await db.get(`wallet_${message.author.id}`)
  let bank = await db.get(`bank_${message.author.id}`)

  if(balance === null) balance = 0
  if(bank === null) bank = 0
  let currency = "💸"
  let bbank = "💰"
  let moneyEmbed = new Discord.MessageEmbed()
  .setTitle(`**${message.author.username}'s Balance**`)
  .setDescription(`Pocket:**${currency}${balance}**\nBank: **${bbank}${bank}**`)
  .setColor("GREEN")
  .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setFooter("This Guy got some got lol")
  message.channel.send({embeds: [moneyEmbed]})
}
if(message.content.toLowerCase().startsWith("=daily")) {
const check = await db.get(`dailyCheck_${message.author.id}`)
const timeout = 86400000;
if(check !== null && timeout - (Date.now() - check) > 0) {
  const ms = require("pretty-ms")
    const timeLeft = ms(timeout - (Date.now() - check))
    message.channel.send(`lol u cant claim again. come back after **${timeLeft}**!!`)
                        
        } else {
    let reward = 500;
    let currentBalance = await db.get(`wallet_${message.author.id}`)
    message.channel.send(`Here ya go! You claimed 500 :money_with_wings: **Daily Reward**! Come back tomorrow!`)
    await db.set(`wallet_${message.author.id}`, currentBalance + reward)
    await db.set(`dailyCheck_${message.author.id}`, Date.now())
}
     }
 if(message.content.toLowerCase().startsWith("=work")) {
 const check = await db.get(`workCheck_${message.author.id}`)
 const timeout = 600000
 if(check !== null && timeout - (Date.now() - check) > 0) {
 const ms = require("pretty-ms")
 const timeLeft = ms(timeout - (Date.now() - check))
 message.channel.send(`Chill bro! come back after ***${timeLeft}***`)
 } else {
 let currency = "💸"
 let money = Math.round(Math.random() * 500)|| Math.round(Math.random()*500) || Math.round(Math.random()* 0)
 if(money === 0){
   message.reply("You asked the mods of the server you can work for them but they were too jeolous of you and you were muted for 5 minute " , "You tried to help the grandma but she went on her own. got nothing lol" , "You cooked terrible! and you got $0 " , "Tried to fix a pickaxe, instead you broke it")}
 let currentWallet = await db.get(`wallet_${message.author.id}`)
 let currentBank = await db.get(`bank_${message.author.id}`)
 await db.set(`wallet_${message.author.id}`, currentWallet + money)
 await db.set(`workCheck_${message.author.id}`, Date.now())
 let embed = new Discord.MessageEmbed()
 .setTitle(`${message.author.id}`)
 .setDescription('worked'[Math.floor(Math.random() * 'worked'.length)])
let replies = [`You cooked some food, and got **$${money}**`, `You fixed a car. and got **$${money}**`, `You got **$${money}** by searching on the ground.`, `You fixed some guy's pickaxe and got **$${money}**`, `You helped a grandma, and got **$${money}**`]
message.channel.send(replies[Math.floor(Math.random() * replies.length)]) 
}
}
//dep 
if(message.content.startsWith(prefix + "=dep")){
let balance = db.get(`wallet_${message.author.id}`); 
console.log(balance);
let bank = db.get(`bank_${message.author.id}`);
console.log(bank);
if(balance === null) balance = 0
if(bank === null) bank = 0
let amount = message.content.slice("".length).trim().split(/ +/);
amount.shift().toLowerCase().split(" ")[0]
if(!amount[0]) return message.channel.send("Pls give a valid number to deposit")
if (Number.isNaN(+amount)) return message.reply("Sorry but I cant do anything with that pls give a valid number")
if(amount > balance) return message.channel.send("Oh no you dont have enough 💸money :neutral_face: ")
await db.subtract(`wallet_${message.author.id}`, amount)
await db.add(`bank_${message.author.id}`, amount)
message.channel.send(`succesfully deposited ${amount} to your balance` )
}
//timer
if(message.content.toLowerCase().startsWith('=timer')){
 const args = message.content.split(' ').splice(1);
 if(!args[0]) return message.channel.send('please include a valid time');
 if(isNaN(args[0])) return message.channel.send('please include a valid number');
 if(!args[1]) return message.channel.send('you have to include something for me to remind you with')
 setTimeout(() => {
 const msg = args.splice(1).join(' ');
 message.channel.send(`${message.author}, ${msg}`)
  message.author.send(`${message.author}, ${msg} this was reminder by `)
 }, parseInt(args[0], 10) * 1000)
}
 if(message.content.toLowerCase().startsWith('=slap')){
         const user = message.mentions.users.first() || message.author;
        const images = ["https://media0.giphy.com/media/lSDqu7IbMqMiQvCjjN/giphy.gif",
 "https://i.imgur.com/uwHDm3r.gif",
 "https://c.tenor.com/_hOx_MqEN_YAAAAd/mosquito-anime.gif",
 "https://media0.giphy.com/media/OQ7phVSLg3xio/giphy.gif",
 "https://i.gifer.com/WpWp.gif",
 "https://thumbs.gfycat.com/IllinformedRigidAfricangoldencat-size_restricted.gif",
 "https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif",
 "https://media.tenor.co/videos/09307032b404d283eec9761971d9595c/mp4",
 "https://media.tenor.co/videos/b16614ffcbcfd215ef5af3366016e16f/mp4"]
        if (!user) return message.reply("Mention someone")
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setAuthor(`${message.author.username}, slaps ${user.username}` ,message.author.displayAvatarURL())
            .setImage(images[~~(Math.random() * images.length)])
        message.reply({ embeds: [embed] })
 }
if(message.content.toLowerCase().startsWith("=avatar")) {
let user = message.mentions.users.first() || message.member || message.author;
if(!user) return
let e = new Discord.MessageEmbed()
.setAuthor(` Avtar of ${user.username} `)
.setColor("RANDOM")
.setFooter(`Requested by ${message.author.username}`)
.setTimestamp()
.setImage(user.displayAvatarURL())
message.reply({embeds:[e] })
}
//verify
 if(message.content.toLowerCase() === "=verify") {
   if(message.member.roles.cache.some(role => role.id === '744352206353858681')) {
     message.reply("Whoa...you are already verified ")
     }else{
}
message.member.roles.add(`744352206353858681`)
let embed = new Discord.MessageEmbed()
 .setTitle("Verified")
 .setColor("RED")
 .setFooter('Verified')
 
 message.channel.send({embeds:[embed]})
 .then(msg => {
 msg.delete({ timeout: 5000 })
//1000 = 1 sec
//5000 = 5 sec
//10000 = 10 sec
 })
 }

 if (message.content.toLowerCase().startsWith("=gay")) {
 let gayrate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59","60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
 let victim = message.mentions.users.first()
 if (!victim) message.reply ("Mention someone!")
 else {
 message.lineReplyNoMention
 let embed = new Discord.MessageEmbed()
 .setTitle(`Howgay Machine`)
 .setDescription((`${victim} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay!`))
 .setFooter("howgay")
 .setColor("RANDOM")
 .setTimestamp()
 message.channel.send({embeds:[embed]})
 }
 }
 let days = Math.floor(client.uptime / 86400000);
 let hours = Math.floor(client.uptime / 3600000) % 24;
 let minutes = Math.floor(client.uptime / 60000) % 60;
 let seconds = Math.floor(client.uptime / 1000) % 60;
if(message.content === "=uptime") {
 let embed = new Discord.MessageEmbed()
 .setTitle("Uptime Of KR-BOT")
 .setDescription(`***KR-BOT'S UPTIME:*** ${days}d ${hours}h ${minutes}m ${seconds}s`)
 .setColor("RANDOM")
 .setFooter(`Requested by ${message.author.tag}`)
  .setThumbnail("https://cdn.discordapp.com/app-icons/749103090992545912/d004df57b9ebb3e4459eac9cdbd9c4bc.png?size=256")
 .setTimestamp()
 message.channel.send({embeds:[embed]})
}
if (message.content.startsWith("=removerole")) {
if (message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
 const removedrole = message.content.slice("".length).trim().split(/ +/);
 const member = message.mentions.members.first() 
removedrole.shift().toLowerCase().split(" ")[1]
let warned = message.mentions.members.first();

 if (!warned)
 message.channel.send(
 "Please mention someone whom you want to remove a role using **-removerole [member], [ROLE ID]**! Make sure the bot has Manage role permission and bot role is higher than the role you are giving."
 );
if(!removedrole[1]) return message.channel.send(':x: Please insert a Role Id Also also :x:')
 else {
member.roles.remove(`${removedrole.slice(1).join(" ")}`)
 let embed = new Discord.MessageEmbed()
 .setTitle("Role Manager")
 .setDescription(`${warned} **was removed a role (<@&${removedrole.slice(1).join(" ")}>) by** **${message.author}.**`)
 
.setColor("RED")
 .setFooter(`Role Remover: ${message.author.tag} • The message might be wrong if the bot role was lower than the removed role or if the member already had the role.`)
 
 message.channel.send({embeds:[embed]})
 }
 }}
if (message.content.startsWith("=addrole","=Addrole")) {
if (message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
 const addedrole = message.content.slice("".length).trim().split(/ +/);
 const member = message.mentions.members.first() 
addedrole.shift().toLowerCase().split(" ")[1]
let warned = message.mentions.members.first();
 if (!warned)
 message.channel.send(`Please mention someone whom you want to add and make sure to put the role id instead of the role Name like this **-addrole @example 745526388856979556** to get a role id got to your-Settings>Advanced>Turn on the developer mode>Right click on the role which u wannt to add>paste it as shown in the example Make sure the bot has Manage role permission and bot role is higher than the role you are giving.`)
if(!addedrole[1]) return message.channel.send(':x: Please insert a Role Id Also also :x:')
member.roles.add(`${addedrole.slice(1).join(" ")}`)
 let embed = new Discord.MessageEmbed()
 .setTitle("Role Added")
 .setDescription(`${warned} **was added a role (<@&${addedrole.slice(1).join(" ")}>) by** **${message.author}.**`)
 
.setColor("GREEN")
 .setFooter(`Role Added: ${message.author.tag} • The message might be wrong if the bot role was lower than the removed role or if the member already had the role.`)
 message.channel.send({embeds:[embed]})
 }}
 //new
 if (message.content.startsWith("=suggest")) {
 let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
 const reportlog = new Discord.MessageEmbed()
 .setTitle(`A New Suggestion`) 
 .setColor('RANDOM')
.setDescription(args.join(" "))
.setFooter(`Suggestion by ${message.author.tag}`)
.setTimestamp()
client.channels.cache.get('940605944776261672').send({embeds:[reportlog]}).then (sentMessage => {
 sentMessage.react("⬆️")
 sentMessage.react("⬇️")
 })
 message.channel.send("Your Suggestion has been succesfully been sent.")
}
  })
  client.on("message", async message => {
  if(message.content.startsWith("=reaction")){
    const args = message.content.split(" ");
    if(!args[1]) return message.channel.send("Please include an emoji");
    if(!args[2]) return message.channel.send("There must be an id for the message");
    if(isNaN(args[2])) return message.channel.send("Please include a valid message id");
    let emoji = ReactionEmojiGrab(args[1]);
    if(!isNaN(emoji)) emoji = client.emojis.cache.get(emoji);
    try{
      const msg = await message.channel.messages.fetch(args[2]);
      await msg.react(emoji);
      db.push(`${message.guild.id}.reactionroles`, 
        {
          message: msg.id,
          emoji: emoji.id || emoji,});
     }catch(e){
      message.channel.send("Error\n" + e);
    }
  }
})

client.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

client.on("messageReactionRemove", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

function ReactionEmojiGrab(reactionArg){
  const contents = reactionArg.substring(1, reactionArg.length - 1).split(":");
  if(contents.length > 1){
    return contents[2];
  }else{
    return reactionArg;
  }
}

client.login(process.env.token)