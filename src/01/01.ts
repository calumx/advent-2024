export function parse(input: string): [number[], number[]] {
  return input
    .split('\n')
    .toSpliced(-1)
    .map(pair => {
      const [a, b] = pair.split('   ')
      return [Number(a), Number(b)]
    })
    .reduce(
      (acc, [a, b]) => {
        if (a === undefined || b === undefined) return acc
        acc[0].push(a)
        acc[1].push(b)
        return acc
      },
      [[], []] as [number[], number[]]
    )
    .map(subArray => {
      return subArray.sort()
    }) as [number[], number[]]
}

export function partOne(input: ReturnType<typeof parse>): number {
  let result = 0
  const [arr1, arr2] = input

  for (let i = 0; i < input[0]!.length; i++) {
    const [smallest, biggest] = [arr1[i], arr2[i]].sort()
    if (smallest === undefined || biggest === undefined) continue
    result += biggest - smallest
  }
  return result
}

export function partTwo(input: ReturnType<typeof parse>) {}
