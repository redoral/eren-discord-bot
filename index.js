/** dotenv import so we can use environment variables */
import dotenv from 'dotenv';
import { quotes, simpMode, yesNo } from './quotes';

/** Initialize bot */
dotenv.config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

/** Login the bot */
bot.login(TOKEN);

/** Set bot status and log bot name */
bot.on('ready', () => {
	bot.user.setStatus('available');
	bot.user.setActivity('Attack on Titan', { type: 'WATCHING' });
	console.info(`Logged in as ${bot.user.tag}!`);
});

/** Sends a random quote if 'eren' is mentioned, or replies 'i love you' to my simp friend whenever she mentions eren */
bot.on('message', (msg) => {
	if (msg.content.toLowerCase().includes('eren yes or no')) {
		/** eren yes or no */
		msg.reply(yesNo[Math.floor(Math.random() * yesNo.length)]);
	} else if (
		/** simp mode */
		msg.content.toLowerCase().includes('eren') &&
		msg.author.id === process.env.SIMP.toString()
	) {
		msg.reply(simpMode[Math.floor(Math.random() * simpMode.length)]);
	} else if (msg.content.toLowerCase().includes('eren')) {
		/** standard eren mode */
		msg.reply(quotes[Math.floor(Math.random() * quotes.length)]);
	}
});
