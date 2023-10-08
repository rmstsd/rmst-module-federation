const acorn = require('acorn')
const walk = require('acorn-walk')

const code = `
const a = 1
// 哈哈哈哈
/* 哈哈哈哈 */
`

walk.simple(
  acorn.parse(code, {
    ecmaVersion: 'latest'
  }),
  {
    // Literal(node) {
    //   console.log(`Found a literal: ${node.value}`)
    // },
    Comment(node) {
      console.log('注释', node)
    }
  }
)
