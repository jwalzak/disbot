// Require dotenv
require('dotenv').config();
require('./command_handler/command_handler.js');
const jokeList = require('./joke_list.json');
const joke = jokeList.joke_list;
let randomNum;


// Require necessary discord.js classes
const { Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
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
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('primary')
          .setLabel('Primary')
          .setStyle('PRIMARY'),
      );
    await interaction.reply({ content: 'Pong!', components: [row] });
  }
  else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  }
   else if (commandName === 'joke') {
    randomNum = joke[Math.floor(joke.length * Math.random())];

    const embed = new MessageEmbed()
      .setColor('#00099ff')
      .setTitle('Here is your very funny joke:')
      .setDescription(randomNum);
    await interaction.reply({ content: 'A joke, for you, my friend.', embeds: [embed] });
  }
});

// Login to Discord with your client's token
client.login(TOKEN);
