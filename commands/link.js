const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
const kontrol = require('node-fetch');
const checker = require('site-checker');
moment.locale('tr');

exports.run = async (client, message, args) => {
    message.channel.send("selam, ben adal.")
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'link'
};
