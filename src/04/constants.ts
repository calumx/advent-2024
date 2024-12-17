import { Direction } from './types'

export const DIAGONALS = Object.values(Direction).filter(direction => {
  return direction.startsWith('diagonal')
})

export const VALID_DIAGONAL_PATTERNS = ['MSMS', 'SMSM', 'MMSS', 'SSMM']

export const MODIFIER_MAP = new Map<
  Direction,
  { modifierI: number; modifierJ: number }
>([
  [Direction.Right, { modifierI: 0, modifierJ: 1 }],
  [Direction.Left, { modifierI: 0, modifierJ: -1 }],
  [Direction.Down, { modifierI: 1, modifierJ: 0 }],
  [Direction.Up, { modifierI: -1, modifierJ: 0 }],
  [Direction.DiagonalDownRight, { modifierI: 1, modifierJ: 1 }],
  [Direction.DiagonalDownLeft, { modifierI: 1, modifierJ: -1 }],
  [Direction.DiagonalUpRight, { modifierI: -1, modifierJ: 1 }],
  [Direction.DiagonalUpLeft, { modifierI: -1, modifierJ: -1 }]
])
