const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~w2lWiLrL#F958VUBlKIVv-9Djf_xulePuJom52Re4rMMD2omEY6g"
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/106251140?v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am KD STUDIO i am alive now|",    
};
