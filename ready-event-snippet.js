const onlyGuild = true; // ONLY ADD SLASH COMMANDS TO A SPECIFIC GUILD
const guildID = '123456789123456789'; // ADD THE SLASH COMMANDS TO THIS GUILD, (If onlyGuild is true).

bot.interactions = new Collection();
const slashFiles = fs.readdirSync('interactions').filter(file => file.endsWith('.js'));

for (const file of slashFiles) {

    const slash = require(`../interactions/${file}`);

    let slashCommand;

    if (slash.config.options) {
        slashCommand = {
            name: slash.config.name,
            description: slash.config.description,
            options: slash.config.options
        }
    } else {
        slashCommand = {
            name: slash.config.name,
            description: slash.config.description
        }
    }

    if (!onlyGuild) {

        try {
            await bot.application?.commands.create(slashCommand)
            bot.interactions.set(slash.config.name, slash)
            console.log('Interaction' + ` | ` + slash.config.name + ` has loaded.`)
        } catch(err) {
            console.log(err)
        }

    } else {

        try {
            await bot.guilds.cache.get(guildID)?.commands.create(slashCommand);
            await bot.application?.commands.create(slashCommand)
            bot.interactions.set(slash.config.name, slash)
            console.log('Interaction' + ` | ` + slash.config.name + ` has loaded.`)
        } catch(err) {
            console.log(err)
        }

    }


}