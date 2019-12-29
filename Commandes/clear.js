const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Onii-chan tu n'as pas la permission !`).catch(console.log);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Onii-sama je n'ai pas la permission !`).catch(console.error);

    if(!args[0]) return message.channel.send(`Vous devez spécifier un nombre de messages à supprimer !`)

    if(isNaN(args[0])) return message.channel.send(`Vous devez spécifier un nombre !`);

    message.channel.bulkDelete(args[0]);

    message.channel.send(`${args[0]} Onii-san, j'ai supprimé ton message !`);
};

module.exports.help = {
    name: "clear"
}