module.exports = {
    name: 'play',
    aliases: [],
    async execute(bot, message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.reply('зайдите в какой нибудь канал');
        }
        if(!args[0]) return message.reply(`Укажите ссылку на видео`)
        let validate = await ytdl.validateURL(args[0]);
        if(!validate)
          return message.channel.send("Ошибка: некоректный формат ссылки");
        voiceChannel.join().then(connection => {
            const stream = ytdl(`${args[0]}`, { filter: 'audioonly' });
            const dispatcher = connection.play(stream)

            dispatcher.on('end', () => voiceChannel.leave());
        });
    
    }
};