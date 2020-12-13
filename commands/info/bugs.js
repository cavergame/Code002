    module.exports = {
    name: 'bug',
    description: 'сообщить о баге',
    aliases: ["bugs"],
    public: true,
    async execute(bot, message, args) {

    let Invite = await message.guild.channels.cache.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Укажите баг").then(msg => msg.delete(5000));

   let contact = new Discord.MessageEmbed()
   .setColor("#33353c")
   
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`[${message.guild.name}](${Invite.url})`)
   .setTitle("Сервер:")
   .addField("Отправитель", Sender, true)
   .addField("ID отправителя: ", Sender.id, true)
   .addField("Баг: ", sayMessage)
   .setTimestamp()

    bot.users.cache.get("590232478086856716").send(contact);

    let embed = new Discord.MessageEmbed()
    .setColor("#33353c")
    .setTitle("Баг успешно отправлен!")
    .addField("Запрошено", Sender)
    .addField("Баг: ", sayMessage)
    .setFooter("Мы рассмотрим вашу проблему")

    message.channel.send(embed).then(msg => {msg.delete(15000)});


      }
    }