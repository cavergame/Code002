module.exports = {
    name: "stats",
    description: "Команда позволяющая узнать описание других, не круто ли?",
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        const vime = new vimeworld(config.vimetoken);
        const userName = args.join(" ");
        if(!userName) return message.reply(`Вы ввели неверный никнейм игрока\n\nПример: !user Vlad_Cyphersky | !user DimoshaTyan | !user LoganFrench`);
      vime.getUsersbyName(userName).then((result) => { 
          var userID = result[0].id;
          var userRank = result[0].rank;
          var userN = result[0].username;
          var userLVL = result[0].level;
      vime.getSession(userID).then((result) => { 
      var status = result.online.value ? "Онлайн | "+result.online.message : "Оффлайн";
      const embedLOL = new Discord.MessageEmbed()
          .setColor(config.color)
          .setTitle(`Статистика игрока на VimeWorld MiniGames ${vime.returnReadable(userRank).prefix} ${userN}`)
          .addField(`Ваш айди`, `${userID}`)
          .addField(`Ваш ранг`, `${userRank}`)
          .addField(`Ваш уровень`, `${userLVL}`)
          .addField(`Ваш статус`, `${status}`)
          .setImage("https://skin.vimeworld.ru/helm/" + userN + ".png");
  message.channel.send(embedLOL);
    })
    })
}
}
