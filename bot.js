const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setPresence({game: { name: "ultra-h.com | !info", type: 0 }});
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Hey ${member}! Welcome to the official ultra host discord server. Do not forget to read the channel topics! You may ask for help in <#489467701648031754> or introduce and talk with other members in <#489465446366707725> Channel. Enjoy your stay 😊😊😊`);
});

bot.on('message', message => {
    if (message.author.equals(bot.user)) return;
    if (message.content == 'hi') {
        message.reply('hello');
    }
    if (message.content == "help") {
        message.reply("Please type !info");
    }
    if (message.content == "!info") {
        message.reply("Hello! I am the official Discord bot of **Ultra Host** created by Socket#7043. Type `!cmds` to access currently available commanda. I am currently in development, more features will be added in near future. **Do not forget to visit my home :smile: at** https://ultra-h.com");
    }
    if (message.content == "!cmds") {
        message.reply("__•••**Available commands[3]**•••__ \n \n `!info` *>>* **Tells you about the bot.** \n `!cmds` *>>* **To check all the available commands.** \n `!mypic` *>>* **Check your profile picture.**");
    }
});

bot.login(process.env.BOT_TOKEN);
