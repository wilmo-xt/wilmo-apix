const msg = {
pesquisa: "Cadê o termo de pesquisa? seu virgem",
audio: "Erro ao buscar o audio fez o L",
video: "Erro ao buscar o video foi de comes",
img: "Erro ao buscar a imagem foi de valas",
erro: "Erro ao na função não retornou nada",
url: " Cadê a pora da url ta mi tirando?",
ia: "Erro ao responder essa ia foi de bobeira",
}


// APIS DE IMAGEM TOMA NU CU SECSO
const { 
pinterest, 
wallpaperhd
} = require('./rotas/wxt-img')

// APIS DE DOWLOADS TOMA NJ CU SECSO
const { 
scrapeMyInstants
} = require('./rotas/baixadores/audiomeme')

const { 
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
} = require('./rotas/baixadores/midiaSocial')


// APIS DE INTELIGÊNCIA ARTIFICIAL NU CU SECSO
const { 
chatgpt_beta
} = require('./rotas/ia/betabotz-tools')

// APIS DE FERRAMENTAS  NU CU SECSO
const { 
remini_wxt,
remover_fundo,
toanimee,
tozombi,
} = require('./rotas/tools/tools')


module.exports = { 
msg,
// imagens normais sem ia
pinterest,
wallpaperhd,
// baixadores
scrapeMyInstants,
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
// inteligência artificial 
chatgpt_beta,
// ferramentas 
remini_wxt,
remover_fundo,
toanimee,
tozombi,
}