// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const igstalk = require('./baseikal/lib/igstalk')
const ffstalk = require('./baseikal/lib/ffstalk')
const mlstalk = require('./baseikal/lib/mlstalk')
const githubstalk = require('./baseikal/lib/githubstalk')
const tiktok = require("./baseikal/lib/tiktok")
const facebook = require("./baseikal/lib/facebook")
const instagram = require("./baseikal/lib/instagram")
const twitter = require("./baseikal/lib/twitter")
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'non YouTube' // ubah aia
global.gr = 'https://chat.whatsapp.com/FEuoTYKbMKO4qPnJMejTKC'
global.gro = 'https://wa.me/settings'
global.ig = 'non ig' // ubah aja
global.email = 'shirochan@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'ShiroChanv17' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6281219244302'] // ubah aja pake nomor lu
global.creator = "6282112439625@s.whatsapp.net"
global.premium = ['6281219244302'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.ownername = 'ShiroChanv17' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'ShiroChanv17' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ShiroChanv17' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.packname = 'ShiroChanv17' // ubah aja
global.ownerr = ['ShiroChanv17'] // ubaha aja
global.author = 'ShiroChanv17' //ubah aja
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})