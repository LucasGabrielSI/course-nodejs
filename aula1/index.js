/*
0 - get an user
1 - get a user's cell phone number from their id
2 - get user address by id
*/ 

function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: "Lucas Gabriel",
            borndate: new Date()
        })
    }, 1000);
}

function getPhoneById(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            phone: "998280719",
            ddd: 85
        })
    }, 2000);
}

function getAdress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: "Rua dos bobos",
            number: 0
        })
    }, 2000);
}

getUser(function resolveUser(error, user) {
    if(error) {
        console.error("it's very bad in User", error)
        return;
    }
    getPhoneById(user.id, function resolvePhone(error1, phone) {
        if(error1) {
            console.error("it's very bad in Phone", error)
            return;
        }
        getAdress(user.id, function resolveAddress(error2, address) {
            if(error2) {
                console.error("it's very bad in Address", error)
                return;
            }
    
            console.log(`
                Name: ${user.name},
                Address: ${address.street},${address.number},
                Phone: (${phone.ddd})${phone.phone}
            `)
        });
    })
})