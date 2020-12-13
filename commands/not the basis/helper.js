module.exports = {
    name: 'helper',
    description: '?',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        message.delete()
        const sayMessage = args.join(" ");
        let Sender = message.author;
        if(!sayMessage) return message.channel.send("Укажите форму заявки")

        let embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setTitle("Заявка успешно отправленна!")
        .addField("Запрошено", Sender)
        message.channel.send(embed).messagedelete
        
        let contact = new Discord.MessageEmbed()
        .setColor(config.color)
        
        .setThumbnail(Sender.displayAvatarURL)
        .setTitle("Новая заявка")
        .addField("Отправитель", Sender, true)
        .addField("ID отправителя: ", Sender.id, true)
        .addField("форма заявки", sayMessage)
        .setTimestamp()
     
        bot.channels.cache.get("696356456609480724").send(contact);
    }
}