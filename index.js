//Biblioteca para pegar o input do usuário
const readLine = require('readline-sync')

//Função que agrupo tudo
function start(){
    const content = {}

        content.searchTerm = askAndReturnSearchTerm()
        content.prefix = askAndReturnPrefix()

        function askAndReturnSearchTerm(){
            return readLine.question('Type a Wikipedia search term: ')
        }

        function askAndReturnPrefix(){
            const prefixes = ['Who is','what is','The history of']
            const selectedPrefixIndex = readLine.keyInSelect(prefixes)
            const selectedPrefixText = prefixes[selectedPrefixIndex]
           return selectedPrefixText
        }

    console.log(content)
}

start()
