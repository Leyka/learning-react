// What is a functor ? https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6
// Examples of functor : Array.filter which filters according to a filter function we pass as arg

/**
 * Functor that takes a string and tranform it according to the function passed in argument
 * @param {string} str A clean string 
 * @param {void} func Generic function to play with the string
 */
const stringFunctor = (str, func) => {
  const chars = str.split('')
  return chars.map( char => {
    return String.fromCharCode(
      func(char.charCodeAt(0)) // <= the magic is happening here with 'func'
    )
  }).join('')
}

const add = value => value + 1
const sub = value => value - 1

[3,4,5].map(add) // returns [ 4, 5, 6 ]
stringFunctor('ABC', add) // returns 'BCD'
stringFunctor('XYZ', sub) // returns 'WXY'