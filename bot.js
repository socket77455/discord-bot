const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setPresence({game: { name: "ultra-h.com | !info", type: 0 }});
});

bot.on('message', message => {
    if (message.author.equals(bot.user)) return;
    if (message.content == 'hi') {
        message.reply('hello');
    }
    if (message.content == "help") {
        message.reply("Please type !info");
    }
});

bot.login(process.env.BOT_TOKEN);
