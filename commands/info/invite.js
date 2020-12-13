
      module.exports = {
        name: 'invite',
        description: 'приглашение',
        aliases: [],
        public: true,
        async execute(bot, message, args) {
  let embed = new Discord.MessageEmbed() 
  .setColor("#33353c")
  .setDescription('**[Кликай](https://discordapp.com/oauth2/authorize?&client_id=692818310852771862&scope=bot)** чтобы пригласить меня на сервер')
  message.channel.send(embed)
}
}