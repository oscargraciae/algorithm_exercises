function matchingStrings(strings, queries) {
  const hash = {}
  for (let item of strings) {
    if (hash[item]) {
      hash[item] += 1
    } else {
      hash[item] = 1
    }
  }
  
  return queries.reduce((acc, val) => {
    if (hash[val]) {
      return [...acc, hash[val]]
    } else {
      return [...acc, 0]
    }
  }, [])
}

// 2, 1, 0

const strings = [ 'aba', 'baba', 'aba', 'xzxb' ]
const queries = [ 'aba', 'xzxb', 'ab' ]

matchingStrings(strings, queries)

