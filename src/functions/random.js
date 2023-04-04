// O número está sendo retornado em String
const random = (min, max) => {
    const r = Math.random() * (max - min) + min
    if(Math.floor(r) < 10) {
        return '0' + Math.floor(r).toString()
    } else {
        return Math.floor(r).toString()
    }
    
}

export default random
