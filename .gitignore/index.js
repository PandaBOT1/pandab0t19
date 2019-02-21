const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ApexBot, :help");
    console.log("le bot a bien ete connecte");
});

bot.login(process.env.TOKEN);
