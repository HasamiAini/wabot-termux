const help = (prefix, ownerBot, botName) => {
        return `
「 *Bot_Takagisan* 」

👋️ *Yahalo Minna-San* , Jibun no namae
  ╿
  ┡➪☾ ⌨️BOT Commands⌨️ ☽
  ┠➵ *${prefix}help*
  ┠➵ ${prefix}timer*
  ┠➵ ${prefix}bahasa*
  ┠➵ ${prefix}kodenegara*
  ┠➵ ${prefix}virtex*
  ┠➵ ${prefix}owner*
  ┠➵ ${prefix}infonomor*
  ┠➵ ${prefix}spamcall*
  ┠➵ ${prefix}testime*
  ┠➵ ${prefix}blocklist*
  ┠➵ ${prefix}chatlist*
  ┠➵ ${prefix}apakah*
  ╿
➪☾ ⌨️Group Commands⌨️ ☽
┠➵ ${prefix}demote*
┠➵ ${prefix}promote*
╿➵ ${prefix}hidetag*
┠➵ ${prefix}listadmins*
┠➵ ${prefix}tagall*
┠➵ ${prefix}tagall2*
┠➵ ${prefix}tagall3*
┠➵ ${prefix}tagall4*
┠➵ ${prefix}tagall5*
┠➵ ${prefix}leave*
┠➵ ${prefix}add*
┠➵ ${prefix}kick*
┠➵ ${prefix}linkgroup*
┠➵ ${prefix}opengc*
┠➵ ${prefix}closegc*
┠➵ ${prefix}welcome*
┠➵ ${prefix}del*
┠➵ ${prefix}clone*
➪☾ ⌨️Others Commands⌨️ ☽
 ➥╿➵ ${prefix}wa.me*
 ➥╿➵ ${prefix}quotes*
 ➥╿➵ ${prefix}fml*
 ➥╿➵ ${prefix}wiki*
 ➥╿➵ ${prefix}nulis*
 ➥╿➵ ${prefix}kbbi*
 ➥╿➵ ${prefix}hilih*
 ➥╿➵ ${prefix}quotemaker*
 ➥╿➵ ${prefix}glitch*
 ➥╿➵ ${prefix}chord*
 ➥╿➵ ${prefix}lirik*
 ➥╿➵ ${prefix}qrcode*
 ➥╿➵ ${prefix}ocr*
 ➥╿➵ ${prefix}bugreport*
 ➥╿➵ ${prefix}kapankah*
 ➥╿➵ ${prefix}bolehkah*
 ➥╿➵ ${prefix}stickergif*
 ➥╿➵ ${prefix}toimg*
 ➥╿➵ ${prefix}infocuaca*
 ➥╿➵ ${prefix}ninjalogo*
 ➥╿➵ ${prefix}game*
 ➥╿➵ ${prefix}fakta*
 ➥╿➵ ${prefix}firetext*
 ➥╿➵ ${prefix}cantikcek*
 ➥╿➵ ${prefix}watak*
 ➥╿➵ ${prefix}hobby*
 ➥╿➵ ${prefix}logowolf*
 ➥╿➵ ${prefix}bucin*
 ➥╿➵ ${prefix}quotes2*
 ➥╿➵ ${prefix}truth*
 ➥╿➵ ${prefix}level*
 ➥╿➵ ${prefix}fitnah*
 ➥╿➵ ${prefix}ping*
 ➥╿➵ ${prefix}jadwaltvnow*
 ➥╿➵ ${prefix}afk*
 ➥╿➵ ${prefix}shadow*
 ➥╿➵ ${prefix}hobby*
 ➥╿➵ ${prefix}logowolf*
 ➥╿➵ ${prefix}bucin*
 ➥╿➵ ${prefix}quotes2*
 ➥╿➵ ${prefix}truth*
 ➥╿➵ ${prefix}level*
 ➥╿➵ ${prefix}fitnah*
 ➥╿➵ ${prefix}ping*
 ➥╿➵ ${prefix}jadwaltvnow*
 ➥╿➵ ${prefix}randomkpop*
 ➥╿➵ ${prefix}fml2*
 ➥╿➵ ${prefix}ttp*
 ➥╿➵ ${prefix}randomkpop*
 ➥╿➵ ${prefix}fml2*
 ➥╿➵ ${prefix}ttp*
 ➪☾ ⌨️MEDIA Commands⌨️ ☽
 ➥╿➵ ${prefix}tiktokstalk*
 ➥╿➵ ${prefix}ytmp4*
 ➥╿➵ ${prefix}trendtwit*
 ➥╿➵ ${prefix}igstalk*
 ➥╿➵ ${prefix}tomp3*
 ➥╿➵ ${prefix}play*
 ➥╿➵ ${prefix}tiktok*
 ➪☾ ⌨️Anime Commands⌨️ ☽
 ➥╿➵ ${prefix}loli*
 ➥╿➵ ${prefix}animecry*
 ➥╿➵ ${prefix}neonime*
 ➥╿➵ ${prefix}pokemon*
 ➥╿➵ ${prefix}nekonime*
 ➥╿➵ ${prefix}neko*
 ➥╿➵ ${prefix}animehug*
 ➥╿➵ ${prefix}waifu*
 ➥╿➵ ${prefix}randomanime*
 ➥╿➵ ${prefix}husbu*
 ➥╿➵ ${prefix}husbu2*
 ➥╿➵ ${prefix}wait*
 ➪☾ ⌨️Islam Commands⌨️ ☽
 ➥╿➵ ${prefix}quran*
 ➪☾ ⌨️Picture Commands⌨️ ☽
 ➥╿➵ ${prefix}pinterest*
 ➥╿➵ ${prefix}meme*
 ➥╿➵ ${prefix}memeindo*
 ➥╿➵ ${prefix}logowolf2*
 ➥╿➵ ${prefix}phlogo*
 ➥╿➵ ${prefix}neonlogo*
 ➥╿➵ ${prefix}neonlogo2*
 ➥╿➵ ${prefix}lionlogo*
 ➥╿➵ ${prefix}jokerlogo*
 ➥╿➵ ${prefix}shadow*
 ➥╿➵ ${prefix}burnpaper*
 ➥╿➵ ${prefix}coffee*
 ➥╿➵ ${prefix}lovepaper*
 ➥╿➵ ${prefix}woodblock*
 ➥╿➵ ${prefix}qowheart*
 ➥╿➵ ${prefix}mutgrass*
 ➥╿➵ ${prefix}undergocean*
 ➥╿➵ ${prefix}woodenboards*
 ➥╿➵ ${prefix}wolfmetal*
 ➥╿➵ ${prefix}metalictglow*
 ➥╿➵ ${prefix}8bit*
 ➥╿➵ ${prefix}pubglogo*
 ➥╿➵ ${prefix}herrypotter*
 ➪☾ ⌨️content 18+ Commands⌨️ ☽
 ➥╿➵ ${prefix}doujinmoee*
 ➥╿➵ ${prefix}randomhentai*
 *GROUP BOT_TAKAGISAN:https://chat.whatsapp.com/EcIp7XK3fB70JzzTCNnfYz`
}
exports.help = help
