`normalize.css.styl`
---

<p align="right">
  <a href="https://npmjs.org/package/normalize.css.styl">
    <img src="https://img.shields.io/npm/v/normalize.css.styl.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/normalize.css.styl">
    <img src="http://img.shields.io/travis/59naga/normalize.css.styl.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/normalize.css.styl">
    <img src="https://img.shields.io/gemnasium/59naga/normalize.css.styl.svg?style=flat-square">
  </a>
</p>

add `normalize()` mixin using [normalize.css/normalize.css](https://github.com/10up/normalize.css#readme)

Installation
---

```bash
npm install normalize.css.styl --save
```

or, force latest `normalize.css` installation using `@newest`.

```bash
npm install normalize.css.styl@newest --save
```

Usage
---

### Via CLI

```stylus
// index.styl
@import 'normalize.css.styl'

normalize()
```

```bash
stylus --use normalize.css.styl index.styl
# /* normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
# /**
#  * 1. Change the default font family in all browsers (opinionated).
#  * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
#  */
# html {
# ...
```

### Via API

```js
import stylus from 'stylus';
import normalizeCssStyl from 'normalize.css.styl';

stylus('normalize()')
.use(normalizeCssStyl())
.import('normalize.css.styl')
.render((err, css) => {
  if (err) {
    throw err;
  }
  console.log(css);
  // /* normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
  // /**
  //  * 1. Change the default font family in all browsers (opinionated).
  //  * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
  //  */
  // html {
  // ...
});
```

Mixins
---

## `normalize()`

expand the `normalize.css` in the execute position.

**In**
```stylus
@import 'normalize.css.styl'
normalize()
```

**Out**
```css
/* normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
 */
html {
  font-family: sans-serif; /* 1 */
  ...
```

**In**
```stylus
@import 'normalize.css.styl'
#container
  normalize()
```

**Out**
```css
/* normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
#container html {
  font-family: sans-serif; /* 1 */
  ...
```

Related projects
---
* [sanitize.styl - add sanitize() mixin using sanitize.css/lib/sanitize.styl](https://github.com/59naga/sanitize.styl#readme)

Development
---
Requirement global
* NodeJS v6.2.1
* Npm v3.9.3 (or [pnpm](https://github.com/rstacruz/pnpm))

```bash
git clone https://github.com/59naga/normalize.css.styl
cd normalize.css.styl
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
