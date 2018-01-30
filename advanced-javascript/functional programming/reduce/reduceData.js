// Using reduce() with data.txt
const fs = require('fs')
const out = fs.readFileSync('data.txt', 'utf8')
            .trim()
            .split('\r\n')
            .map(line => line.split('  '))
            .reduce((customer, line) => {

              customer[line[0]] = customer[line[0]] || []
              customer[line[0]].push({
                name: line[1],
                price: line[2],
                quantity: line[3]
              })

              return customer

            }, {}) // We start with an empty object

console.log(JSON.stringify(out, null, 2))

/*
We came from this normal text....

mark johansson  waffle iron  80  2
mark johansson  blender   200  1
mark johansson  knife   10  4
Nikita Smith  waffle iron   80  1
Nikita Smith  knife   10  2
Nikita Smith  pot   20  3

.... to this JSON thanks to reduce()
{
  "mark johansson": [
    {
      "name": "waffle iron",
      "price": "80",
      "quantity": "2"
    },
    {
      "name": "blender",
      "price": " 200",
      "quantity": "1"
    },
    {
      "name": "knife",
      "price": " 10",
      "quantity": "4"
    }
  ],
  "Nikita Smith": [
    {
      "name": "waffle iron",
      "price": " 80",
      "quantity": "1"
    },
    {
      "name": "knife",
      "price": " 10",
      "quantity": "2"
    },
    {
      "name": "pot",
      "price": " 20",
      "quantity": "3"
    }
  ]
}
*/