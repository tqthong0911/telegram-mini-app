const { Telegraf } = require("telegraf");
const TOKEN = "7052192126:AAHPoAjSQUBvMf1CJfEXYokPrX2D9YGbYdQ";
const bot = new Telegraf(TOKEN);

const web_link = "https://telegram-mini-app-ten.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
