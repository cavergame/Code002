module.exports = {
    name: 'animeass',
    description: 'аниме по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
    if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
    .setColor(config.color)
    .setDescription(`Это не NSFW канал`))
            const anime = randomanime.nsfw();
            let embed1 = new Discord.MessageEmbed()
            .setTitle("Вот твой ass")
            .setColor(config.color)
            .setImage(anime);
            message.channel.send(embed1);
          
        
    }
}