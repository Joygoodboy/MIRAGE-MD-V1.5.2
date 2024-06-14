const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭────✧{MIRAGE MD V1.5.2 BOT}✧────◆
│   📚*Prefix* : ${s.PREFIXE}
│   👩‍💻*Owner* : ${s.OWNER_NAME}
│   🏅*Mode* : ${mode}
│   📒*Commands* : ${cm.length}
│   📅*Date* : ${date}
│   ⏱️*Hour* : ${temps}
│   ⚙️*Memory* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│   🗂️*Platform* : ${os.platform()}
│   👥*Developers* :𝐌𝐚𝐢𝐧 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫(𝐉𝐨𝐲𝐛𝐨𝐲),𝐂𝐨 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫(𝐎𝐥𝐚𝐰𝐚𝐥𝐞04)&𝐂𝐨 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫(𝐋𝐚𝐳𝐚𝐜𝐤28)
│   🇬🇭*Country* :Ghana
│.  🆕*Release* *date* :2024
│.  🌟*Religion* : *Christianity*
│   🧭*Uptime:* ${uptime}
│   🏆*Database:* ${rtotalreg} of ${totaluser} 
│   😁*Total Users:* ${totaluser}
│   🤖*Bot Name* : {𝐌𝐢𝐫𝐚𝐠𝐞 𝐌𝐝  v1.5.2}
│   🎀 *Deploying host* :*Heroku*
│   🗣️  *Language* : JavaScript
         
│  │=====================================│
│  │   * _User Info:_ *.                 │ 
│  │👤*User Tag:* ${taguser}             │         
│  │📄*Name:* ${name}                    │
│  │👤𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : @${m.sender.split('@')[0]}│
╰─────✧𝐌𝐈𝐑𝐀𝐆𝐄 𝐌𝐃 𝐕1.5.2-𝐁𝐎𝐓✧─────◆ \n\n`;
    
let menuMsg = `
👋 Hello ${nomAuteurMessage} 👋
  𝐓𝐡𝐢𝐬 𝐢𝐬 𝐦𝐢𝐫𝐚𝐠𝐞 𝐦𝐝 𝐚 𝐩𝐨𝐰𝐞𝐫𝐟𝐮𝐥 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐛𝐨𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐚𝐧𝐝 𝐩𝐫𝐚𝐠𝐫𝐚𝐦𝐦𝐞𝐝 𝐛𝐲 𝐣𝐨𝐲𝐛𝐨𝐲
 𝐞𝐧𝐫𝐢𝐜𝐡𝐞𝐝 𝐰𝐢𝐭𝐡 𝐦𝐨𝐫𝐞 𝐚𝐧𝐝 𝐦𝐨𝐫𝐞 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐭𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐝𝐞𝐩𝐥𝐨𝐲𝐢𝐧𝐠
 𝐦𝐲 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐣𝐨𝐲𝐛𝐨𝐲 𝐥𝐨𝐯𝐞𝐬 𝐡𝐢𝐬 𝐛𝐢𝐛𝐥𝐞 𝐯𝐞𝐫𝐲 𝐦𝐮𝐜𝐡 𝐭𝐡𝐞𝐫𝐞𝐟𝐨𝐫𝐞 𝐡𝐢𝐬 𝐛𝐞𝐬𝐭 𝐛𝐢𝐛𝐥𝐞 𝐯𝐞𝐫𝐬𝐞 𝐢𝐬 𝐣𝐨𝐛 19:20-28 
 𝐢 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐡𝐚𝐩𝐩𝐲 𝐢𝐟 𝐲𝐨𝐮 𝐫𝐞𝐚𝐝 𝐢𝐭 
 𝐚𝐧𝐝 𝐩𝐥𝐞𝐚𝐬𝐞 𝐝𝐨 𝐧𝐨𝐭 𝐟𝐨𝐫𝐠𝐞𝐭 𝐭𝐨 𝐠𝐢𝐯𝐞 𝐚 𝐬𝐭𝐚𝐫 🌟 𝐭𝐨 𝐦𝐲 𝐫𝐞𝐩𝐨 𝐟𝐨𝐫 𝐦𝐨𝐥𝐭𝐢𝐯𝐚𝐭𝐢𝐨𝐧
*List of commands for mirage md v1.5.2 :*
◇                             ◇
`;

    for (const cat in coms) {
        menuMsg += `╭────❏ ${cat} ❏`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│ ★🦁${cmd}`;
        }
        menuMsg += `
╰═════════════⊷ \n`
    }

    menuMsg += `
◇            ◇
*»»————— 🎀★ —————««*
"To use a command, insert ${prefixe} followed by the command_name."
 
    Powered by MIRAGE-MD V1.5.2 
                                                
*»»————— 🎀★ —————««*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
