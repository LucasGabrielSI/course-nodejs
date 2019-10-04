// import an module internal of node
const util = require('util')

const getAdressAsync = util.promisify(getAdress)

function getUser() {
    return new Promise((resolve, reject) => {
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
    setTimeout(() => {
        return callback(null, {
            street: "Rua dos bobos",
            number: 0
        })
    }, 2000);
}

const userPromise = getUser();

userPromise
    .then((user) => {
        return getPhone(user.id)
        .then((result) =>{
            return {
                user: {
                    name: user.name,
                    id: user.id
                },
                phone: result
            }
        })  
    })
    .then((res) => {
        const addressUser = getAdressAsync(res.user.id)
        return addressUser.then((result) => {
            return {
                user: res.user,
                phone: res.phone,
                address: result
            }
        })
    })
    .then((result) => {
        console.log(`
            Name: ${result.user.name}
            Address: ${result.address.street}, ${result.address.number}
            phone: (${result.phone.ddd})${result.phone.phone}
        `)
    })
    .catch((error) => {
        console.error('it\'s very bad', error)
    })