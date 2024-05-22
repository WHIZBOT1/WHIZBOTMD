const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://whizbot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
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
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEk2QnBWYVFHdUhGUG10dit5M2JSSlRhUVM1MmNUTkQyYTA0eXpkV1hGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianlZWW1udGhBRDlBNVFJL2VVdFBiaTR6ZmdlOHVvRVY4SHlQZGI1MndFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUGdqZThYYlFnZWVXczZuRVRHckMzdFRyWWJHTm9tamw4VVYzM3RhbEd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUmtBQUZPOSs1WXFkTFlxeTdBdUpuY3ltNTB4dm1mUU4zSHBRRzU3Q3hrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPRmdQaDcrVS9DRE50UHN5WE9KSkpLKzhWZFpoOTJORFlJalEybmJEV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxIemFSRTBQSGdZZHUvdWNpZ1NhdnVZMjFGbFVTUmVpQUhmMUt3K2lMZ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpuZmNJdnpCN0xXcHpnb0xUeFppemt3NHVwTFRkOHRJaFRaakUyNTJGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxiY0QzZTI4Y0gxMCtiVmJOWUlKTUxMTmVOcTRTZ0hodDViZDNmTnJ3az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJhMTY0Z252YzEzVDNYTktkeTJHSk5iYVdsSWdkSnp2UC92bGQvdFJtQVlLYzBxS0t6ODIvMjM2UGNNSklZUnJCN0IydnAzdVM0TmdGWXhBUzdGcENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiI5WlVDK0JWNTdoU2M2M2EwTWl3dDhRcklORUVqejVSTHpYbC9rZXJhRzRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg2NjUzMjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcxNEIxODgxQ0VERkU2Mjc5NUUxRjI5NzYwODA0Mzg3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTYxODUxNTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg2NjUzMjQ5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlGRERGMEQxRkJGM0M5NUNGMkIxNzlGM0JEQzI3REMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTYxODUxNTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpRd2tqNjkxU0stZUxvWTVHNmtvVEEiLCJwaG9uZUlkIjoiOWM3Y2M1NDYtN2YwOS00MTNiLThmMzktNTg4OWZjOTdjNGUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYxN0NLNmpUUXh3NFdmbmhkNzZrUHNIdk0rVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNcm1vdHZoTlV6OVRud1ZBWFgrSVBZVXBONWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0xRQ0hYWUUiLCJtZSI6eyJpZCI6Ijk0Nzg2NjUzMjQ5OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoidmlkdXNoYW4gTmFkdW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDTWpic0ZFTFhRcTdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImY2MW1zdEExWndJRmtBYkJBRGt5b1lBQWlVWHV2TFJITWx4M1oydXN6Z0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllsMnhWdGkzVkE0Ujd1Qzl3WVBHVWRzSzZpUjMyTkZDYjFvODdZZ3NuZGxEWW1nMW9ETnh4TFd4Z0xZRXJ2MkF6Nm5sdEpnSVdzM2RKSlFkek9ma0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoc21pdWt6L2lBSi9JUjlMQk5Vb0lOZDF4K3NINUV3SVNVc0xQZG85c0Q3OGk2NDRmMmxkOWtGVlI2aDE0azBwalA4UU1qTWh3eTRTOUJNdzZRQ3NBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg2NjUzMjQ5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWCt0WnJMUU5XY0NCWkFHd1FBNU1xR0FBSWxGN3J5MFJ6SmNkMmRyck00QyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjE4NTE1NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIeXQifQ=="
module.exports = {
  menu: process.env.MENU || "-",
  HANDLERS: process.env.PREFIX || "?",
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
