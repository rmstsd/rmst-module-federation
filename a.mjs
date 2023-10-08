import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import generate from '@babel/generator'
import * as types from '@babel/types'

const code = `
const a = 1
// 哈哈哈哈
/* 哈哈哈哈 */
`

const ast = parse(code, {})

traverse.default(ast, {
  enter(path) {
    types.removeComments(path.node)
  }
})

const nvCode = generate.default(ast, {}).code

console.log(nvCode)
