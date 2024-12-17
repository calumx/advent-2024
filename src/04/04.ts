import { searchForMasAsX, searchForXmas } from './utils'

export function parse(input: string) {
  return input.split('\n').map(line => line.split(''))
}

export function partOne(input: ReturnType<typeof parse>) {
  let result = 0

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i]!.length; j++) {
      if (input[i]?.[j] !== 'X') continue
      result += searchForXmas(input, i, j)
    }
  }

  return result
}

export function partTwo(input: ReturnType<typeof parse>) {
  let result = 0

  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i]!.length - 1; j++) {
      if (input[i]?.[j] !== 'A') continue
      result += searchForMasAsX(input, i, j)
    }
  }

  return result
}
