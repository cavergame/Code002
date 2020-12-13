module.exports = {
    name: 'cuddle',
    description: 'похлопать по рп',
    aliases: ["cud"],
    public: true,
    async execute(bot, message, args) {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if (!hugUser) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`cuddle @имя`))

    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/pat`);

    let embed = new Discord.MessageEmbed()
        .setTitle("Похлопать c:")
        .setDescription(`**${message.author.username}** похлопал по головке  **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("#33353c")
    message.channel.send(embed)
}
}