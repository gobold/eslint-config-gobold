# eslint-config-gobold

From the ESLint team: [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)

## Usage

### Basic

```
$ npm i eslint-config-gobold eslint
```

Add to your .eslintrc

```
{
  "extends": "gobold"
}
```

### ES6

To use the es6 rule set:

```
$ npm i eslint-config-gobold babel-eslint eslint
```

Add this to your .eslintrc:

```
{
  "extends": "gobold/es6"
}
```

### React

To use the React rule set:

```
$ npm i eslint-config-gobold eslint-plugin-react eslint
```

Add this to your .eslintrc:

```
{
  "extends": "gobold/react"
}
```

## Composition

You can use any combination of these shareable configs.

Install the dependencies:

```
$ npm i eslint-config-gobold babel-eslint eslint-plugin-react eslint
```

.eslintrc:

```
{
  "extends": [
    "gobold",
    "gobold/es6",
    "gobold/react"
  ]
}
```

## Notes

Eslint config properties like `env` or `globals` are 
project specific. Set them in your own .eslintrc file.
Override with your own rules in your .eslintrc file.

For instance:

```
{
  "env": {
    "browser": true
  },
  "globals": {
    "React": true
  },
  "extends": [
    "gobold",
    "gobold/react"
  ]
}
```
