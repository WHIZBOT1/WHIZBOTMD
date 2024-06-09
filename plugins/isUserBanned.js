const fs = require('fs');
const path = require('path');

// Function to check if a user is banned
async function isUserBanned(userId) {
    // Load banned users from the ban.json file
    const banFilePath = path.join(__dirname, '../plugins/ban.json');
    try {
        const data = fs.readFileSync(banFilePath, 'utf-8');
        const bannedUsers = JSON.parse(data).banneduser; // Assuming the array name is 'banneduser'
        
        // Check if the user ID exists in the array of banned users
        const isBanned = bannedUsers.includes(userId);
        return isBanned;
    } catch (error) {
        console.error("Failed to read ban.json file:", error);
        return false; // Return false if an error occurs while reading the file
    }
}

module.exports = isUserBanned;
