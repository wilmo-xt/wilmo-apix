const { remini } = require('betabotz-tools') 
const { removebg } = require('betabotz-tools') 
const { toanime } = require('betabotz-tools')
const { tozombie } = require('betabotz-tools') 

// imagem hd
function remini_wxt(sexo) {
const results = remini(sexo)
//console.log(results) // JSON
return results //JSON
}

// remover fundo 
function remover_fundo(wimas) {
const results = removebg(wimas)
//console.log(results) // JSON
return results //JSON
}

// imagem em anime
function toanimee(seios) {
const results = toanime(seios)
//console.log(results) // JSON
return results //JSON
}

// imagem zombi
function tozombi(xereca) {
const results = tozombie(xereca)
//console.log(results) // JSON
return results //JSON
}


module.exports = {
remini_wxt,
remover_fundo,
toanimee,
tozombi,
}