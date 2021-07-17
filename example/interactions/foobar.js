// THIS IS WHERE YOU CREATE SLASH COMMANDS, THIS IS AN EXAMPLE FILE.

const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: 'foobar',
        description: 'The is the description for a slash command.',
        options: [{
            name: 'message',
            type: 'STRING',
            description: 'This is an example of an option.',
            required: false
        }]
    },
    run: async (bot, interaction, args) => {

        // THIS IS WHERE YOU PUT THE CODE YOU WANT TO RUN.
        // BOT, INTERACTION AND ARGS ARE ALEADY PASSED THROUGH.
        // IN THIS CASE, TO ACCESS THE USER INPUT STRING, YOU NEED TO USE "args[0].value"
        // THE .VALUE GETS THE VALUE, READ MORE ABOUT THIS ON DJS DOCS.

}}