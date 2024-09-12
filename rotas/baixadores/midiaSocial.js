const { facebook, instagram, pinterest, spotifydl, spotify, stalkig, threads, tiktok, twitter } = require('betabotz-tools')
const { youtube } = require('btch-downloader')

// facebook baixar
async function baixar_facebook(bucetas) {
const results = await facebook(bucetas)
return results //JSON
}

// Instagram Downloader
async function baixar_instagram(bucetas) {
const results = await instagram(bucetas)
return results //JSON
}

// Pinterest Downloader
async function baixar_pinterest(bucetas) {
const results = await pinterest(bucetas)
return results //JSON
}

// Spotify Downloader (por bucetas)
async function baixar_spotifydl(bucetas) {
const results = await spotifydl(bucetas)
return results //JSON
}

// Spotify Downloader (por busca)
async function buscar_spotify(pesquisa) {
const results = await spotify(pesquisa)
return results //JSON
}

// Instagram Stalker
async function stalkear_instagram(nome) {
const results = await stalkig(nome)
return results //JSON
}

// Threads Downloader
async function baixar_threads(bucetas) {
const results = await threads(bucetas)
return results //JSON
}

// Tiktok Downloader
async function baixar_tiktok(bucetas) {
const results = await tiktok(bucetas)
return results //JSON
}

// Twitter Downloader
async function baixar_twitter(bucetas) {
const results = await twitter(bucetas)
return results //JSON
}


// YouTube Downloader
async function baixar_youtube(bucetas) {
const data = await youtube(bucetas)
return data
}

module.exports = {
  baixar_facebook,
  baixar_instagram,
  baixar_pinterest,
  baixar_spotifydl,
  buscar_spotify,
  stalkear_instagram,
  baixar_threads,
  baixar_tiktok,
  baixar_twitter,
  baixar_youtube,
}
