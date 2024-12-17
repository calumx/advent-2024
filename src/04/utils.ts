import { DIAGONALS, MODIFIER_MAP, VALID_DIAGONAL_PATTERNS } from './constants'
import { Grid, Direction } from './types'

export const searchForXmas = (grid: Grid, i: number, j: number): number => {
  let result = 0

  Object.values(Direction).forEach(direction => {
    if (wordEqualsXmas(grid, i, j, direction)) result++
  })

  return result
}

const wordEqualsXmas = (
  grid: Grid,
  i: number,
  j: number,
  direction: Direction
): boolean => {
  let result = ''
  const { modifierI, modifierJ } = MODIFIER_MAP.get(direction)!
  for (let k = 0; k <= 3; k++) {
    const nextRow = i + modifierI * k
    const nextCol = j + modifierJ * k
    result += grid[nextRow]?.[nextCol]
  }
  return result === 'XMAS'
}

export const searchForMasAsX = (grid: Grid, i: number, j: number): number => {
  let result = 0

  const diagonalChars = DIAGONALS.map(direction => {
    const { modifierI, modifierJ } = MODIFIER_MAP.get(direction)!
    return grid[i + modifierI]?.[j + modifierJ]
  }).filter(char => char === 'M' || char === 'S')

  if (diagonalChars.length !== 4) return 0

  if (VALID_DIAGONAL_PATTERNS.includes(diagonalChars.join(''))) result++

  return result
}
