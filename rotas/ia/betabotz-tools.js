const { openai } = require('betabotz-tools') 

function chatgpt_beta(wimas) {
const results = openai(wimas)
console.log(results) // JSON
return results //JSON
}

module.exports = {
chatgpt_beta
}