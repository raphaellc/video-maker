const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apikey
function robot(content){
    console.log(`Recebi com sucesso o content: ${content.searchTerm}`)
    fetchContentFromWikipedia(content)
    //sanitizeContent(content)
    //breakContentIntoSentences(content)
   async function fetchContentFromWikipedia(content){
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo("web/WikipediaParser/0.1.2")
        const wikipediaResponde = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponde.get()
        console.log(wikipediaContent)
    }
}
module.exports = robot