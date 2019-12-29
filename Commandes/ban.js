const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send('Désolé Onii-san tu n/as pas la permission');
    
    if(message.mentions.users.size === 0) {
        return message.channel.send('Onii-chan tu as oublié de mentionner la personne !'); 
    }
    
    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(`Pardon, Onii-chan je n'ai pas trouvé l'utilisateur`);
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Le bot n'a pas la permission !`);
   
    ban.ban().then(member => {

        message.channel.send(`${member.user.username} Ciao ! Vous avez été bannis par ${message.author.username}`);
        message.mentions.users.first().send(`Hmmm hmm hmm hmmmmm ! **${message.guild.name}** par ${message.author.username}`).catch(console.error);
    });
};

module.exports.help = {
    name: "ban"
};