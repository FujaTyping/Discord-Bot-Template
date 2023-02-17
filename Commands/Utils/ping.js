const {EmbedBuilder} = require('discord.js');

module.exports = {
    config: {
        name: 'ping',
        description: 'Test bot',
    },
    async run (client,message,args) {
        message.reply("🏓 Pong !")
    }
}