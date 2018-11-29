const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setPresence({game: { name: "ultra-h.com | ?info", type: 0 }});
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'hi') {
        message.reply('hello');
    }
    if (message.content === "help") {
        message.reply("Please type ?help");
    }
});

bot.login(process.env.BOT_TOKEN);
