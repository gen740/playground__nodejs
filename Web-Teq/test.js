const sleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}


async function test(text, count) {
    for (let i = 0; i < count; i++) {
        console.log(text);
    }
}

async function run() {
    var now = new Date()
    await sleep(10000)
    var then = new Date()
    console.log(then - now)

}
run()
