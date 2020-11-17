const { readFileSync, writeFileSync } = require('fs')

const read = _ => JSON.parse(readFileSync('./State/data.json', 'utf8'))
const save = newFileData => writeFileSync('./State/data.json', JSON.stringify(newFileData, null, 2))


const set = (key, value) => {
    const data = read()
    data[key] = value
    save(data)
}

const remove = (key) => {
    const data = read()
    if (data[key]) delete data[key]
    save(data)
}

const get = key => {
    const data = read()
    return data[key]
}

const push = (key, values) => {
    const data = read()
    if (!Array.isArray(values)) values = [values]
    data[key] = data[key] ? [...data[key], ...values] : values
    save(data)
}

module.exports = {
    set,
    remove,
    get,
    push
}