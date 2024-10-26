const fs = require('fs')

global.storename = "WildanHoo"
global.botname = "WildanHoo"
global.namabot = "WildanBotz" 
global.namabot2 = "WildanBotz"
global.ownername = "WildanHoo"
global.owner = "6285692207036"

global.packname = "WildanHoo"
global.footer2 = '© WildanHoo'
global.author = "Sticker By WildanHoo"
global.web = ""
global.wm = "WildanHoo Version 3.0.3"
global.chjid = "120363318521671268"

global.sessionName = "session"
global.prefix = "."
global.botNumber = "6285692207036" 

global.sch = ""
global.sgc = ""
global.stg = ""
global.syt = ""
global.sig = ""
global.thumb = ""

global.qris = ""
global.dana = "085692207036"
global.gopay = "085692207036"
global.ovo = "085692207036"
global.pulsa = "085692207036"
global.rekbni = "-"
global.qr = fs.readFileSync("./r/qr.jpg")

// Apikey nya
global.gtds = "-"
global.xyro = "-"
global.nlkey = "-"
global.skizapi = "-"
global.neoxrapi = "-"
global.ariekey = "-"

// Buat cpanel
global.domain = ""
global.apikey = ""
global.capikey = ""
global.domain2 = ""
global.apikey2 = ""
global.capikey2 = ""
global.eggs = "15"
global.locc = "1"
global.apido = "Api digital ocean"

global.autotyping = false
global.autoread = false
global.autobio = false
global.anticall = true
global.antispam = false
global.antibot = false
global.welcome = false // welcome+left

global.gamewaktu = 60
global.limit = 15
global.delayjpm = 5500

global.bejir = (a, b) => {
let bjir = 
{key: {remoteJid: 'status@broadcast', 
participant: '0@s.whatsapp.net'}, 
message: {orderMessage: {itemCount: 1000, 
status: 1, surface: 1, 
message: a, orderTitle: '', thumbnail: b, 
sellerJid: '0@s.whatsapp.net'}}};
return bjir
}

// NOTE
// true aktif & false nonaktif

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})