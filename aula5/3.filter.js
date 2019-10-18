const { getPeople } = require('./service')

async function main() {
    try {
        const { results } = await getPeople(`a`)

        const familyLars = results.filter((item) => {
            // indexOf return the position of search string if the variable contains the string 
            // if not contains, return -1 
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        });
        const names = familyLars.map(person => person.name)
        console.log('names', names)
    } catch( error ) {
        console.error('it\'s bad', error)
    }
}

main()