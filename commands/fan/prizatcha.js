module.exports = {
    name: 'nestle',
    description: 'прижаться по рп',
    aliases: ["прижаться"],
    public: true,
    async execute(bot, message, args) {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!hugUser) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`nestle @имя`))

    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/cuddle`);

    let embed = new Discord.MessageEmbed()
        .setTitle("Прижаться c:")
        .setDescription(`**${message.author.username}** прижался к **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("#33353c")
    message.channel.send(embed)
}
}