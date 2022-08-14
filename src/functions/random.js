// O número está sendo retornado em String
const random = (min, max) => {
    const r = Math.random() * (max - min) + min
    if(Math.floor(r) < 10) {
        let modified = '0' + Math.floor(r).toString()
        return modified
    } else {
        return Math.floor(r).toString()
    }
    
}

export default random
