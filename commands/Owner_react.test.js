const { prefix,cmd,tlang,Config } = require('../lib')
cmd({ on: "body" }, async(Void, citel, { isCreator }) => {
     if (tlang().owner && citel.text) {
         const emojis = ['👨‍💻']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
     if (!isCreator) return citel.reply(tlang().owner)
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
 })