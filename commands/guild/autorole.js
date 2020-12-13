module.exports = {
    name: 'autorole',
    aliases: ["set-prefix"],
    public: true,
    async execute(bot, message, args) {
        if (message.author.id !=="590232478086856716") return message.reply(":no_entry: В разработке Данную команду могут использовать только разработчики бота! :no_entry:");
        if(!args[0]) return message.reply(`Укажите роль @сама роль`)
        const role = message.mentions.roles.first()
        Guild.findOne({guildID: message.guild.id}, (err,data) => {
            data.role = role.id
            data.save()
        })
        let embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setDescription(`Вы успешно сменили начальную роль на \`${args[0]}\``)
        message.channel.send(embed)
    }
}