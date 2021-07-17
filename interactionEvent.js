const { Discord, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	once: false,
	run: async (interaction, bot) => {

        if(!interaction.isCommand()) return;
        
        let args = interaction.options.map(section => section)
        if (!bot.interactions.has(interaction.commandName)) return;

        try {
            bot.interactions.get(interaction.commandName).run(bot, interaction, args);
        } catch (error) {
            console.error(error);
            interaction.reply({ content: 'There was an error trying to execute that command!' });
        }

},};