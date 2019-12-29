const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {

   message.channel.send({
       embed:{
           color: 0xe91e63,
           title:`Les Commandes de Nezuko`,
           fields: [
               {
               name:"Ce que je peux faire !",
               value:"neko, hug, kiss, kitsune, pat, cry, waifu"
           },
           {
               name: "Administratifs:",
               value:"ban, clear, kick, addrole, delrole"
           },
           {
               name:" Attention NSFW !",
               value: "nekolewds"        
            },
            { 
                name: "Utilitaires",
                value: "ping, stats"
            }  
     ],
        
     
    }  
})
};

module.exports.help = {
    name:"help"
}