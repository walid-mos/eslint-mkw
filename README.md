# eslint-config-mkw

Airbnb extended, typescript + React rules enforcement

# Compatibility

Theses plugins are already included in this package : 
- @next/eslint-plugin-next
- @typescript-eslint/eslint-plugin
- eslint
- eslint-plugin-cypress
- eslint-plugin-eslint-plugin
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-node
- eslint-plugin-react

Theses configs are already included in this package : 
- eslint-config-airbnb
- eslint-import-resolver-typescript
- @typescript-eslint/parser


## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-config-mkw`:

```sh
npm install eslint-config-mkw --save-dev
```

## Usage

Add `mkw` to the extends section of your `.eslintrc` configuration file. This packages needs to be the last one extended :

```json
{
    "extends": [
        "eslint-config-mkw"
    ]
}
```


