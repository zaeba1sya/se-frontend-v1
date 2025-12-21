/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 70,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson'
  ]
}

export default config
