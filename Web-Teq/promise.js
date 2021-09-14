function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, ms);
    });
}

var result = false

async function test() {
    await sleep(2000)
    console.log('start')
    result = true
}

async function one() {
    console.log('then')
}

function two() {
    console.log('two')
}

function run() {
    test()
    console.log(result)
    if (result) {
        two()
    }
}

async function loop() {
    while (true) {
        console.log('loop')
        await sleep(300)
        run()
    }
}

loop()
