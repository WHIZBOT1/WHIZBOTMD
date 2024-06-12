const {
  Index,
  isAdmin,
  ban,
  unban,
  checkBans,
  checkBanned,
} = require("../lib/.");


Index(
  {
    pattern: "ban",
    desc: "Ban a user from using the bot.",
    category: "admin",
    filename: __filename,
    use: "!ban <jid>",
  },
  async (message, input) => {
    const isBanned = await checkBanned(message);
    if (!isBanned) return;
    try {
      let userId = message.reply_message
        ? message.reply_message.sender
        : message.mentionedJid[0];

      if (!userId) {
        return await message.send("*Reply A User*");
      }
      const isAdminUser = await isAdmin(
        message.client,
        message.chat,
        message.sender.jid
      );
      if (!isAdminUser) return await message.reply("*You are not an admin!*");

      const jid = input.trim();
      if (!jid) return await message.reply("*Please provide a user to ban.*");

      const result = await ban(jid);
      await message.reply(result);
    } catch (error) {
      console.error(error);
      await message.reply("*An error occurred while banning the user.*");
    }
  }
);

Index(
  {
    pattern: "unban",
    desc: "Unban a user from using the bot.",
    category: "admin",
    filename: __filename,
    use: "!unban <jid>",
  },
  async (message, input) => {
    const isBanned = await checkBanned(message);
    if (!isBanned) return;
    try {
      let userId = message.reply_message
        ? message.reply_message.sender
        : message.mentionedJid[0];

      if (!userId) {
        return await message.send("*Reply A User*");
      }
      const isAdminUser = await isAdmin(
        message.client,
        message.chat,
        message.sender.jid
      );
      if (!isAdminUser) return await message.reply("*You are not an admin!*");

      const jid = input.trim();
      if (!jid) return await message.reply("*Please provide a user to unban.*");

      const result = await unban(jid);
      await message.reply(result);
    } catch (error) {
      console.error(error);
      await message.reply("*An error occurred while unbanning the user.*");
    }
  }
);

Index(
  {
    pattern: "checkbans",
    desc: "Check the list of banned users.",
    category: "admin",
    filename: __filename,
    use: "!checkbans",
  },
  async (message, input) => {
    try {
      const isBanned = await checkBanned(message);
      if (!isBanned) return;
      let userId = message.sender;

      if (message.isCreator) {
        userId = message.reply_message
          ? message.reply_message.sender
          : message.mentionedJid[0] || userId;
      }
      const isAdminUser = await isAdmin(
        message.client,
        message.chat,
        message.sender.jid
      );
      if (!isAdminUser) return await message.reply("*You are not an admin!*");

      const result = await checkBans();
      await message.reply(result);
    } catch (error) {
      console.error(error);
      await message.reply("*An error occurred while checking banned users.*");
    }
  }
);
