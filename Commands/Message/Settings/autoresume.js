const { Message, PermissionFlagsBits } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "autoresume",
  aliases: ["atresume"],
  description: `สลับเปิด/ปิดระบบดำเนินการต่ออัตโนมัติ`,
  userPermissions: PermissionFlagsBits.ManageGuild,
  botPermissions: PermissionFlagsBits.ManageGuild,
  category: "Settings",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: true,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    let data = await client.music.get(`${message.guild.id}.autoresume`);
    if (data === true) {
      await client.music.set(`${message.guild.id}.autoresume`, false);
      client.embed(
        message,
        `** ${client.config.emoji.ERROR} ปิดใช้งานระบบดำเนินการต่ออัตโนมัติแล้วครับ **`
      );
    } else {
      await client.music.set(`${message.guild.id}.autoresume`, true);
      client.embed(
        message,
        `** ${client.config.emoji.SUCCESS} เปิดใช้งานระบบดำเนินการต่ออัตโนมัติแล้วครับ **`
      );
    }
  },
};
