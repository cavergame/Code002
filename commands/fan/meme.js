module.exports = {
    name: 'meme',
    description: 'показывать мем по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
    const image = await require("missapi")('/v2/feed')
    let embed = new Discord.MessageEmbed()
        .setTitle("Вот твой мемчик c:")
        .setImage(image)
        .setColor("#33353c")
    message.channel.send(embed)

    }
}