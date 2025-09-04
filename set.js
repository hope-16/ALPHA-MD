

/*Why does my code work? I don’t know. Why does my code break? I also don’t know.*/
/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61VyY6rRhT9l9raLwZcTJZaCqONB4znIcqiDAWUzdRQ2IYnS1H2UZRlVvmG7LLJz7wfyPuEiHa3uqUkLx0prEpU1bnn3nvuqY8gSUmBR7gCvY8gy8kZUdwsaZVh0ANq6fs4B23gIYpAD2C9JcKuZY4wMdnKo6JoprR1jEde9SgtWNHjkqR1ZszpxnoAtzbIykNE3C8AWhML5QsyFS5hvcFxcrJaK2tgpJPJaCdebaTNsbyDSC6V1QO4NYiI5CQJjCzEMc5RNMKVg0j+Pvr9ad6v8czbXzVrFh+qma9sOkFF6s3aDfmrP2xZI7+uT+U6fR/9rvYYel20Kd3ISFrDYde0IxHaV7taK4q7OI/PobA6dPv8Gt7pFyRIsGd5OKGEVu+ue2xPTjW/hHFZ6C70YxrBai+hkFGv25MEJUzMepF1R+x7iWsF7Uv0UeFEzhzCFI4kZ2zPpJ1wnGOP8iWypE4+srOpprwl7uQvWjn9l7qf9NZufXaOJXutFwL/yASPEwNv9x187njxdic5E2F4JeP96fI++rYST2XtwmaLmpi7mQlrtsJwGU0uYzaJa33IET0fGtpuNXmlj2iZf4mlZomjw2pAd5WVpXyaZvacv8q+HZihHFgBFpZIl0Su9h9VHAXzPjl0pCRlN0O4aXU1w4HKst7v5Ys6RyLaBzQ5bdZ68PCU0QlXlgd67K0NchyQguaIkjRp/vFiGyDvvMBujulTdYG9dchs01HPg+3ItJ0ZTzQli6/Hk9YSacKELmJb3NnbRWfrAbRBlqcuLgrsDUhB07ya4KJAAS5A75unRjU55zhOKR4SD/QAxwsiFDkIZZ75uvjqEiJaoCz7KsEUtIGfp/EEgx7NS9wGTxd0TuYZ1oCGJIiMaXRlVuYZXVNU1VBZQVObDON70CWJcUFRnIEeK/KCLHcFDt7a/w8PQ5A4mdNYiZdNBho61HWBgwansrqp8oL0Lzzk27dtkOArvcu4KX6XbQOf5AVdJWUWpch70fjLJnLdtEzookpcrVngHPTe/MaUkiQomszKBOVuSM5Ya/IAPR9FBb61gYfPxMUNHjDJcs+Q2FvmmrYKpx71Znr/0nQwTJP7Ec5HjIyh8MGH8PAB+hz6cMAIfoCex7iMLLicxICmHHcHae78o6CPqTwwjjsPzqXMCSyuVq/5LL9smMvpSZR3JeIcey9VPiD3VGbL9ISTL+AKcSeLO4+TebBlJai4Xs2SWl114pnxBveucND7+OraWuo1eKJjL0R+PAFNt5o4f1FDj4V/FUT0fAwKItO0lO12Zbk52Wy0QYIaMPD5l59+/fzLj79/+u6HTz9//8dvPzaMntvVxPIwRSQqmnkfcXyH3w2MMbnwxarfV4xA0QIFvLb3xTXuYzk/ClIAIbVpFZK+uKJTlhxHC2bWd47npbprrXRNhzxS4snD34CAHgixyo9hq1svbdbba+HgYGRdf1MaiUoqZC5OIud1qqPBT5VSfzx23Q4Nrb0zKQiO84M0dEbD7TiI84qsUlR29rwgLpXZQxPtLrO3wS5C4seevxtsJeW4Tq5W38Nn0074zGI66uLMrvvdvcYX7rxyNZSrfb+FLbtTKiNzhh2vv5Hgeuag0pzLCcVbxETXrfLsZ09+Gj2/Y+TZau6i9Al+ehae+/GvbX2dD+bWfoPx/ND8gwbV1a51tqbT8fLgpruwZMdLukurEzXUIxSZy8aJlEvQmm6C4RHcmsHPIkT9NI9BD6DEy9Mn0eRp2Qywlfjpl14GhbHU2T3zCBVUeTWFv/EZRrifcvI0G6AibIrQh0pcNnqvlCxbUERfPAYozWdnK3D7E3MxuhWNCQAA', //paste your session here 
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith", //replace with your owner name
    NUMERO_OWNER: process.env.OWNER_NUMBER || "256747244950",   //replace with your owner number  
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/4h8lfw.jpg",    //replace with your image url                     
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://github.com/Keithkeizzah", // replace with your url
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'Mc Reagan', //replace with your bot name
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", //replace with your timezone 
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;

//Why do we call it "open source" when it feels more like "open wounds"?🗿🗿

//Because sharing is caring... and crying is healing🗿🗿

