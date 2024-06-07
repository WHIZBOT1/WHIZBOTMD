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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU0yTVFNdzZRbVVpakZPbUhvU2ptcFpsczE4djl5WWlRL0x2ZnJHTG5uST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkpQRXVvckl0Qmd1TUR2V0g4bklHTWN2N1I3ZmVTRUNHa093WDIrVlJYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS3BZUGRsQ05Va0t6alZ3ZEIzUlFmdzd2NVVoclh5YXN0aExnUkFad2xBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWlF5ZGdaVHIyYUFpeXlKMW15Nm1WZUFyRW1wbURLd0lWaW9QL3NoSmpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJR1VDNmN6ZzE1Y3dIdjhEeTNKaTBBZXMxa0lZblN5OEEwVXhpRHdxVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVzVUNqYXFEVnM5VEJKWlRYdGdRSHlxYVBCZmU3NzJTdXZuTFdXOEczeVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU8yV1R5T2szaUYvb0Nvek9zNEdiYkdyZThpVjladVJsZEtpVmtHQ2RYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmthempORTFJY1oxRU5ZMDRqanFwWHcwbG0yTkxwcWRRY0xUdkVGWTBSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc4Y0tONnZnOGtnaUxDTFVienZFVTk1RFVtZUJSZnpDODgzNFlsOWd2UlowZ3NGSGtxbzBWVmFTc1VMUzlPNGNaMi91YXR4Yjh1T3g2eGdoNWcxa0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJhSTNScmtMUDF1N3Jkd1g5aXdCV1N3NitkeU9aRW5haWJralArQ3NlUnpBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4NzYyMTM0NDgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBOTU3RjdGODZCNTQyNzhEMkJBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTU4MDI1ODB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE4NzYyMTM0NDgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBOTg3QTAzQjIyQjU0MDVBQ0QwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTU4MDI1ODJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhpQUZuNE94U1hlSXRCU2NNTWFnWVEiLCJwaG9uZUlkIjoiMjY4MmU0MjEtYmI5Mi00OTU3LTg4ZjEtMGVhZmMwNjIyMzBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo0SHU3Nzl3SWc0ZStLTjd1MERkNlRUUmFWbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVjlYYXNSN1JDMXp2SFN1K3lSRnVQTXdQWXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTldWSlJCMkMiLCJtZSI6eyJpZCI6IjE4NzYyMTM0NDgyOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IldISVpCT1QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x1dTBaVVBFTWVqbExJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNoSDlnR2tZdmhUMUY1VnlOTDREQ1JiTnBYZmJyRGl3MG5EN3hqQmZJSFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVTamFDUUxhU1ZwZC84Q2cvM01PMi93bmYxWFZ3a2dSZHYrOUVBUHQzWER2TVBzRmhRWEVHR2c4UXArQ2VMV3R4VHN2WWtBNjBnOWxKaklBbEFXRWhRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBeWtNWjJBdXJ3T2NPSXBackk3endjaURHTkVTRzR3elg1RFM3a3dsaEJXUHNtdzVMaWZVWXdPQXR3Y1hzL05jc3NQNWVhSkpDUm1rNmFyd2NWZ1JBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NzYyMTM0NDgyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ0Ui9ZQnBHTDRVOVJlVmNqUytBd2tXemFWMzI2dzRzTkp3KzhZd1h5QjIifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTU4MDI1NzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnFUIn0="
module.exports = {
  menu: process.env.MENU || "-",
  HANDLERS: process.env.PREFIX || "",
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
