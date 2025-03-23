//📌 Ejercicio Completo - "El Juego del Oráculo"
//Te encuentras frente a un viejo ordenador que parece estar conectado a un sistema de seguridad avanzado. Para desbloquearlo, debes resolver un reto planteado por un misterioso oráculo digital. El desafío consiste en lo siguiente:

//🔍 Generación de Nombre de Usuario Aleatorio
//Debes crear un nombre de usuario aleatorio combinando:

//Una letra al azar del string "BCDFGHJKLMNPRSTVWXYZ" (consonantes).
//Una letra al azar del string "AEIOU" (vocales).
//Un número aleatorio entre 1 y 99.
//El resultado debe mostrarse en el siguiente formato: "ConsonanteVocalNúmero" (Ej: "MA12").

const aleatoryConsonante = () => {
    const consonantes = "BCDFGHJKLMNPRSTVWXYZ"
    const aleatoryNumber = Math.floor(Math.random()*consonantes.length)
    const aleatoryConsonante = consonantes.charAt(aleatoryNumber)
    return aleatoryConsonante
}

const aleatoryVocal = () => {
    const vocals = "AEIOU"
    const aleatoryNumber = Math.floor(Math.random()*vocals.length)
    const aleatoryVocal = vocals.charAt(aleatoryNumber)
    return aleatoryVocal
}
const aleatoryNumber = () => {
    const aleatoryNumber = Math.floor(Math.random()*(99-1)+1)
    return aleatoryNumber
}
const generateUser = () => {
    const userName = `Nombre de usuario = ${aleatoryConsonante()}${aleatoryVocal()}${aleatoryNumber()}`
    return userName
}


//🔍 Creación de Códigos de Seguridad
//Debes crear una lista de cinco códigos de seguridad siguiendo estas instrucciones:

//Cada código debe ser un número aleatorio entre 1000 y 9999.
//Todos los códigos generados deben almacenarse en un array.
//El array completo debe mostrarse por consola.


const aleatoryNumberBettween1000and9999 = () => {
    const aleatoryNumber = Math.floor(Math.random()*(9999-1000)+1000)
    return aleatoryNumber
}

const numberArray = () => {
    const unos = aleatoryNumberBettween1000and9999()
    const doses = aleatoryNumberBettween1000and9999()

    const total = `${unos} ${doses}`
    return total
}

console.log(numberArray([0]));




//🔍 Verificación de Códigos Válidos
//Debes determinar si al menos uno de los códigos generados es divisible por 7.
//Si al menos un código cumple esta condición, debes imprimir: "Código válido encontrado: X" (donde X es el primer número que cumple la condición).
//Si ninguno es divisible por 7, debes imprimir: "No se encontró ningún código válido."

const validateNumber = () => {

    if (numberArray[0] % 7 === 0) {
        `Código válido encontrado: ${numberArray[0]}`
    } else if (numberArray[1] % 7 === 0) {
        `Código válido encontrado: ${numberArray[1]}`
    } else if (numberArray[2] % 7 === 0) {
        `Código válido encontrado: ${numberArray[2]}`
    } else if (numberArray[3] % 7 === 0) {
        `Código válido encontrado: ${numberArray[3]}`
    } else if (numberArray[4] % 7 === 0) {
        `Código válido encontrado: ${numberArray[4]}`
    } else {'No se encontró ningún código válido'}

}
//🔍 Desencriptar un Mensaje
//El oráculo te presenta un mensaje cifrado.
//["Fuego", "Infectados", "Refugio", "Munición", "Suministros"]
//Tu tarea es:
//Obtener la primera, tercera y última letra de la palabra obtenida en un solo string.

//Quise hacerlo más sencillo, con una función general que hiciera la acción y aplicarlo a cada palabra pero no supe hacerlo. No caí en como podía mandar la palabra (message[0]) a la función que ejecutaba el cálculo.

const descifrateWord = (message) => {
    const firstWord = message[0].charAt(0) + message[0].charAt(2) + message[0].charAt(message[0].length-1)
    const secondWord = message[1].charAt(0) + message[1].charAt(2) + message[1].charAt(message[1].length-1)
    const thirdWord = message[2].charAt(0) + message[2].charAt(2) + message[2].charAt(message[2].length-1)
    const fourthWord = message[3].charAt(0) + message[3].charAt(2) + message[3].charAt(message[3].length-1)
    const fifthWord = message[4].charAt(0) + message[4].charAt(2) + message[4].charAt(message[4].length-1)
    
    const code = firstWord + secondWord + thirdWord + fourthWord + fifthWord

    return code
}


//🔍 Combinar todas las piezas
//Finalmente, debes imprimir un resumen que incluya:
//El nombre de usuario generado.
//El array de códigos de seguridad generados.
//La verificación sobre si se encontró o no un código válido.
//El mensaje desencriptado.

console.log(`Resumen: 
    ${generateUser()}, 
    ${validateNumber()}`);

console.log(`${descifrateWord(["Fuego", "Infectados", "Refugio", "Munición", "Suministros"])}`)
