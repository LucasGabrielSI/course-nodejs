const assert = require('assert')
const { getPeople } = require('./service')

const nock = require('nock')

describe('Star Wars Tests', function () {
    this.beforeAll(() => {
        const response = { count: 1,
            next: null,
            previous: null,
            results: [ { 
                name: 'R2-D2',
                height: '96',
                mass: '32',
                hair_color: 'n/a',
                skin_color: 'white, blue',
                eye_color: 'red',
                birth_year: '33BBY',
                gender: 'n/a',
                homeworld: 'https://swapi.co/api/planets/8/',
                vehicles: [],
                starships: [],
                created: '2014-12-10T15:11:50.376000Z',
                edited: '2014-12-20T21:17:50.311000Z',
                url: 'https://swapi.co/api/people/3/' 
            } ] 
        }

        nock('https://swapi.co/api/people')
        .get('/?search=r2-d2&format=json')
        .reply(200, response)
    })

    it('get r2d2 with correct format', async () => {
        const expected = [{ 
            name: 'R2-D2', 
            height: '96'
        }]

        const base_name = `r2-d2`
        const result = await getPeople(base_name)
        assert.deepEqual(result, expected)
    });
});