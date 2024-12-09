const regex1 = /mul\(\d{1,3},\d{1,3}\)/g
const regex2 = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g

export function parse(input: string) {
  return input
}

const parseMultiplication = (str: string) => {
  const [a, b] = str.match(/\d{1,3}/g) || []
  return Number(a) * Number(b)
}

export function partOne(input: ReturnType<typeof parse>) {
  return (input.match(regex1) || [])
    .map(parseMultiplication)
    .reduce((acc, curr) => acc + curr, 0)
}

export function partTwo(input: ReturnType<typeof parse>) {
  let multiplicationEnabled = true
  return (input.match(regex2) || [])
    .map(str => {
      switch (str) {
        case "don't()":
          multiplicationEnabled = false
          return 0
        case 'do()':
          multiplicationEnabled = true
          return 0
        default:
          return multiplicationEnabled ? parseMultiplication(str) : 0
      }
    })
    .reduce((acc, curr) => acc + curr, 0)
}
