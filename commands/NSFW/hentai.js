module.exports = {
    name: 'hentai',
    description: 'показывать мем по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setColor(config.color)
        .setDescription(`Это не NSFW канал`))
    const image = await require("missapi")('/v2/hentai')
    let embed = new Discord.MessageEmbed()
        .setTitle("Вот твой hentai")
        .setImage(image)
        .setColor("#33353c")
    message.channel.send(embed)

    }
}