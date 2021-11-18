/* Verifica si un numero es par */
const pair = (a) => a !== 0 ? a % 2 === 0 ? 'Si' : 'No' : 'Si'
/* Verifica si todos los numeros de un array son pares */
const arrayPair = (array) => array.some(item => item % 2 !== 0) ? 'No' : 'Si'
/* Longitud de un string */
const stringLength = (a) => a.length
/* Dia de la semana por numero */
const weekDayByNumber = (day) => {
  switch (day) {
    case 1:
      return 'domingo'
      break;
    case 2:
      return 'lunes'
      break;
    case 3:
      return 'martes'
      break;
    case 4:
      return 'miercoles'
      break;
    case 5:
      return 'jueves'
      break;
    case 6:
      return 'viernes'
      break;
    case 7:
      return 'sabado'
      break;

    default:
      return 'No es un dia valido'
      break;
  }
}
/* Hora actual */
const currentHour = () => {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}`
}
/* Ordenar numeros de array */
const orderedArray = (array) => array.sort((a,b ) => {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1;
  }
  // a debe ser igual b
  return 0;
})

/* minusculas a mayusculas */
const stringToUpperCase = (a) => a.toString().toUpperCase()

module.exports = {
  pair,
  arrayPair,
  currentHour,
  orderedArray,
  stringLength,
  stringToUpperCase,
  weekDayByNumber
}