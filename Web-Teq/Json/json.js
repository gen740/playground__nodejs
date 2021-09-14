const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('./test.json', 'utf-8'))
const result = {}

jsonObject.list.forEach((obj) => {
    result[obj.id] = obj
})
console.log(jsonObject)
console.log(jsonObject.list[0])
console.log(result['hoge'])
