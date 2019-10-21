const { getPeople } = require('./service')

async function main() {
    try {
        const { results } = await getPeople(`a`)
        const weights = results.map(item => parseInt(item.height))
        console.log(weights)
        const total_weights = weights.reduce( (previous, next) => {
            return previous + next 
        }, 0);
        console.log('Total', total_weights) 
    } catch( error ) {
        console.log('It\'s very bad', error);
    }
}

main()