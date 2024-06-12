
const fs = require('fs');
const path = './banned.json';

// Helper function to read banned users from the JSON file
function readBannedUsers() {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    } else {
        return [];
    }
}

// Helper function to write banned users to the JSON file
function writeBannedUsers(bannedUsers) {
    fs.writeFileSync(path, JSON.stringify(bannedUsers, null, 2));
}

// Function to add a user to the banned list
function addBannedUser(jid) {
    const bannedUsers = readBannedUsers();
    if (!bannedUsers.includes(jid)) {
        bannedUsers.push(jid);
        writeBannedUsers(bannedUsers);
    }
}

// Function to remove a user from the banned list
function removeBannedUser(jid) {
    let bannedUsers = readBannedUsers();
    bannedUsers = bannedUsers.filter(user => user !== jid);
    writeBannedUsers(bannedUsers);
}

// Function to check if a user is banned
function isUserBanned(jid) {
    const bannedUsers = readBannedUsers();
    return bannedUsers.includes(jid);
}

module.exports = {
    addBannedUser,
    removeBannedUser,
    isUserBanned
};
#### 2. Update the Ban Command to Use This Function

Here is an example of a ban command implementation:

const { addBannedUser } = require('./banManager');

// Example of a ban command
async function banCommand(client, message) {
    const { remoteJid, mentionedJidList } = message;
    if (mentionedJidList && mentionedJidList.length > 0) {
        const userToBan = mentionedJidList[0]; // Assuming the first mentioned user is to be banned
        addBannedUser(userToBan);
        await client.sendMessage(remoteJid, { text: `User ${userToBan} has been banned.` });
    } else {
        await client.sendMessage(remoteJid, { text: 'Please mention a user to ban.' });
    }
}

module.exports = banCommand;
#### 3. Update Other Commands to Check the Banned Status

Here is an example of how you would update other commands to check if a user is banned before proceeding:

const { isUserBanned } = require('./banManager');

// Example of a general command
async function someCommand(client, message) {
    const { remoteJid, participant } = message;
    if (isUserBanned(participant)) {
        await client.sendMessage(remoteJid, { text: 'You are banned from using this bot.' });
        return;
    }

    // Your command logic here
    await client.sendMessage(remoteJid, { text: 'Command executed successfully.' });
}

module.exports = someCommand;
#### Putting It All Together

Your main bot file should import and use these commands appropriately. Here is an example of how it might look:

`javascript
const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@adiwajshing/baileys');
const banCommand = require('./commands/banCommand');
const someCommand = require('./commands/someCommand');
