module.exports = {
    name: "dev",
    description: "Состояние бота",
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        if (message.author.id !=="590232478086856716") return message.reply(":no_entry: Ошибка! Данную команду могут использовать только разработчики бота! :no_entry:");
        let embed = new Discord.MessageEmbed()
        .setTitle(`Информация бота`)
        .setDescription(`DISCORD.JS 12.0.0 \n Node.js 12.14.1 \n Серверов: ${bot.guilds.cache.size} \n Пользователей: ${bot.users.cache.size}`)
        .setTimestamp()
        .addField(`Разработчики:`,`${config.owner.map(x => bot.users.cache.get(x).tag).join('\n')}`)
        message.channel.send(embed)      
        }
}
