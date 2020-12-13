module.exports = {
    name: 'atack',
    description: 'ударить по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
    let gif = (`https://data.whicdn.com/images/187664188/original.gif`)
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!hugUser) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`atack @имя`))


    let embed = new Discord.MessageEmbed()
        .setTitle("Ударить")
        .setDescription(`**${message.author.username}** Ударил **${message.mentions.users.first().username}**!`)
        .setImage(gif)
        .setColor("#33353c")
    message.channel.send(embed)
}
}