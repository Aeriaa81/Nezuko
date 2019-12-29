const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send('Sorry, Onii-chan you didnt have the permission');
    
    if(message.mentions.users.size === 0) {
        return message.channel.send('Onii-chan tu as oublié de mentionner la personne !'); 
    }
    
    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send(`Pardon,Onii-chan je n'ai pas trouvé l'utilisateur`);
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`Le bot n'a pas la permission !`);
   
    kick.kick().then(member => {

        message.channel.send(`${member.user.username} Bye bye ! Vous avez été expulsé par ${message.author.username}`);
        message.mentions.users.first().send(`Hmmm hmm hmm hmmmmmm ! **${message.guild.name}** par ${message.author.username}`).catch(console.error);
    });
};

module.exports.help = {
    name: "kick"
};