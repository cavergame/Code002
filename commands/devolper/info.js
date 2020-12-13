module.exports = {
    name: "dev",
    description: "Команда позволяющая узнать описание других, не круто ли?",
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        if (message.author.id !=="590232478086856716") return message.reply(":no_entry: Ошибка! Данную команду могут использовать только разработчики бота! :no_entry:");
        let embed = new Discord.MessageEmbed()
        .setTitle(`Информация бота`)
        .setDescription(`DISCORD.JS 12.0.0 \n Node.js 12.14.1 \n Серверов: ${bot.guilds.cache.size} \n`)
        message.channel.send(embed)      
        }
}