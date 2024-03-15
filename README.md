# eslint-config-mkw

Vercel extended, typescript + React rules enforcement
Working with Prettier

Based on [@vercel/style-guide](https://github.com/vercel/style-guide)

# Compatibility

Theses plugins are already included in this package : 
- @next/eslint-plugin-next
- @typescript-eslint/eslint-plugin
- eslint
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-react

Theses configs are already included in this package : 
- eslint-config-prettier
- eslint-import-resolver-typescript
- @typescript-eslint/parser
- [@vercel/style-guide](https://github.com/vercel/style-guide)


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
        "eslint-config-mkw/next"
    ]
}
```

Available configs : 
- /next 
- /react
- /react-library
- /base

Recommended .prettierrc : 
```json
{
	"tabWidth": 4,
	"useTabs": true,
	"semi": false,
	"singleQuote": true,
	"bracketSameLine": true,
	"arrowParens": "avoid"
}
```

