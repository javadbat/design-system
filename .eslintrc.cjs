// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "plugin:react/recommended",
//     ],
//     "parserOptions": {
//         "ecmaFeatures": {
//             "jsx": true
//         },
//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//     }
// };

'use strict';
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "worker":true,
    },
    "plugins": [
        "react"
        
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "no-console": "off",
        "no-inline-comments": "off",
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-debugger":"warn",
        "no-duplicate-imports":"error",
        "react/prop-types":[0],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-wrap-multilines': ['error', {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
        }],
        'react/no-find-dom-node': 'error',
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never',
        }],
        'react/no-array-index-key': 1 ,
        'no-cond-assign': 'off',
        'no-irregular-whitespace': 'error',
        'no-unexpected-multiline': 'error',
        'valid-jsdoc': ['warn', {
            requireParamDescription: false,
            requireReturnDescription: false,
            requireReturn: false,
            prefer: {returns: 'return'},
        }],
        'curly': ['error', 'multi-line'],
        'guard-for-in': 'error',
        'no-caller': 'error',
        'no-extra-bind': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'camelcase': ['error', {properties: 'never'}],
        'no-mixed-spaces-and-tabs': 'error',
        'semi': 1 ,
        'detect-object-injection':0,
    }
};
