# Phillip Luther's ES Lint Configuration

A deeply personal set of linting and formatting options.

Their only guiding principal is, "What rules do I (Phil) prefer right now?" That probably means anybody not me (Phil) will hate these rules.

Note the "right now," too -- these rules aren't static. They'll evolve and change and update as I evolve and change and update. That probably means anybody not future me (future Phil) will hate these rules. Likely, and especially, current Phil.

## Usage

Install the config rules:

```bash
$ npm install -D @phillipluther/eslint-config
```

Incorporate normally into an existing `.eslintrc.json` or `.eslintrc.js` or the like:

```js
// in .eslintrc.js, for example
module.exports = {
  /* other options here */
  extends: [/* other configs here */, '@phillipluther/eslint-config']
}
```
