const RULE_MAP = new Map<number, Set<number>>()

export const setRulesAndGetUpdates = (input: string[][]): number[][] => {
  const [rules, updates] = input
  if (!rules || !updates) return []
  populateRuleMap(rules)

  return updates.map(update => update.split(',').map(Number))
}

const populateRuleMap = (rules: string[]): void => {
  rules.forEach(rule => {
    const [firstPage, secondPage] = rule.split('|')
    const existingRulesForPage = RULE_MAP.get(Number(firstPage)) || []
    RULE_MAP.set(
      Number(firstPage),
      new Set([...existingRulesForPage, Number(secondPage)])
    )
  })
}

export const isUpdateValid = (update: number[]): boolean => {
  let isValid = true
  update.forEach((page, pageIdx) => {
    if (!RULE_MAP.has(page)) return true
    const rules = RULE_MAP.get(page)
    if (!rules) return true
    rules.forEach(rule => {
      if (!update.includes(rule)) return
      if (pageIdx > update.indexOf(rule)) {
        isValid = false
      }
    })
  })

  return isValid
}

export const getMiddleValue = (input: number[][]) => {
  return input.reduce((acc, update) => {
    const middleIndex = Math.floor(update.length / 2)
    const middleValue = update[middleIndex] || 0
    return acc + middleValue
  }, 0)
}

export const reorderUpdate = (update: number[]): number[] => {
  const rulesets = update.map(page => {
    const rules = Array.from(RULE_MAP.get(page) || [])
    const relevantRules = rules.filter(rule => update.includes(rule))
    return { page, rules: relevantRules }
  })

  return rulesets
    .sort((a, b) => b.rules.length - a.rules.length)
    .map(ruleset => ruleset.page)
}
