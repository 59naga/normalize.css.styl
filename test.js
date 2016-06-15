import test from 'ava'
import stylus from 'stylus'
import escapeRegexp from 'escape-regexp'

import normalize from './'

const render = str => {
  let css
  stylus(str)
  .use(normalize())
  .import('normalize.css.styl')
  .set('compress', true)
  .render((err, data) => {
    if (err) {
      throw err
    }

    css = data
  })
  return css
}

const specs = [
  {
    description: 'when import should not be yielding',
    code: '',
    expected: /^$/
  },
  {
    description: 'when execute mixin, should be yielding',
    code: 'normalize()',
    expected: new RegExp(`^${escapeRegexp('/* normalize.css v4.1.1 | MIT License')}`)
  }
]

specs.forEach(spec => {
  test(spec.description, t => {
    const {code, expected} = spec
    t.true(expected.test(render(code)))
  })
})
