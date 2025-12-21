import pluginJs from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import pluginFsd from 'eslint-plugin-fsd-lint'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginPerfectionist from 'eslint-plugin-perfectionist'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginStorybook from 'eslint-plugin-storybook'
import pluginReactUnicorn from 'eslint-plugin-unicorn'
import pluginTypescript from 'typescript-eslint'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'storybook-static/**',
    '**/*.css',
    'build/**',
    'next-env.d.ts'
  ]),

  /* Airbnb */

  {
    rules: {
      'no-empty-pattern': [
        'error',
        {
          allowObjectPatternsAsParameters: true
        }
      ],
      'array-callback-return': [
        'error',
        {
          checkForEach: true
        }
      ],
      'no-await-in-loop': 'error',
      'no-inner-declarations': ['error', 'both'],
      'no-promise-executor-return': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-useless-assignment': 'error',
      'require-atomic-updates': 'error',
      'consistent-this': 'error',
      eqeqeq: 'error',
      'default-case-last': 'error',
      'func-name-matching': [
        'error',
        {
          considerPropertyDescriptor: true
        }
      ],
      'func-names': [
        'error',
        'as-needed',
        {
          generators: 'as-needed'
        }
      ],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'logical-assignment-operators': [
        'error',
        'always',
        {
          enforceForIfStatements: true
        }
      ],
      'no-alert': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'warn',
      'no-div-regex': 'error',
      'no-else-return': [
        'error',
        {
          allowElseIf: false
        }
      ],
      'no-eval': [
        'error',
        {
          allowIndirect: true
        }
      ],
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-implicit-coercion': [
        'error',
        {
          allow: ['!!']
        }
      ],
      'no-extra-boolean-cast': 'off',
      'no-iterator': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true
        }
      ],
      'no-proto': 'error',
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-sequences': [
        'error',
        {
          allowInParentheses: false
        }
      ],
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allowInArrayDestructuring: false,
          allowInObjectDestructuring: false,
          allowFunctionParams: true
        }
      ],
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false
        }
      ],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-void': [
        'error',
        {
          allowAsStatement: true
        }
      ],
      'no-var': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'symbol-description': 'error',
      yoda: 'error',
      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true
        }
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: true
        }
      ],
      'comma-dangle': ['error', 'never']
    }
  },

  /* Code style */

  {
    plugins: {
      perfectionist: pluginPerfectionist,
      prettier: pluginPrettier
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true
        }
      ],
      'react/button-has-type': [
        'error',
        {
          button: true,
          submit: true,
          reset: true
        }
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-object-types': [
        'warn',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          newlinesBetween: 0,
          groups: [
            'required-slot',
            'optional-slot',
            'required-property',
            'optional-property',
            'required-method',
            'optional-method',
            'index-signature',
            {
              newlinesBetween: 1
            },
            'unknown'
          ],
          customGroups: [
            {
              groupName: 'required-slot',
              elementNamePattern: '^[A-Z]',
              selector: 'property',
              modifiers: ['required']
            },
            {
              groupName: 'optional-slot',
              elementNamePattern: '^[A-Z]',
              selector: 'property',
              modifiers: ['optional']
            }
          ]
        }
      ],
      'perfectionist/sort-interfaces': [
        'warn',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: false,
          newlinesBetween: 0,
          groups: [
            'required-slot',
            'optional-slot',
            'required-property',
            'optional-property',
            'required-method',
            'optional-method',
            'index-signature',
            {
              newlinesBetween: 1
            },
            'unknown'
          ],
          customGroups: [
            {
              groupName: 'required-slot',
              elementNamePattern: '^[A-Z]',
              selector: 'property',
              modifiers: ['required']
            },
            {
              groupName: 'optional-slot',
              elementNamePattern: '^[A-Z]',
              selector: 'property',
              modifiers: ['optional']
            }
          ]
        }
      ],
      'perfectionist/sort-intersection-types': [
        'warn',
        {
          type: 'unsorted',
          ignoreCase: false,
          newlinesBetween: 0,
          groups: ['named', 'object']
        }
      ],
      'func-style': [
        'error',
        'expression',
        {
          allowArrowFunctions: true
        }
      ]
    }
  },

  /* Imports/Exports */

  {
    files: ['**/*.{mjs,js,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          tsconfigRootDir: import.meta.dirname
        }
      }
    },
    rules: {
      'import/consistent-type-specifier-style': [
        'error',
        'prefer-top-level'
      ],
      'import/exports-last': 'error',
      'import/first': 'error',
      'import/group-exports': 'error',
      'import/newline-after-import': 'error',
      'import/no-commonjs': 'error',
      'import/no-cycle': 'error',
      'import/no-deprecated': 'warn',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-self-import': 'error',
      'import/no-unused-modules': [
        'error',
        {
          missingExports: true
        }
      ],
      'import/no-unassigned-import': [
        'error',
        {
          allow: ['**/*.css']
        }
      ],
      'import/no-useless-path-segments': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc'
          },
          groups: [
            'external',
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              group: 'parent',
              pattern: '@/**',
              position: 'before'
            }
          ]
        }
      ],
      'import/no-restricted-paths': [
        'error',
        {
          zones: [
            {
              target: 'internal/pages',
              from: 'internal/app',
              message: 'Pages cannot import from App layer.'
            },
            {
              target: 'internal/widgets',
              from: ['internal/app', 'internal/pages'],
              message:
                'Widgets cannot import from App or Pages layers.'
            },
            {
              target: 'internal/features',
              from: [
                'internal/app',
                'internal/pages',
                'internal/widgets'
              ],
              message:
                'Features cannot import from App, Pages or Widgets layers.'
            },
            {
              target: 'internal/entities',
              from: [
                'internal/app',
                'internal/pages',
                'internal/widgets',
                'internal/features'
              ],
              message:
                'Entities cannot import from App, Pages, Widgets or Features layers.'
            },
            {
              target: 'internal/shared',
              from: [
                'internal/app',
                'internal/pages',
                'internal/widgets',
                'internal/features',
                'internal/entities'
              ],
              message: 'Shared can only import from Shared layer.'
            }
          ]
        }
      ]
    }
  },

  /* Unicorn */

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      unicorn: pluginReactUnicorn
    },
    rules: {
      ...pluginReactUnicorn.configs.recommended.rules,
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/no-document-cookie': 'error',
      'unicorn/prevent-abbreviations': [
        'warn',
        {
          checkFilenames: false,
          allowList: {
            e: true,
            err: true,
            props: true,
            i: true,
            prop: true,
            res: true,
            req: true,
            el: true,
            lib: true,
            rest: true,
            args: true,
            arg: true
          }
        }
      ]
    }
  },

  /* React */

  {
    files: ['**/*.tsx'],
    ...pluginReact.configs.flat.strict,
    ...pluginReact.configs.flat['jsx-runtime'],
    plugins: {
      'react-refresh': pluginReactRefresh
    },
    rules: {
      ...pluginReactHooks.configs['recommended-latest'].rules,
      ...pluginJsxA11y.configs.strict.rules
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  /* Typescript */

  ...[
    ...pluginTypescript.configs.strictTypeChecked,
    ...pluginTypescript.configs.stylisticTypeChecked
  ].map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}']
  })),

  /* Storybook */

  ...pluginStorybook.configs['flat/recommended'],

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true }
      ],
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true
        }
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/method-signature-style': [
        'error',
        'property'
      ],
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          enforceConst: true,
          ignoreDefaultValues: true,
          ignoreNumericLiteralTypes: true,
          ignoreTypeIndexes: true,
          ignoreArrayIndexes: true,
          ignore: [0, 1, -1]
        }
      ],
      '@typescript-eslint/no-misused-promises': [
        'off',
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false
          }
        }
      ],
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'functions-and-types',
          ignoreTypeValueShadow: false
        }
      ],
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-destructuring': [
        'error',
        {
          array: true,
          object: true
        },
        {
          enforceForRenamedProperties: false,
          enforceForDeclarationWithTypeAnnotation: true
        }
      ],
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          ignoreStringArrays: false
        }
      ],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {
          allowDefaultCaseForExhaustiveSwitch: false,
          requireDefaultForNonUnion: true
        }
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },

  /* Query */

  ...[...pluginQuery.configs['flat/recommended']].map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}']
  })),

  /* FSD */

  {
    plugins: {
      fsd: pluginFsd
    },
    rules: {
      'fsd/forbidden-imports': [
        'error',
        {
          alias: {
            value: '@',
            withSlash: true
          }
        }
      ],
      'fsd/no-relative-imports': 'error',
      'fsd/no-public-api-sidestep': 'error',
      'fsd/no-cross-slice-dependency': 'error',
      'fsd/no-ui-in-business-logic': 'error',
      'fsd/no-global-store-imports': 'error',
      'fsd/ordered-imports': 'off'
    }
  },

  /* Exceptions */

  {
    files: ['next.config.{*js,ts}'],
    rules: {
      'import/no-unassigned-import': 'off',
      'fsd/no-relative-imports': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'unicorn/prefer-module': 'off'
    }
  },
  {
    files: [
      '.storybook/**',
      '**/*.stories.{*jsx,tsx}',
      '*.config.{*js,ts}',
      '**/*.d.ts',
      'app/**',
      'middleware.ts',
      'proxy.ts',
      'internal/shared/config/**'
    ],
    rules: {
      'import/no-default-export': 'off'
    }
  },
  {
    files: ['internal/shared/config/**', 'next.config.ts'],
    rules: {
      'unicorn/no-await-expression-member': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'import/no-commonjs': 'off'
    }
  },
  {
    files: ['internal/**/index.ts', '**/*.d.ts'],
    rules: {
      'import/no-unused-modules': 'off'
    }
  },
  {
    files: ['**/*.tsx'],
    rules: {
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      'unicorn/no-nested-ternary': 'off'
    }
  }
])

export default eslintConfig
