import {
  getMiddleValue,
  isUpdateValid,
  reorderUpdate,
  setRulesAndGetUpdates
} from './utils'

export function parse(input: string) {
  return input.split('\n').reduce<string[][]>(
    (acc, line) => {
      if (line === '') return acc
      if (line.includes('|')) {
        acc[0]!.push(line)
      } else acc[1]!.push(line)
      return acc
    },
    [[], []]
  )
}

export function partOne(input: ReturnType<typeof parse>) {
  const pagesToPrint = setRulesAndGetUpdates(input)
  return getMiddleValue(pagesToPrint.filter(isUpdateValid))
}

export function partTwo(input: ReturnType<typeof parse>) {
  const pagesToPrint = setRulesAndGetUpdates(input)
  const updatesToAmend = pagesToPrint.filter(update => !isUpdateValid(update))
  return getMiddleValue(updatesToAmend.map(reorderUpdate))
}
