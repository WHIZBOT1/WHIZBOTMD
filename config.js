const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "18763351213";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUk5SmEwVVdRM2d4dWpHcmkzUE43ZUdtK2k3YmFiZ1lvRGNkYlVJVmNsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclZ2OFluRUNlUUxSVTZON3B6QTkyVjdFazRmNTZXcTJ2YzhVTzNvZnkzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Rno3TklhYXc2bVYrajRKU0ZmMGdwd3hFaGRQSGVPSHFmNHY4OXpwM0hzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR0xidVA5MFdvTWppcUNqQWU4TVlRMHNocTZFM2kzUTVCSHFtV3A4OTBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLQnZvV2sremJwOEdZNkxKeVAxUzVhV3JxR05Pd2FhSHFHMjZYWDFsMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9tTWxzSVlVK0YvdTVqY1dKWFRBM09ucnNDMnh5WUxzT1hzWDVPTGFQbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxlK2FvZ2t0aW51cGl6V0k2Tzk0TGJ0TzdYNTdSY3o4c1c2ZFpMcTBsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1VORkRsMXg3OEY3VEJ6WE54cFZxRDBXWjBQTlgwWExyTlBrdmFWMU8wdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhrNmVCMjZpMkVEYTQ3czMzZWNIaGhTL0xtc0JMeGx5My84bzV6QmJZZzQxaXc3cjNpc0RZUVNLN3J3QmtITUlkNlN1YlM1OVNEMWFiVUdFWUs2MEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiekxNWk5SdndmUEV0Q2o2RjgwMlRSSmVxRUc2cStTeUJ0MDI1RnRuTDh4bz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN3I2c2hWR0tUaktTdDgwX2ZpWXJpZyIsInBob25lSWQiOiIzZmVlODk0NC03Y2M3LTRhMDgtYWU2NS0xZmJmM2JjZTk1MDkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFhsUmExcVE3SENleFV3QXZVRVVJTmRsSFJZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9oMjJwSTQ5U3lrQkVLYW45YjBqUFRCd3YxST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZTTJBVkdZTSIsIm1lIjp7ImlkIjoiMTg3NjU5NTI5ODA6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tKzZJTURFSStxdHJNR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkIwdWdTb0FlMHFDQm9QRWtwL0NtTC8zK3NXeXZHNHp3cDhjY1puVDNwd2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImV1SE1TLzJNbk5PN0x4Zm5hb083WWc0Vk5FSFhLTE5TK2svY0dOMWJUL2tCbUlCdXdqOXM5elJKZ3haS21kVkNTY2FtSGdEdFFPamZEWlk4alN3QkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmUi94YndteWo0MklmNGZsVTBlVEs5VldGTnV1OHBTaTdZZDlrc1grbGNKTkhzeTI3RjFXeGhTZEQ3dnFPTlh3MThzRHN0SjJXcktzTVdmT1hrTGtDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NzY1OTUyOTgwOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFkTG9FcUFIdEtnZ2FEeEpLZndwaS85L3JGc3J4dU04S2ZISEdaMDk2Y0gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTg0NTc2MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREFvIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "JAY BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
