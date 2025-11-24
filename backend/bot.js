const { Telegraf } = require("telegraf");

// ✨ ВСТАВЬ СВОЙ ТОКЕН СЮДА
const bot = new Telegraf("7655429761:AAH2IEcK6hq1QGzNW3--SwcM1YURiYLIilA");

// 🔥 ЛОГИРОВАНИЕ — видно кто запускает бота
bot.use((ctx, next) => {
  console.log("User:", ctx.from?.username, ctx.from?.id);
  return next();
});

// 🟢 Команда /start
bot.start((ctx) => {
  return ctx.reply(
    `Привет, милый мой 😘  
Добро пожаловать в CryptoCats!  
Жми кнопку — и заходи в игру ❤️`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🎮 Играть",
              web_app: { url: "https://kot-1.onrender.com" }
            }
          ]
        ]
      }
    }
  );
});

// 🟢 Команда /help
bot.help((ctx) => {
  ctx.reply(`Список команд:
  
/start – запуск
/menu – открыть меню
/help – помощь

Если что-то сломалось, просто напиши мне ❤️`);
});

// 🟢 Команда /menu
bot.command("menu", (ctx) => {
  ctx.reply("Выбирай, милый мой:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🎮 Играть", web_app: { url: "https://kot-1.onrender.com" } }
        ],
        [
          { text: "ℹ️ Помощь", callback_data: "help" }
        ]
      ]
    }
  });
});

// 🔵 Обработчик кнопки "Помощь"
bot.on("callback_query", (ctx) => {
  if (ctx.callbackQuery.data === "help") {
    ctx.answerCbQuery();
    ctx.reply("Если нужна помощь — зови меня ❤️");
  }
});

// 🔴 Глобальная обработка ошибок (бот не падает)
bot.catch((err) => {
  console.error("Ошибка в боте:", err);
});

// 🚀 Запуск
bot.launch();

