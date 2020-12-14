module.exports = {
    name: 'eval',
    description: 'Эмулятор кода',
    aliases: ["эмулятор"],
    public: true,
async execute(bot, message, args) {
    if (message.author.id !=="590232478086856716") return message.reply(":no_entry: Ошибка! Данную команду могут использовать только разработчики бота! :no_entry:");
 if (args[0] == 'bot.token') return message.reply('нидам')
  if (args[0] == 'process.env.TOKEN') return message.reply('нидам')
  try {
        let codein = args.join(" ");
        let code = eval(codein);

      let evaled = eval(args.slice(1).join(' ').replace(/client\.token/g, `'${Math.random().toString(36).substr(2)}.${Math.random().toString(36).substr(2)}_${Math.random().toString(36).substr(2)}'`)), timer = Date.now();  
  
   if (typeof code !== 'string')
           code = require('util').inspect(code, { depth: 0 });
        message.channel.send(`\`\`\`fix\nSuccessfully ✅\nTime: ${Date.now() - timer} ms\`\`\`\n\`\`\`js\n${code}\n\`\`\``)

    } catch(e) {
        message.channel.send(`\`\`\`fix\nError✖\`\`\`\n\`\`\`js\n\n${e}\n\`\`\``);
    }
}
}