const discord = require("discord.js");
const client = new discord.Client({ _tokenType: ''})
const fs = require("fs");
var msg = fs.readFileSync('mensagem.txt').toString('utf-8');
console.log(` [!] Connecting.....`)

var token = 'ODY1MjEwNDI4NTQ4MTg2MTIz.YQWX3w.FriiK9sioo3DD7oKu202HsNyfIo'; //seu token

//selfbot feito por: syzen7#0007

client.on('ready', () => {
	console.clear()
	console.log(`
██████╗  █████╗      ██╗ █████╗ ██████╗  █████╗ 
██╔══██╗██╔══██╗     ██║██╔══██╗██╔══██╗██╔══██╗
██████╔╝███████║     ██║███████║██║  ██║███████║
██╔══██╗██╔══██║██   ██║██╔══██║██║  ██║██╔══██║
██║  ██║██║  ██║╚█████╔╝██║  ██║██████╔╝██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝
`)
	console.log(` [!] Conectado na conta: ${client.user.tag}.`)
	console.log(` [!] ID: ${client.user.id}\n\n`)
})


client.on('guildCreate', (guild) => {
	console.log(` [!] Self BOT acaba de entrar no server ${guild.name}.`)
	guild.members.cache.forEach((member) => {
		member.send(msg).then(() => {
			if (member.id == client.user.id) return;
			console.log(` [+] Mensagem global enviada para ${member.user.username}.`)
		}).catch(() => {
			console.log(` [X] Erro ao enviar mensagem para ${member.user.username}.`)
		})
	})
})	

client.login(token).catch(() => {console.log(` [X] Token Inválido`)})