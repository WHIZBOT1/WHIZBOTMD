//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "to be updated!!";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "2348039607375";
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkU2TkJ1V09KWWEwT09tVGMxT082MmtQY2FDbWtrUW1oNUpGWi8zMkpFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGRJZkNIcmQ4RXRqRXg4Y1pmN3BCQ1EvMnJmbDFlc2R3S2VDL1E0aTNVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRzVxTkZPOUwxUVNjSkFYWklZUjMvYlNmNk5BazdxUkYzRlg1enRxd2tVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTy9OakZuT0M5QmRKSzlKYWJJcjZleUllMWxkS0JXTnBHKzZFVC8vUmtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKNjh4NmZOWGVBTjVZU3dLQ1N6WFJsL1FyRmx3THF6MjMxVmF5ZU4rVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc5TE9YdFQyVjBBZ3hpMFFvV2VaS0ZpRzdjTlM2THF4QUZqOUdHL0EyQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVA4bE9odTNWTFFEUXVCbzh4UEFCMC8vNDNnMStITlQwc3dDM2NaNC9tbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUcwNitpTjFYWXNGK3U0REdyMXo4UmNLWlN5L1Bsd3J1ZzZReWRESnJCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF0NnM1cWFoWitvZGZpR0ZvNHJOSWlRdWt0Nkp5SmkvWk1PeE0vdEhKUVkyQkRyTkhNWEh4VUttVXBSZlhhT2Nod3JjUGJkOGtpZk82aTdHMDV5M2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJ1aDBYeWpJNmREcDJsYmNHUXI0ZjQwMjQ4Y2Zrd0ZXVzNvTzkxZUNiUW1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4NzY1MTQyODU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMDZFMDkyRTM1MDY1OUZCNUU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTM3NTgyMjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE4NzY1MTQyODU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQzAxNkUyQUEwNDJGNzk4RDJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTM3NTgyMjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFsU09PYkFiUmpPWDRnODNGQzdUOXciLCJwaG9uZUlkIjoiMmJmMzE1MmMtNGRjYy00ZWNlLWE4M2UtNTNmZmEyMWQyYjcyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1TbW1LOXpVaERoZG1ZR1dCdEVaQ3BtaENSND0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODZDVjZuRnlxMktqK1FTMVZtNjRhV244RStzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3Vna0VJUWtNQ1hzUVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVy9OMHp0M0p2YUdBSGJ4L05nTGl4b0hBN01BK0RVRW5RVlpkbGRnVUVWdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMGd3NzJDQWtJQlVKSmVCeW1rVy9LbmUrT1ZaSmpETmxpT3h2eTdWWjFEdGhhN0k4aHRWR3dKUVZTbEg0Ymk3SjBIV2d0cEhOcmNhMGVnVTg1UTJ1RHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik92cVZKRTgxeDNZbTd4TlNsQlZ2TWdXdER2MXVYSDhsZWdyd1hPb1dUcjR5dzNIZm5WSXJ6SFYvNFN0eGRhbXRGaDAwY0k1RmpHNDFmcU82WlI1Smd3PT0ifSwibWUiOnsiaWQiOiIxODc2NTE0Mjg1OTo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRvbnRhZSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODc2NTE0Mjg1OTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ2emRNN2R5YjJoZ0IyOGZ6WUM0c2FCd096QVBnMUJKMEZXWFpYWUZCRmMifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMzc1ODIyNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDMTYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©WHIZBOT ᴍᴅ",
  author: process.env.PACK_AUTHER || "jay ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "whizbot ᴍᴅ",
  ownername: process.env.OWNER_NAME || "unknownkid",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
