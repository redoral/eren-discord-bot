/** dotenv import so we can use environment variables */
require('dotenv').config();

/** Initialize bot */
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

/** Eren's array of quotes */
const quotes = [
  'I have to be the one to do this! I\'ve got to settle this!',
  'That was a move I learned the hard way while you were lying around.',
  'You say reality is living an easy life and giving into your feelings?',
  'How can you call yourself a soldier?',
  'How could anything be more important than keeping humanity from being wiped out?',
  'I believe my squad will be victorious! Fight well!',
  'I never needed to happen.',
  'You\'re not soldiers. You\'re not warriors. You\'re just murderers.',
  'I\'m not planning on handing it down to any of you.',
  'I\'m the same as you. I didn\'t have any other choice.',
  'You have the freedom to defend the world\'s freedom and I have the freedom to continue moving forward.',
  'I\'m gonna destroy them! Every last one of those animals on this earth!',
];

/** Login the bot */
bot.login(TOKEN);

/** Set bot status and log bot name */
bot.on('ready', () => {
  bot.user.setStatus('invisible');
  // bot.user.setActivity('Farmville');
  console.info(`Logged in as ${bot.user.tag}!`);
});

/** Sends a random quote if 'eren' is mentioned, or replies 'i love you' to my simp friend whenever she mentions eren */
bot.on('message', msg => {
  if (msg.content.toLowerCase().includes('eren') && msg.author.id === '711746265825673339') {
    msg.reply('I love you.');
  } else if (msg.content.toLowerCase().includes('eren')) {
    msg.reply(quotes[Math.floor(Math.random() * (quotes.length + 1))]);
  }
});