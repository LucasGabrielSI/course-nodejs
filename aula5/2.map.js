const service = require('./service')

Array.prototype.myMap = ( callback ) => {
    const newArrayMapped = []
    for(let index = 0; index <= this.length - 1; index++) {
        const res = callback(this[index], index)
        newArrayMapped.push(res)
    }

    return newArrayMapped;
}

async function main() {
      try {
        const results = await service.getPeople(`a`)
        //remove comment or add , for each exemple
        // first exemple
        const names = []
        results.results.forEach(element => {
            names.push(element.name)
        });
        console.log('names', names)
        
        //second exemple
        const names = results.results.map(person => person.name);
        console.log(names)
        
        // third exemple
        const names = results.results.myMap((person, index) => {
            return person.name
        });
        console.log('names', names)
    } catch(error) {
        console.error(`It\'s bad`, error)
    }
}

main()