import random from './random.js'

// refatoração
export const mega = () => {
    const numbers = []
    do {
        const num = random(1, 60)
        if(!numbers.includes(num)) numbers.push(num)
    } while(numbers.length < 6)
    return numbers
}

/*
export const megasena = () => {

    const array = ['01', '02', '03', '04', '05', '06']

    array.filter((valor, indice) => {
        let num = random(1, 60)
        if(indice === 0) {
            array[indice] = num
        } else {
            if(array[indice] === array[indice - 1]) {
                let tmp = random(1, 60)
                if(tmp === array[indice - 1]) {
                    throw('err')
                } else {
                    array[indice] = tmp
                }
            } else {
                array[indice] = num
            }
        }
    })
    return array
}
*/
