/** Imports */
import Discord from 'discord.js';
import dotenv from 'dotenv';
import { standardReplies, simpReplies, yesNoReplies } from './replies.js';

/** Initialize bot */
dotenv.config();
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

/** Login the bot */
bot.login(TOKEN);

/** Set bot status and log bot name */
bot.on('ready', () => {
	bot.user.setStatus('invisible');
	// bot.user.setActivity('Attack on Titan', { type: 'WATCHING' });
	console.info(`Logged in as ${bot.user.tag}!`);
});

/** Message listener */
bot.on('message', (msg) => {
	if (msg.content.toLowerCase().includes('eren yes or no')) {
		/** Eren yes or no */
		msg.reply(yesNoReplies[Math.floor(Math.random() * yesNoReplies.length)]);
	} else if (
		/** SIMP mode */
		msg.content.toLowerCase().includes('eren') &&
		msg.author.id === process.env.SIMP.toString()
	) {
		msg.reply(simpReplies[Math.floor(Math.random() * simpReplies.length)]);
	} else if (msg.content.toLowerCase().includes('eren')) {
		/** Standard eren mode */
		msg.reply(
			standardReplies[Math.floor(Math.random() * standardReplies.length)]
		);
	}
});
