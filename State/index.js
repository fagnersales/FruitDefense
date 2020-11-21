const { readFileSync, writeFileSync } = require('fs')

const read = _ => JSON.parse(readFileSync('./State/data.json', 'utf8'))

const state = read()

const saveState = () => {
    writeFileSync('./State/data.json', JSON.stringify(state, null, 2))
}

const set = (key, value) => {
    state[key] = value
    saveState()
}

const remove = (key) => {
    if (state[key]) delete state[key]
    saveState()
}

const get = key => {
    return state[key]
}

const push = (key, values) => {
    if (!Array.isArray(values)) values = [values]
    state[key] = state[key] ? [...state[key], ...values] : values
    saveState()
}

const reset = () => set({})

module.exports = {
    set,
    remove,
    get,
    push,
    reset
}