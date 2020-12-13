module.exports = {
    name: 'feed',
    description: 'покормить по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        const image = await require("missapi")('/v2/feed')
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!hugUser) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`feed @имя`))
    let embed = new Discord.MessageEmbed()
        .setTitle("Покормить c:")
        .setDescription(`**${message.author.username}** покормил  **${message.mentions.users.first().username}**!`)
        .setImage(image)
        .setColor("#33353c")
    message.channel.send(embed)

    }
}