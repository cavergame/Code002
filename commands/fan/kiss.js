
module.exports = {
    name: 'kiss',
    description: 'поцеловать по рп',
    aliases: ["поцеловать"],
    public: true,
    async execute(bot, message, args) {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!hugUser) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`kiss @имя`))
    const { body } = await superagent
        .get(`https://nekos.life/api/kiss`);

    let embed = new Discord.MessageEmbed()
        .setTitle("Поцеловать c:")
        .setDescription(`**${message.author.username}** поцеловал  **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("#33353c")
    message.channel.send(embed)
}
}