module.exports = {
    name: 'boobs',
    description: 'показывать мем по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setDescription(`Это не NSFW канал`))
    const image = await require("missapi")('/v2/real_boobs')
    let embed = new Discord.MessageEmbed()
        .setTitle("Вот твои boobs")
        .setImage(image)
        .setColor("#33353c")
    message.channel.send(embed)

    }
}