
      module.exports = {
        name: 'servericon',
        description: 'получения иконки',
        aliases: [],
        public: true,
        async execute(bot, message, args) {
message.channel.send(new Discord.MessageEmbed().setColor(config.color).setImage(message.guild.iconURL()).addField(`Картинка сервера`))
message.delete()
}
      }