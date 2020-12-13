module.exports = {
    name: 'hug',
    description: 'обняться по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!hugUser) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`hug @имя`))

    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/hug`);

    let embed = new Discord.MessageEmbed()
        .setTitle("Обнял c:")
        .setDescription(`**${message.author.username}** Обнял **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("#33353c")
    message.channel.send(embed)
}
}