// Require dotenv
require('dotenv').config();
const jokeList = require('./joke_list.json');
const joke = jokeList.joke_list;
let randomNum;


// Require necessary discord.js classes
const { Client, Intents } = require('discord.js');
const TOKEN = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  }
   else if (commandName === 'joke') {
    randomNum = joke[Math.floor(joke.length * Math.random())];
    await interaction.reply(`Here is your joke:\n ${randomNum}`);
  }
});

// Login to Discord with your client's token
client.login(TOKEN);
