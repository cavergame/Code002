module.exports = {
    name: 'pussy',
    description: 'показывать мем по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setDescription(`Это не NSFW канал`))
    const image = await require("missapi")('/v2/real_pussy')
    let embed = new Discord.MessageEmbed()
        .setTitle("Вот твой фоточка с pussy")
        .setImage(image)
        .setColor("#33353c")
    message.channel.send(embed)

    }
}