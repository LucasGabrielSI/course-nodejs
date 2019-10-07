const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

const myemitter = new MyEmitter()
const nameEvent = 'user:click'
myemitter.on(nameEvent, (click) => {
    console.log('an user clicker', click)
})

// myemitter.emit(nameEvent, "on scroll")
// myemitter.emit(nameEvent, "on ok")

// let count = 0
// setInterval(() => {
//     myemitter.emit(nameEvent, 'on ok' + count ++)    
// }, 1000);

const stdin = process.openStdin()
stdin.addListener('data', (value) => {
    console.log(`You wrote: ${value.toString().trim()}`)
})