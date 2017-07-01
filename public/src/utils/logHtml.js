import { indentHTML } from 'indent.js'

export default string => {
  const indent = string.replace(/</gi, '\r\n<')
  console.log(indentHTML(indent, '  '))
}
