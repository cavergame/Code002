module.exports = {
    name: 'anime',
    description: 'аниме по рп',
    aliases: [],
    public: true,
    async execute(bot, message, args) {

            const anime = randomanime.anime();
            let embed = new Discord.MessageEmbed()
            .setTitle("Случайная аниме фотка")
            .setColor(config.color)
            .setImage(anime);
            message.channel.send(embed);
          
        
    }
}