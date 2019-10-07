// import an module internal of node
const util = require('util')

const getAdressAsync = util.promisify(getAdress)

function getUser() {
    return new Promise((resolve, reject) => {
        // simulates it's coming from db
        setTimeout(() => {
            return resolve({
                id: 1,
                name: "Lucas Gabriel",
                borndate: new Date()
            })
        }, 1000);
    });
}

function getPhone(idUser) {
    // simulates it's coming from db
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phone: "998280719",
                ddd: 85
            })
        }, 2000);
    });
}

function getAdress(idUser, callback) {
    // simulates it's coming from db
    setTimeout(() => {
        return callback(null, {
            street: "Rua dos bobos",
            number: 0
        })
    }, 2000);
}


main()
async function main() {
    try {
        const user = await getUser()
        const result = await Promise.all([
            getPhone(user.id), 
            getAdressAsync(user.id)
        ])
        const address = result[1]
        const phone = result[0]
        console.log(`
            Name: ${user.name},
            Phone: (${phone.ddd})${phone.phone},
            Address: ${address.street}, ${address.number}
        `)
    }
    catch(error) {
        console.error('It\' very bad', error)
    }
}