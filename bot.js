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
  channel.send(`Welcome to the server, ${member}`);
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
        message.reply("Hello! I am the official Discord bot of **Ultra Host** created by Socket#7043. I am currently in development, more features will be added in near future. **Do not forget to visit my home :smile: at** https://ultra-h.com");
    }
});

bot.login(process.env.BOT_TOKEN);
