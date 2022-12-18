const {Telegraf} = require('telegraf')

const bot = new Telegraf("5982658106:AAHuV0mFsvTsxoGzk7xXXBosvLseaYmRiH4")



bot.start(ctx =>{
    ctx.reply('خوش آمدید به اولین ربات خودتان')
})

bot.hears('hi', ctx =>{
    ctx.reply("hi "+ ctx.from.first_name);
})

bot.command('user', ctx =>{
    ctx.reply(ctx.from.id + " - " + ctx.from.username);
})

bot.on('message', ctx=>{
    if(ctx.message.text == 'bradpitt'){
        ctx.replyWithPhoto('https://www.thewikifeed.com/wp-content/uploads/2021/11/brad-pitt-1.jpg')
    }
    if(ctx.message.text == 'aziz'){
        ctx.reply('👍')
    }
})


bot.launch();