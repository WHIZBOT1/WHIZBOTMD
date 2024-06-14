const fs = require('fs').promises;
const path = require('path');

const banFilePath = path.join(__dirname, 'plugins', 'ban.json');

const isUserBanned = async (userId) => {
  try {
    const data = await fs.readFile(banFilePath, 'utf8');
    const banList = JSON.parse(data);
    return banList.bannedUsers.includes(userId);
  } catch (error) {
    console.error('Error checking banned user:', error);
    return false; // If there's an error, assume the user is not banned
  }
};

module.exports = isUserBanned;
