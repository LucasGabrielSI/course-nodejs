const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function getPeople(name) {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    console.log(response.data)
    return response.data.results.map(mappedPeople)
}

function mappedPeople(item) {
    return {
        name: item.name,
        height: item.height
    }
}

module.exports = {
    getPeople: getPeople
}