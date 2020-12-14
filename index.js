/*
config {
  timely - время через которое можно будет получать бонус.
  how - количество монет которое будет даваться в timely.
  upXP - при каком кол-ве опыта будет повышаться уровень.
  prefix - думаю не стоит обьяснять что це.
  owners - Юзера не имеющие никаких ограничений.
  color - Основной цвет бота.
  warn - При скольких кол-во предупреждений юзер будет кикнут.
  
  token - токен бота.
  dataURL - ссылка на базу данных.
}
*/
global.Discord = require('discord.js')
global.mongoose = require('mongoose')
global.ms = require('ms')
global.config = require('./config.json')
global.fs = require('fs')
global.ytdl = require('ytdl-core');
global.superagent = require("superagent");
global.vimeworld = require('vimelib')

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('Запуск порта ', app.get('port'));
});


const bot = new Discord.Client()
bot.commands = new Discord.Collection()
global.Guild = require("./data/guild.js");
global.User = require('./data/user.js');

mongoose.connect(config.dataURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
  console.log('[✅DataBase] Connected!')
})

fs.readdirSync('./commands').forEach(module => {
    const commandFiles = fs.readdirSync(`./commands/${module}/`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${module}/${file}`);
        command.category = module;
        bot.commands.set(command.name, command);
    }
})

bot.on('ready', () => {
  console.log(`[✅Bot] ${bot.user.tag} Online!`)
  bot.user.setActivity("Error404",{type:"STREAMING",url:"https://www.twitch.tv/destroyteamproject"})
})
//bot.on("guildMemberAdd", async (member) => {
 //Guild.findOne({guildID: member.guild.id}, (err,data) => {
 //setTimeout(() => {
 //    member.roles.add(data.role)
 //}, 5000)})})

  


bot.on('message', async(message) => {
  if(message.author.bot) return;
  if(message.channel.type == 'dm') return;
    User.findOne({guildID: message.guild.id, userID: message.author.id}, (err,res) => {
    if(err) return message.channel.send(`\`[❌DataBase]\` Произошла ошибка при добавлении пользователя в базу-данных`)
    if(!res){
      let user = new User({guildID: message.guild.id, userID: message.author.id})
      message.channel.send(`\`[✅DataBase]\` **${message.author.username}** Успешно был(а) добавлен в базу-данных`)
      user.save().catch(err => message.channel.send(`\`[❌DataBase]\` Произошла ошибка при сохранентии данных в базу-данных. Ошибка: \`\`\`${err}\`\`\``));
    }else{
      if(res.warn >= config.warn){
        if(message.member.kickable == false){
           message.reply(`**${message.author.tag}**, у вас было максимальное количество предупреждений, так как у меня нету прав, я не могу вас кикнуть.  Предупреждения были обнулены.`)
           res.warn = 0;
          res.save()
        }else{
        let embed = new Discord.MessageEmbed()
        .setColor(config.color)
        .setDescription(`[:tada:] ${message.author.tag} был кикнут за частое нарушение. Предупреждений: \`${res.warn}/${config.warn}\``)
        message.member.kick(`Частое нарушение...`)
        message.channel.send(embed)
        res.warn = 0;
        res.save()
        }
      }
    }
  })
  Guild.findOne({guildID: message.guild.id}, (err,res) => {
    if(err) return message.channel.send(`[❌DataBase] Произошла ошибка при добавлении сервера в базу-данных, возможно вы в ней`)
    if(!res){
      let guild = new Guild({guildID: message.guild.id})
      message.channel.send(`\`[✅DataBase]\` **${message.guild.name}** Успешно была добавлена в базу-данных. Теперь у вас открыт функционал бота`)
      guild.save().catch(err => message.channel.send(`\`[❌DataBase]\` Произошла ошибка при сохранении сервера в базу-данных. Ошибка: \`\`\`${err}\`\`\``));
    }else{
      if (!message.content.startsWith(res.prefix)) return;
      const args = message.content.slice(res.prefix.length).trim().split(/ +/g);
      const cmdName = args.shift().toLowerCase();
      const command = bot.commands.get(cmdName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
      if(!require('./config.json').owner.includes(message.author.id) && command.public === false) return;
      if (command === undefined) return; command.execute(bot, message, args);
    }
  })
})
bot.login(config.token)