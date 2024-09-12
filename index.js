const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000;

// Importar o scraper do arquivo exportar.js
const { msg, pinterest, wallpaperhd, scrapeMyInstants, chatgpt_beta, remini_wxt, remover_fundo, toanimee, tozombi, baixar_facebook, baixar_instagram, baixar_pinterest, baixar_spotifydl, buscar_spotify, stalkear_instagram, baixar_threads, baixar_tiktok, baixar_twitter, baixar_youtube,
} = require('./exportar');

const caminhoApiKeys = path.join(__dirname, 'api-keys.json')

function carregarChavesAPI() {
const dados = fs.readFileSync(caminhoApiKeys);
return JSON.parse(dados)
}

function salvarChavesAPI(chavesAPI) {
fs.writeFileSync(caminhoApiKeys, JSON.stringify(chavesAPI, null, 2))
}

function verificarChaveAPI(req, res, next) {
const chaveAPI = req.query.api_key;
const chavesAPI = carregarChavesAPI()

if (!chaveAPI || !chavesAPI[chaveAPI]) {
return res.status(403).json({ erro: 'Acesso negado sua key é incorreta ou você não passou ela.' })
}

const dadosChave = chavesAPI[chaveAPI];
  
if (dadosChave.uso >= dadosChave.limite) {
return res.status(429).json({ erro: 'Essa chave atingiu o limite de uso fez o  purro L.' })
}

dadosChave.uso += 1;
salvarChavesAPI(chavesAPI)
next()
}

app.use(cors())

app.use('/api', verificarChaveAPI)

// api do pinterest 
app.get('/api/pinterest', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.pesquisa })}
try {
const imagens = await pinterest(consulta)
res.json({ imagens })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.img })}
})

// api audiomeme
app.get('/api/myinstants', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.pesquisa })}
try {
const instants = await scrapeMyInstants(consulta)
if (!instants || instants.length === 0) {
return res.status(404).json({ erro: 'Nenhum meme do caralho foi achado.' })}
res.json({ instants })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.audio })}
})

// api chatgpt-beta
app.get('/api/chatgpt-beta', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.pesquisa })}
try {
const results = await chatgpt_beta(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.ia })}
})

// api remini
app.get('/api/remini', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await remini_wxt(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api imagem em anime
app.get('/api/fotoanime', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await toanimee(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api imagem em zombi
app.get('/api/fotozumbi', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await tozombi(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api facebook 
app.get('/api/fbdl', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_facebook(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api instagram 
app.get('/api/instadl', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_instagram(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api pinterest2
app.get('/api/pinterest2', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_pinterest(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api spotifydl
app.get('/api/spotifydl', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_spotifydl(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api spotify pesquisa
app.get('/api/spotifypesquisa', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.pesquisa })}
try {
const results = await buscar_spotify(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api stalkear_instagram
app.get('/api/stalkig', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.pesquisa })}
try {
const results = await stalkear_instagram(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api threads
app.get('/api/threads', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_threads(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api tiktok
app.get('/api/tiktokdl', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_tiktok(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api twitter
app.get('/api/twitterdl', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_twitter(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})

// api baixar YouTube 
app.get('/api/ytdl', async (req, res) => {
const consulta = req.query.q;
if (!consulta || consulta.trim() === "") {
return res.status(400).json({ erro: msg.url })}
try {
const results = await baixar_youtube(consulta)
res.json({ results })
} catch (sexo) {
console.error(sexo)
res.status(500).json({ sexo: msg.erro })}
})


// [ parte do sexo em grupo vamos de secso ]
app.use((err, req, res, next) => {
console.error(err.stack)
res.status(500).json({ erro: 'Algo deu errado no servidor.' })
})

app.listen(port, (err) => {
if (err) {
console.error('Erro ao iniciar o servidor:', err)
process.exit(1)}
console.log(`Servidor rodando na porta http://localhost:${port}`)
})
