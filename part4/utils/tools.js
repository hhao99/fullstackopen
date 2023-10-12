const reverse = (msg) => {
    return msg
            .split('')
            .reverse()
            .join('')
}
const average = (arr) => {
    return arr.length === 0 ? 0 : arr.reduce( (sum,item) => sum +item, 0)/arr.length
}

module.exports = {
    reverse,
    average
}