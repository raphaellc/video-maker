const readline = require('readline-sync')
function userInput(content){
 content.searchTerm = askAndReturnSearchTerm()
 content.prefix = askAndReturnPrefix()
 
 function askAndReturnSearchTerm(){
     return readline.question('Type a Wikipedia search term: ')
 }
 
 function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is','The History of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option:')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    return selectedPrefixText
 }
}
module.exports = userInput