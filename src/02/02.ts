const isReportValid = (report: number[]) => {
  const firstNum = report[0]
  const secondNum = report[1]

  if (!firstNum || !secondNum) return false

  let direction: 'up' | 'down' = firstNum < secondNum ? 'up' : 'down'

  for (let i = 0; i < report.length - 1; i++) {
    const num = report[i]
    const nextNum = report[i + 1]
    if (!num || !nextNum) return false
    if (direction === 'up' && num >= nextNum) return false
    if (direction === 'down' && num <= nextNum) return false
    const distance = Math.abs(num - nextNum)
    if (distance < 1 || distance > 3) return false
  }

  return true
}

export function parse(input: string) {
  return input.split('\n').map(report => report.split(' ').map(Number))
}

export function partOne(input: ReturnType<typeof parse>) {
  return input.filter(isReportValid).length
}

export function partTwo(input: ReturnType<typeof parse>) {
  const valid: number[][] = []
  const invalid: number[][] = []

  input.forEach(report => {
    if (isReportValid(report)) {
      valid.push(report)
    } else {
      invalid.push(report)
    }
  })

  invalid.forEach(report => {
    for (let i = 0; i <= report.length - 1; i++) {
      const modified = report.toSpliced(i, 1)
      if (isReportValid(modified)) {
        valid.push(modified)
        break
      }
    }
  })

  return valid.length
}
