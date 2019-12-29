const Discord = ("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member
   // if(!membre) return message.channel.send(`Veuillez mentionner un utilisateur !`)

   message.channel.send({
       embed:{
           color: 0xe91e63,
           title:`Les Statistique de l'utilisateur **${membre.user.tag}**`,
           thumbnail: {
               url: membre.user.displayAvatarURL
           },
           fields: [
               {
               name:"> ID :",
               value: membre.id 
           },
           {
               name: "Crée le :",
               value: moment.utc(membre.user.createdAt).format("LL")
           },
           {
               name:"Jeu :",
               value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Cette personne n'est pas en ligne que peut-il faire ?"}`        
            },
            { 
                name: "Rejoins le :",
                value: moment.utc(membre.joinedAt).format("LL")
            }  
     ],
        footer: {
            text: `Informations de l'utilisateur ${membre.user.username}`
       }
     
    }  
})
};

module.exports.help = {
    name:"stats"
}